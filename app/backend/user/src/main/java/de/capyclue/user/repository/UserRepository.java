package de.capyclue.user.repository;

import de.capyclue.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {
    private final SpringUserRepository springUserRepository;

    @Autowired
    public UserRepository(SpringUserRepository springUserRepository) {
        this.springUserRepository = springUserRepository;
    }

    public User findById(Long id) {
        return springUserRepository.findById(id).orElse(null);
    }

    public List<User> findAll() {
        return springUserRepository.findAll();
    }

}
