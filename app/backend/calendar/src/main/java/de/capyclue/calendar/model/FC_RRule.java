package de.capyclue.calendar.model;

import javax.persistence.*;
import net.fortuna.ical4j.model.*;
import net.fortuna.ical4j.model.component.VEvent;
import net.fortuna.ical4j.model.property.RRule;

import java.util.ArrayList;

@Entity(name = "RRule")
public class FC_RRule {
    @Id
    @Column(name = "uuid", nullable = true)
    private String uuid;
    @Column(name = "frequency", nullable = true)
    private String frequency;
    @Column(name = "dtstart", nullable = true)
    private String dtstart;
    @Column(name = "until", nullable = true)
    private Date until;
    @Column(name = "count", nullable = true)
    private Integer count;
    @Column(name = "interval", nullable = true)
    private Integer interval;
    @ElementCollection()
    @Column(name = "byweekday", nullable = false)
    private ArrayList<WeekDay> byweekday;
    @ElementCollection()
    @Column(name = "bymonthday", nullable = false)
    private ArrayList<Integer> bymonthday;
    @ElementCollection()
    @Column(name = "byyearday", nullable = false)
    private ArrayList<Integer> byyearday;
    @ElementCollection
    @Column(name = "byweekno", nullable = false)
    private ArrayList<Integer> byweekno;
    @ElementCollection
    @Column(name = "bysetpos", nullable = false)
    private ArrayList<Integer> bysetpos;
    @Column(name = "wkst", nullable = true)
    private String wkst;
    @Column(name = "tzid", nullable = true)
    private String tzid;

    public FC_RRule(String uuid, String frequency, String dtstart, Date until, Integer count, Integer interval, WeekDayList byweekday, NumberList bymonthday, NumberList byyearday, NumberList byweekno, NumberList bysetpos, String wkst, String tzid) {

        this.uuid = uuid;
        this.frequency = frequency;
        this.dtstart = dtstart;
        this.until = until;
        this.count = count;
        this.interval = interval;
        this.byweekday = byweekday;
        this.bymonthday = bymonthday;
        this.byyearday = byyearday;
        this.byweekno = byweekno;
        this.bysetpos = bysetpos;
        this.wkst = wkst;
        this.tzid = tzid;
    }

    public FC_RRule(VEvent event) {
        RRule rrule = (event.getProperty("RRULE") == null)?null: ((RRule)((event.getProperty(Property.RRULE))));
        Recur recur = (rrule == null)?null: (rrule.getRecur() == null)?null: rrule.getRecur();

        this.uuid = event.getProperty(Property.UID).getValue();
        this.dtstart = (event.getProperty(Property.DTSTART) == null)?null: (event.getProperty(Property.DTSTART)).getValue();
        this.tzid = (event.getProperty(Property.TZID) == null)?null: (event.getProperty(Property.TZID)).getValue();

        if (recur != null) {
            this.frequency = (recur.getFrequency() == null)?null: recur.getFrequency();
            this.until = (recur.getUntil() == null)?null: recur.getUntil();
            this.count = recur.getCount();
            this.interval = recur.getInterval();
            this.byweekday = (recur.getDayList() == null)?null: recur.getDayList();
            this.bymonthday = (recur.getMonthDayList() == null)?null: recur.getMonthDayList();
            this.byyearday = (recur.getYearDayList() == null)?null: recur.getYearDayList();
            this.byweekno = (recur.getWeekNoList() == null)?new NumberList(): recur.getWeekNoList();
            this.bysetpos = recur.getSetPosList();
            this.wkst = (recur.getWeekStartDay() == null)?null: recur.getWeekStartDay();
        }
    }

    public FC_RRule() {
        this.uuid = null;
        this.frequency = null;
        this.dtstart = null;
        this.until = null;
        this.count = null;
        this.interval = null;
        this.byweekday = new WeekDayList();
        this.bymonthday = new NumberList();
        this.byyearday = new NumberList();
        this.byweekno = new NumberList();
        this.bysetpos = new NumberList();
        this.wkst = null;
        this.tzid = null;
    }

    public String getUuid() {
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

    public ArrayList<WeekDay> getByweekday() {
        return byweekday;
    }

    public ArrayList<Integer> getBymonthday() {
        return bymonthday;
    }

    public ArrayList<Integer> getByyearday() {
        return byyearday;
    }

    public ArrayList<Integer> getByweekno() {
        return byweekno;
    }

    public ArrayList<Integer> getBysetpos() {
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
        final StringBuilder sb = new StringBuilder("FC_RRule{");
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
