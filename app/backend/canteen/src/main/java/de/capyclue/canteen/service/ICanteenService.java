package de.capyclue.canteen.service;

import de.capyclue.canteen.model.DailyMenu;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICanteenService {
    List<DailyMenu> requestDailyMenus(String mensa);
}
