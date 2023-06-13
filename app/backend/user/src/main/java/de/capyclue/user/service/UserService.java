package de.capyclue.user.service;

import de.capyclue.user.model.User;
import de.capyclue.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        User user = new User();
        try {
            user = userRepository.findById(id);
        } catch (Exception e) {
            System.out.println("user not found");
        }
        user.setCanteenShowVegetarian((user.getCanteenShowVegetarian() == null) || user.getCanteenShowVegetarian());
        user.setCanteenShowVegan((user.getCanteenShowVegan() == null) || user.getCanteenShowVegan());
        user.setCanteenShowPork((user.getCanteenShowPork() == null) || user.getCanteenShowPork());
        return user;
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }
}
