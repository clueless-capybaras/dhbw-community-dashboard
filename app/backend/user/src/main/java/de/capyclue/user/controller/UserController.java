package de.capyclue.user.controller;

import de.capyclue.user.model.User;
import de.capyclue.user.service.IUserService;
import de.capyclue.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/api/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "")
    public String getDefault(){
        this.userService.saveUser(new User(
                "id",
                "nickname",
                "email@email",
                "pictureLink"));
        return "hello world, this is the user microservice";
    }

    @GetMapping(path = "/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping(path = "/user/{id}")
    public User getUserById(@PathVariable Long id){
        return new User();
    }

}
