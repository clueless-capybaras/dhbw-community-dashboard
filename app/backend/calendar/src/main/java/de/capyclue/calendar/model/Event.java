package de.capyclue.calendar.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "Event")
public class Event {
    @Id
    @Column(name = "uuid", nullable = false)
    private final String uuid;


    @Column(name = "summary", nullable = true)
    private final String title;

    @Column(name = "description", nullable = true)
    private final String description;

    @Column(name = "startDate", nullable = true)
    private final LocalDateTime start;

    @Column(name = "endDate", nullable = true)
    private final LocalDateTime end;

    @OneToOne
    @JoinColumn(name="rrule_uuid")
    private final FC_RRule rrule;

    @Column(name = "url", nullable = true)
    private final String url;


    public Event(String uuid, String title, String description, LocalDateTime start, LocalDateTime end, FC_RRule rrule, String url) {
        this.uuid = uuid;
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
        this.rrule = rrule;
        this.url = url;
    }

    public Event() {
        this.uuid = null;
        this.title = null;
        this.description = null;
        this.start = null;
        this.end = null;
        this.rrule = null;
        this.url = null;
    }

    public String getUuid() {
        return uuid;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public String getUrl() {
        return url;
    }

    public FC_RRule getRrule() {
        return rrule;
    }
}
