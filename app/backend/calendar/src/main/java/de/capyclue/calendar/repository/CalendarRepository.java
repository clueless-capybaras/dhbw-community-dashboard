package de.capyclue.calendar.repository;

import de.capyclue.calendar.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CalendarRepository {
    private final SpringCalendarRepository springCalendarRepository;

    @Autowired
    public CalendarRepository(SpringCalendarRepository springCalendarRepository) {
        this.springCalendarRepository = springCalendarRepository;
    }

    public List<Event> findAll() {
        return this.springCalendarRepository.findAll();
    }
}
