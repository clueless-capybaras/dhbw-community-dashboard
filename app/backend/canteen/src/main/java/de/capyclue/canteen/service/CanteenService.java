package de.capyclue.canteen.service;

import de.capyclue.canteen.repository.DailyMenuRepository;
import de.capyclue.canteen.repository.MenuOptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CanteenService implements ICanteenService {
    private final DailyMenuRepository dailyMenuRepository;
    private final MenuOptionRepository menuOptionRepository;

    @Autowired
    public CanteenService(DailyMenuRepository dailyMenuRepository, MenuOptionRepository menuOptionRepository) {
        this.dailyMenuRepository = dailyMenuRepository;
        this.menuOptionRepository = menuOptionRepository;
    }
}
