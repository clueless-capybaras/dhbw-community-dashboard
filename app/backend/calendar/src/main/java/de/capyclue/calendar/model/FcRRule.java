package de.capyclue.calendar.model;

import javax.persistence.*;
import net.fortuna.ical4j.model.*;
import net.fortuna.ical4j.model.component.VEvent;
import net.fortuna.ical4j.model.property.RRule;
import org.hibernate.annotations.Generated;

import java.util.ArrayList;
import java.util.List;

@Entity
public class FcRRule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long uuid;
  //  @Column(name = "frequency", nullable = true)
    private String frequency;
   // @Column(name = "dtstart", nullable = true)
    private String dtstart;
  //  @Column(name = "until", nullable = true)
    @Column(name="termination")
    private Date until;
  //  @Column(name = "count", nullable = true)
    @Column(name="numberOfRepititions")
    private Integer count;
  //  @Column(name = "interval", nullable = true)
    @Column(name="rule_interval")
    private Integer interval;

    private String byweekday;

    private String bymonthday;

    private String byyearday;

    private String byweekno;

    private String bysetpos;

    private String wkst;

    private String tzid;

    @OneToOne(mappedBy = "rrule")
    private Event event;

    public FcRRule(VEvent event) {
        RRule rrule = (event.getProperty("RRULE") == null)?null: ((RRule)((event.getProperty(Property.RRULE))));
        Recur recur = (rrule == null)?null: (rrule.getRecur() == null)?null: rrule.getRecur();

        this.dtstart = (event.getProperty("RRULE") == null)?null: (event.getProperty(Property.DTSTART)).getValue();
        this.tzid = (event.getProperty(Property.TZID) == null)?null: (event.getProperty(Property.TZID)).getValue();

        if (recur != null) {
            this.frequency = (recur.getFrequency() == null)?null: recur.getFrequency();
            this.until = (recur.getUntil() == null)?null: recur.getUntil();
            this.count = recur.getCount();
            this.interval = recur.getInterval();
            this.byweekday = (recur.getDayList() == null)?null: recur.getDayList().toString();
            this.bymonthday = (recur.getMonthDayList() == null)?null: recur.getMonthDayList().toString();
            this.byyearday = (recur.getYearDayList() == null)?null: recur.getYearDayList().toString();
            this.byweekno = (recur.getWeekNoList() == null)?null: recur.getWeekNoList().toString();
            this.bysetpos = (recur.getSetPosList() == null)?null: recur.getSetPosList().toString();
            this.wkst = (recur.getWeekStartDay() == null)?null: recur.getWeekStartDay();
        }
    }

    public FcRRule() {
        this.frequency = null;
        this.dtstart = null;
        this.until = null;
        this.count = null;
        this.interval = null;
        this.byweekday = null;
        this.bymonthday = null;
        this.byyearday = null;
        this.byweekno = null;
        this.bysetpos = null;
        this.wkst = null;
        this.tzid = null;
    }

    public Long getUuid() {
        return uuid;
    }

    public String getFrequency() {
        return frequency;
    }

    public String getDtstart() {
        return dtstart;
    }

    public Date getUntil() {
        return until;
    }

    public Integer getCount() {
        return count;
    }

    public Integer getInterval() {
        return interval;
    }

    public String getByweekday() {
        return byweekday;
    }

    public String getBymonthday() {
        return bymonthday;
    }

    public String getByyearday() {
        return byyearday;
    }

    public String getByweekno() {
        return byweekno;
    }

    public String getBysetpos() {
        return bysetpos;
    }

    public String getWkst() {
        return wkst;
    }

    public String getTzid() {
        return tzid;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("FcRRule{");
        sb.append("uuid='").append(uuid).append('\'');
        sb.append("frequency='").append(frequency).append('\'');
        sb.append(", dtstart='").append(dtstart).append('\'');
        sb.append(", until=").append(until);
        sb.append(", count=").append(count);
        sb.append(", interval=").append(interval);
        sb.append(", byweekday=").append(byweekday);
        sb.append(", bymonthday=").append(bymonthday);
        sb.append(", byyearday=").append(byyearday);
        sb.append(", byweekno=").append(byweekno);
        sb.append(", bysetpos=").append(bysetpos);
        sb.append(", wkst='").append(wkst).append('\'');
        sb.append(", tzid='").append(tzid).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
