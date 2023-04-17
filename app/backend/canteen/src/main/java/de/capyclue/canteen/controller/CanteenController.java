package de.capyclue.canteen.controller;

import de.capyclue.canteen.model.DailyMenu;
import de.capyclue.canteen.service.ICanteenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/api/canteen")
public class CanteenController {
    private final ICanteenService canteenService;

    @Autowired
    public CanteenController(ICanteenService canteenService) {
        this.canteenService = canteenService;
    }

    @GetMapping(path = "")
    public String getDefault() {
        return "hello world, this is the canteen microservice";
    }

    /**
     * Returns the weekly menu of a canteen
     * @param mensa the canteen to request the menus from
     * @return a list of daily menus
     */
    @GetMapping(path = "/weekly/{mensa}")
    public List<DailyMenu> getWeeklyMenuOfCanteen(@PathVariable String mensa) {
        return canteenService.requestDailyMenus(mensa);
    }

    /**
     * Returns the weekly menu of all canteens
     * @return a list of daily menus
     */
    @GetMapping(path = "/weekly")
    public List<DailyMenu> getWeeklyMenuOfAllCanteens() {
        String[] mensen = {"mensa-erzbergerstrasse", "mensa-am-adenauerring", "mensa-moltke"};
        List<DailyMenu> dailyMenus = new ArrayList<>();
        for (String mensa : mensen) {
            dailyMenus.addAll(canteenService.requestDailyMenus(mensa));
        }
        return dailyMenus;
    }
}
