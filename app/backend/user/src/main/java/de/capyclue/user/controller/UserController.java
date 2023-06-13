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
        return this.userService.getUserById(auth0UserId);
    }

    @PutMapping(path = "/user")
    public void saveUser(@RequestBody User user, Authentication authentication){
        String auth0UserId = authentication.getName();
        if(!auth0UserId.equals(user.getId())){
            throw new IllegalArgumentException("user id does not match auth0 user id");
        }
        System.out.println("user: " + user);
        this.userService.saveUser(user);
    }

}
