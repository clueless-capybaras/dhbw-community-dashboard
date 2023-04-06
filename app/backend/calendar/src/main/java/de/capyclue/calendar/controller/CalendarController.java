package de.capyclue.calendar.controller;

import de.capyclue.calendar.model.Event;
import de.capyclue.calendar.service.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.MalformedURLException;
import java.net.URL;

import java.util.List;


@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/api/calendar")
public class CalendarController {
    private final CalendarService calendarService;

    @Autowired
    public CalendarController(CalendarService calendarService) {
        this.calendarService = calendarService;
    }

    @GetMapping(path = "")
    public String getDefault() {
        return "hello world, this is the calendar microservice";
    }

    @PostMapping(value="rapla")
    public List<Event> retrieveRaplaEvents(@RequestBody String raplaUrl) throws MalformedURLException {
        URL url = new URL(raplaUrl);
        System.out.println("Rapla URL: " + url);
        return this.calendarService.getEventsByUrl(url);
    }
    
}
