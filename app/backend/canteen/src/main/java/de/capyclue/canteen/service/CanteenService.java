package de.capyclue.canteen.service;

import de.capyclue.canteen.model.DailyMenu;
import de.capyclue.canteen.model.MenuOption;
import de.capyclue.canteen.repository.DailyMenuRepository;
import de.capyclue.canteen.repository.MenuOptionRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CanteenService implements ICanteenService {
    private final DailyMenuRepository dailyMenuRepository;
    private final MenuOptionRepository menuOptionRepository;

    @Autowired
    public CanteenService(DailyMenuRepository dailyMenuRepository, MenuOptionRepository menuOptionRepository) {
        this.dailyMenuRepository = dailyMenuRepository;
        this.menuOptionRepository = menuOptionRepository;
    }

    public String requestDailyMenus2() {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(java.net.URI.create("https://www.imensa.de/karlsruhe/mensa-erzbergerstrasse/montag.html"))
                .build();
        try{
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return response.body();
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public List<DailyMenu> requestDailyMenus(String mensa) {
        try {
            String[] weekdays = {"montag", "dienstag", "mittwoch", "donnerstag", "freitag"};
            List<DailyMenu> dailyMenus = new ArrayList<>(5);
            for (int day = 0; day < weekdays.length; day++) {
                Document doc = Jsoup.connect("https://www.imensa.de/karlsruhe/"+mensa+"/"+weekdays[day]+".html").get();
                // DailyMenu meta values
                DailyMenu dailyMenu = new DailyMenu();
                dailyMenu.setCanteen(mensa);
                String date = doc.select("h2.aw-menu-title small").text();
                DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");
                if(date.contains("heute")) {
                    dailyMenu.setDay(new Date());
                } else if(date.contains("morgen")) {
                    dailyMenu.setDay(new Date(new Date().getTime() + 86400000));
                } else {
                    dailyMenu.setDay(dateFormat.parse(date));
                }

                // MenuOption values
                doc.select("div.aw-meal").forEach(element -> {
                    MenuOption option = new MenuOption();
                    option.setName(element.select("p.aw-meal-description").text());
                    String price = element.select("div.aw-meal-price").text()
                            .replace(element.select(".aw-meal-price-per").text(), "")
                            .replace(" €", "")
                            .replace(",", ".");
                    option.setPrice((price.length() > 0)?Double.parseDouble(price):0);
                    option.setTags(element.select("p.aw-meal-attributes").text());
                    dailyMenu.addOption(option);
                });

                dailyMenus.add(dailyMenu);
            }
            return dailyMenus;
        } catch (Exception e) {
            return null;
        }
    }
}
