package de.capyclue.calendar.service;

import de.capyclue.calendar.model.Event;
import de.capyclue.calendar.model.FcRRule;
import de.capyclue.calendar.repository.EventRepository;
import de.capyclue.calendar.repository.FcRRuleRepository;
import net.fortuna.ical4j.data.CalendarBuilder;
import net.fortuna.ical4j.model.*;
import net.fortuna.ical4j.model.component.VEvent;
import net.fortuna.ical4j.model.component.VTimeZone;
import net.fortuna.ical4j.model.property.DateProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URL;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class CalendarService implements ICalendarService {
    private static LocalDateTime parseToET(DateProperty datetimeIn) {
        Parameter tzid = datetimeIn.getParameter("TZID");
        LocalDateTime etOut;
        if (tzid != null) {
            String dtValue = datetimeIn.getValue();
            DateTimeFormatter f = DateTimeFormatter.ofPattern( "uuuuMMdd'T'HHmmss");
            LocalDateTime ldt = LocalDateTime.parse( dtValue , f );
            ZoneId z = ZoneId.of(tzid.getValue());
            ZonedDateTime zdt = ldt.atZone( z );
            Instant utct = Instant.from(zdt);
            etOut = LocalDateTime.ofInstant(utct, ZoneId.of("Europe/Berlin"));
        } else {
            Date dtDate = datetimeIn.getDate();
            etOut = LocalDateTime.ofInstant(dtDate.toInstant(),ZoneId.of("Europe/Berlin"));
        }
        return etOut;
    }

    private static List<LocalDateTime> parseToET(Property exdate) {
        Parameter tzid = exdate.getParameter("TZID");
        List<LocalDateTime> exdateOut = new ArrayList<>();
        if (tzid != null) {
            String[] exdateValues = exdate.getValue().split(",");
            for (String dtValue : exdateValues) {
                DateTimeFormatter f = DateTimeFormatter.ofPattern( "uuuuMMdd'T'HHmmss");
                LocalDateTime ldt = LocalDateTime.parse( dtValue , f );
                ZoneId z = ZoneId.of(tzid.getValue());
                ZonedDateTime zdt = ldt.atZone( z );
                Instant utct = Instant.from(zdt);
                exdateOut.add(LocalDateTime.ofInstant(utct, ZoneId.of("Europe/Berlin")));
            }
        } else {
            String[] exdateValues = exdate.getValue().split(",");
            for (String dtValue : exdateValues) {
                DateTimeFormatter f = DateTimeFormatter.ofPattern( "uuuuMMdd'T'HHmmss");
                LocalDateTime ldt = LocalDateTime.parse( dtValue , f );
                exdateOut.add(ldt);            }
        }
        return exdateOut;
    }
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
                String timezone = ((VTimeZone) calendar.getComponents(Component.VTIMEZONE).get(0)).getTimeZoneId().getValue();
                VEvent event = (VEvent) o;
                Duration dur;
                if (event.getDuration() != null){
                    dur = Duration.parse(event.getDuration().getValue());
                } else if((event.getProperty("RRULE") != null) && (event.getEndDate() != null)) {
                    dur = Duration.between(parseToET(event.getStartDate()),parseToET(event.getEndDate()));
                } else {
                    dur = null;
                }
                eventList.add(new Event(
                        event.getUid().getValue(),
                        (event.getSummary() == null)?null:event.getSummary().getValue(),
                        (event.getLocation() == null)?null:event.getLocation().getValue(),
                        (event.getStartDate() == null)?null: parseToET(event.getStartDate()),
                        (event.getEndDate() == null)?null: parseToET(event.getEndDate()),
                        dur,
                        (event.getProperty("RRULE") == null)?null:new FcRRule(event),
                        (event.getUrl()==null)? null: event.getUrl().toString(),
                        (event.getProperty("EXDATE") == null)?null:parseToET(event.getProperty("EXDATE"))
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
