package de.capyclue.canteen.controller;

import de.capyclue.canteen.service.ICanteenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/api/canteen")
public class CanteenController {
    private final ICanteenService canteenService;

    @Autowired
    public CanteenController(ICanteenService canteenService) {
        this.canteenService = canteenService;
    }

    @GetMapping(path = "")
    public String getDefault() {
        return "hello world, this is the canteen microservice";
    }
}
