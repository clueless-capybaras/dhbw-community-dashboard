package de.capyclue.calendar.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="events")
@JsonInclude(JsonInclude.Include.NON_NULL)
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


    @Column(name = "duration")
    private final Duration duration;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="rrule_id", referencedColumnName = "id")
    private final FcRRule rrule;

    @Column(name = "url", nullable = true)
    private final String url;

    @ElementCollection
    private final List<LocalDateTime> exdate;


    public Event(String uuid, String title, String description, LocalDateTime start, LocalDateTime end, Duration duration, FcRRule rrule, String url, List<LocalDateTime> exdate) {
        this.uuid = uuid;
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.rrule = rrule;
        this.url = url;
        this.exdate = exdate;
    }

    public Event() {
        this.uuid = null;
        this.title = null;
        this.description = null;
        this.start = null;
        this.end = null;
        this.duration = null;
        this.rrule = null;
        this.url = null;
        this.exdate = null;
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

    public Duration getDuration() {
        return duration;
    }

    @JsonProperty("duration")
    public Long getDurationInMilliSecs() {
        Long out;
        if (this.duration != null) {
            out = this.duration.getSeconds()*1000;
        } else {
            out = null;
        }
        return out;
    }

    public String getUrl() {
        return url;
    }

    public FcRRule getRrule() {
        return rrule;
    }

    public List<LocalDateTime> getExdate() {
        return exdate;
    }
}
