package de.capyclue.canteen.service;

import de.capyclue.canteen.model.DailyMenu;
import de.capyclue.canteen.model.MenuOption;
import de.capyclue.canteen.repository.DailyMenuRepository;
import de.capyclue.canteen.repository.MenuOptionRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class CanteenService implements ICanteenService {
    private final DailyMenuRepository dailyMenuRepository;
    private final MenuOptionRepository menuOptionRepository;

    @Autowired
    public CanteenService(DailyMenuRepository dailyMenuRepository, MenuOptionRepository menuOptionRepository) {
        this.dailyMenuRepository = dailyMenuRepository;
        this.menuOptionRepository = menuOptionRepository;
    }

    /**
     * Requests the daily menus of a canteen from imensa.de
     * @param mensa the canteen to request the menus from
     * @return a list of daily menus
     */
    public List<DailyMenu> requestDailyMenus(String mensa) {
        final String url = "https://www.imensa.de/karlsruhe/";
        try {
            String[] weekdays = {"montag", "dienstag", "mittwoch", "donnerstag", "freitag"};
            List<DailyMenu> dailyMenus = new ArrayList<>(5);
            for (String weekday : weekdays) {
                Document doc = Jsoup.connect(url + mensa + "/" + weekday + ".html").get();
                // DailyMenu meta values
                DailyMenu dailyMenu = new DailyMenu();
                dailyMenu.setCanteen(mensa);
                String date = doc.select("h2.aw-menu-title small").text();
                DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");
                if (date.contains("heute")) {
                    dailyMenu.setDay(new Date());
                } else if (date.contains("morgen")) {
                    dailyMenu.setDay(new Date(new Date().getTime() + 86400000));
                } else {
                    dailyMenu.setDay(dateFormat.parse(date));
                }

                // MenuOption values
                doc.select("div.aw-meal").forEach(element -> {
                    dailyMenu.addOption(createMenuOptionFromElement(element, dateFormat, dailyMenu));
                });
                dailyMenus.add(dailyMenu);
            }
            return dailyMenus;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    /**
     * Extracts the price from the html element
     * @param element the html element to scrape
     * @return the price as a string
     */
    private String extractPriceFromDom(Element element){
        return element.select("div.aw-meal-price").text()
                .replace(element.select(".aw-meal-price-per").text(), "")
                .replace(" €", "")
                .replace(",", ".");
    }

    /**
     * Scrapes the html element for the menu option and creates a MenuOption object
     * @param element the html element to scrape
     * @param dateFormat the date format to parse the last served date
     * @param dailyMenu the daily menu the menu option belongs to
     * @return a MenuOption object
     */
    private MenuOption createMenuOptionFromElement(Element element, DateFormat dateFormat, DailyMenu dailyMenu){
        MenuOption option = new MenuOption();
        option.setName(element.select("p.aw-meal-description").text());
        String price = extractPriceFromDom(element);
        option.setPrice((price.length() > 0) ? Double.parseDouble(price) : 0);
        String tags = element.select("p.aw-meal-attributes").text();
        HashMap<String, String[]> tagMap = filterTagsString(tags);
        option.setAllergens(Arrays.asList(tagMap.get("allergens")));
        option.setAdditives(Arrays.asList(tagMap.get("additives")));
        option.setMeatCategory(tagMap.get("meatCat")[0]);
        try {
            option.setLastServed(dateFormat.parse(tagMap.get("lastServed")[0]));
        } catch (Exception e) {
            option.setLastServed(dailyMenu.getDay());
        }
        return option;
    }

    /**
     * Filters the tags string and returns a map of the tags
     * @param tags the tags string
     * @return a map of the tags
     */
    private HashMap<String, String[]> filterTagsString(String tags){
        HashMap<String, String[]> tagsMap = new HashMap<>();
        String[] tagsArr = tags.split(" ");

        // Meat category
        String meatCat = (!tagsArr[0].contains("ZULETZT") &&
                            !tagsArr[0].contains("ZUSATZ") &&
                            !tagsArr[0].contains("ALLERGEN"))?tagsArr[0]:"Keine Angabe";
        tagsMap.put("meatCat", new String[]{meatCat});

        // Last served
        String lastServed = (tags.contains("ZULETZT"))?
                tags.split("ZULETZT")[1].trim():
                null;
        tagsMap.put("lastServed", new String[]{lastServed});

        // Allergens
        String[] allergens = (tags.contains("ALLERGEN"))?
                tags.split("ALLERGEN")[1].trim().split("ZULETZT")[0].trim().split(" "):
                new String[]{"Keine Allergene"};
        tagsMap.put("allergens", allergens);

        // Additives
        String[] additives = (tags.contains("ZUSATZ"))?
                tags.split("ZUSATZ")[1].trim().split("ZULETZT")[0].trim().split("ALLERGEN")[0].trim().split(" "):
                new String[]{"Keine Zusatzstoffe"};
        tagsMap.put("additives", additives);

        return tagsMap;
    }
}
