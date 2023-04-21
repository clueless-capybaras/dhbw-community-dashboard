package de.capyclue.calendar.service;

import de.capyclue.calendar.model.Event;
import de.capyclue.calendar.repository.CalendarRepository;
import net.fortuna.ical4j.data.CalendarBuilder;
import net.fortuna.ical4j.model.*;
import net.fortuna.ical4j.model.component.VEvent;
import net.fortuna.ical4j.model.property.RRule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URL;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
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

    @Override
    public List<Event> getEventsByUrl(URL url) {
        CalendarBuilder builder = new CalendarBuilder();
        List<Event> eventList = new ArrayList<>();
        try {
            Calendar calendar = builder.build(url.openStream());
            ComponentList events = calendar.getComponents(Component.VEVENT);
            for (Object o : events) {
                VEvent event = (VEvent) o;
                eventList.add(new Event(
                        event.getUid().getValue(),
                        (event.getSummary() == null)?null:event.getSummary().getValue(),
                        (event.getLocation() == null)?null:event.getLocation().getValue(),
                        (event.getStartDate() == null)?null:LocalDateTime.ofInstant(event.getStartDate().getDate().toInstant(), ZoneId.systemDefault()),
                        (event.getEndDate() == null)?null:LocalDateTime.ofInstant(event.getEndDate().getDate().toInstant(), ZoneId.systemDefault()),
                        (event.getProperty("RRULE") == null)?null: ((RRule)((event.getProperty(Property.RRULE)))).getValue(),
                        url.toString()
                ));
            }
            this.calendarRepository.saveAll(eventList);
            return eventList;
        } catch (Exception e) {
            System.out.println("Error using ical url, fallback to database");
            return this.calendarRepository.findAllByUrl(url);
        }
    }
}
