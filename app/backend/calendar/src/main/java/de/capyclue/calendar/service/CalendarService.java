package de.capyclue.calendar.service;

import de.capyclue.calendar.model.Event;
import de.capyclue.calendar.repository.CalendarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalendarService implements ICalendarService {
    private final CalendarRepository calendarRepository;

    @Autowired
    public CalendarService(CalendarRepository calendarRepository) {
        this.calendarRepository = calendarRepository;
    }

    @Override
    public List<Event> getAllEvents() {
        return this.calendarRepository.findAll();
    }
}
