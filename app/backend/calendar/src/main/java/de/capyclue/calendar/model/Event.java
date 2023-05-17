package de.capyclue.calendar.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="events")
public class Event {
    @Id
    @Column(name = "uuid")
    private final String uuid;

    @Column(name = "summary")
    private final String title;

    @Column(name = "description")
    private final String description;

    @Column(name = "startDate")
    private final LocalDateTime start;

    @Column(name = "endDate")
    private final LocalDateTime end;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="rrule_id", referencedColumnName = "id")
    private final FcRRule rrule;

    @Column(name = "url", nullable = true)
    private final String url;


    public Event(String uuid, String title, String description, LocalDateTime start, LocalDateTime end, FcRRule rrule, String url) {
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

    public FcRRule getRrule() {
        return rrule;
    }
}
