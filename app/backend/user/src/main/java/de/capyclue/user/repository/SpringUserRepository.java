package de.capyclue.user.repository;

import de.capyclue.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SpringUserRepository extends JpaRepository<User, String> {
    Optional<User> findById(String id);
    List<User> findAll();
}
