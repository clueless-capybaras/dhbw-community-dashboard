package de.capyclue.canteen.repository;

import de.capyclue.canteen.model.MenuOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpringMenuOptionRepository extends JpaRepository<MenuOption, Long> {
    Optional<MenuOption> findById(Long id);
    List<MenuOption> findAll();
}