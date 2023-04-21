package de.capyclue.calendar.model;

import net.fortuna.ical4j.model.*;
import net.fortuna.ical4j.model.component.VEvent;
import net.fortuna.ical4j.model.property.RRule;

public class FC_RRule {
    private String frequency;

    private String dtstart;

    private Date until;

    private Integer count;

    private Integer interval;

    private WeekDayList byweekday;

    private NumberList bymonthday;

    private NumberList byyearday;

    private NumberList byweekno;

    private NumberList bysetpos;

    private String wkst;

    private String tzid;

    public FC_RRule(VEvent event) {
        RRule rrule = (event.getProperty("RRULE") == null)?null: ((RRule)((event.getProperty(Property.RRULE))));
        Recur recur = (rrule == null)?null: (rrule.getRecur() == null)?null: rrule.getRecur();

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
            this.byweekno = (recur.getWeekNoList() == null)?null: recur.getWeekNoList();
            this.bysetpos = (recur.getSetPosList() == null)?null: recur.getSetPosList();
            this.wkst = (recur.getWeekStartDay() == null)?null: recur.getWeekStartDay();
        }
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

    public WeekDayList getByweekday() {
        return byweekday;
    }

    public NumberList getBymonthday() {
        return bymonthday;
    }

    public NumberList getByyearday() {
        return byyearday;
    }

    public NumberList getByweekno() {
        return byweekno;
    }

    public NumberList getBysetpos() {
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
