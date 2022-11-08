package de.capyclue.canteen.repository;

import de.capyclue.canteen.model.DailyMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpringDailyMenuRepository extends JpaRepository<DailyMenu, Long> {
    Optional<DailyMenu> findById(String date);
    List<DailyMenu> findAll();
}