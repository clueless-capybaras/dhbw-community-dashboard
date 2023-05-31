package de.capyclue.user.controller;

import de.capyclue.user.model.User;
import de.capyclue.user.service.IUserService;
import de.capyclue.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(path = "/user")
    public User getUserByAuth0Token(Authentication authentication){
        String auth0UserId = authentication.getName();
        System.out.println("auth0UserId: " + auth0UserId);
        User user = new User();
        user.setId(1L);
        user.setFirstName("Max");
        user.setLastName("Mustermann");
        user.setEmail("max.mushter@email.de");
        return user;
    }

}
