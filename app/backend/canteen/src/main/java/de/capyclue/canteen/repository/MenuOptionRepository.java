package de.capyclue.canteen.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MenuOptionRepository {
    private final SpringMenuOptionRepository springMenuOptionRepository;

    @Autowired
    public MenuOptionRepository(SpringMenuOptionRepository springMenuOptionRepository) {
        this.springMenuOptionRepository = springMenuOptionRepository;
    }
}
