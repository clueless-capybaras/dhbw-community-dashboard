package de.capyclue.calendar.service;

import de.capyclue.calendar.model.Event;
import org.springframework.stereotype.Service;

import java.net.URL;
import java.util.List;

@Service
public interface ICalendarService {
    List<Event> getAllEvents();
    List<Event> getEventsByUrl(URL url);
}
