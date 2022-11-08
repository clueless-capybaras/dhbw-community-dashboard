package de.capyclue.canteen.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DailyMenuRepository {
    private final SpringDailyMenuRepository springDailyMenuRepository;

    @Autowired
    public DailyMenuRepository(SpringDailyMenuRepository springDailyMenuRepository) {
        this.springDailyMenuRepository = springDailyMenuRepository;
    }
}
