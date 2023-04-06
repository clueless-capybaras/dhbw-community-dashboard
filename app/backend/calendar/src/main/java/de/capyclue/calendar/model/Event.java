package de.capyclue.calendar.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Event {
    @Id
    @Column(name = "uid", nullable = false)
    private final String id;

    @Column(name = "summary", nullable = true)
    private final String title;

    @Column(name = "description", nullable = true)
    private final String description;

    @Column(name = "startDate", nullable = true)
    private final LocalDateTime start;

    @Column(name = "endDate", nullable = true)
    private final LocalDateTime end;

    @Column(name = "url", nullable = true)
    private final String url;


    public Event(String id, String title, String description, LocalDateTime start, LocalDateTime end, String url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
        this.url = url;
    }

    public Event() {
        this.id = null;
        this.title = null;
        this.description = null;
        this.start = null;
        this.end = null;
        this.url = null;
    }

    public String getId() {
        return id;
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
}
