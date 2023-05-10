package de.capyclue.calendar.service;

import de.capyclue.calendar.model.Event;
import de.capyclue.calendar.model.FcRRule;
import de.capyclue.calendar.repository.EventRepository;
import de.capyclue.calendar.repository.FcRRuleRepository;
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
    private final EventRepository eventRepository;
    private final FcRRuleRepository fcRRuleRepository;

    @Autowired
    public CalendarService(EventRepository eventRepository, FcRRuleRepository fcRRuleRepository) {
        this.eventRepository = eventRepository;
        this.fcRRuleRepository = fcRRuleRepository;
    }

    @Override
    public List<Event> getAllEvents() {
        return this.eventRepository.findAll();
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
                        (event.getProperty("RRULE") == null)?null:new FcRRule(event),
                        url.toString()
                ));
                }
            this.eventRepository.saveAll(eventList);
            return eventList;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
            System.out.println("Error using ical url, fallback to database");
            return this.eventRepository.findAllByUrl(url);
        }
    }
}
