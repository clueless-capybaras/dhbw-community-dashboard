package de.capyclue.calendar.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import net.fortuna.ical4j.model.Date;
import net.fortuna.ical4j.model.Parameter;
import net.fortuna.ical4j.model.Property;
import net.fortuna.ical4j.model.Recur;
import net.fortuna.ical4j.model.component.VEvent;
import net.fortuna.ical4j.model.property.DateProperty;
import net.fortuna.ical4j.model.property.RRule;

import javax.persistence.*;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FcRRule {

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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long uuid;
  //  @Column(name = "frequency", nullable = true)
    private String freq;
   // @Column(name = "dtstart", nullable = true)
    private LocalDateTime dtstart;
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

        this.dtstart = (event.getProperty("RRULE") == null)?null: parseToET(event.getStartDate());
        this.tzid = (event.getProperty(Property.TZID) == null)?null: (event.getProperty(Property.TZID)).getValue();

        if (recur != null) {
            this.freq = (recur.getFrequency() == null)?null: recur.getFrequency().toLowerCase();
            this.until = (recur.getUntil() == null)?null: recur.getUntil();
            this.count = recur.getCount();
            this.interval = (recur.getInterval() <= 0)?null: recur.getInterval();
            this.byweekday = (recur.getDayList() == null || recur.getDayList().size() == 0)?null: recur.getDayList().toString().toLowerCase();
            this.bymonthday = (recur.getMonthDayList() == null || (recur.getMonthDayList()).size() == 0)?null: recur.getMonthDayList().toString().toLowerCase();
            this.byyearday = (recur.getYearDayList() == null || recur.getYearDayList().size() == 0)?null: recur.getYearDayList().toString().toLowerCase();
            this.byweekno = (recur.getWeekNoList() == null || recur.getWeekNoList().size() == 0)?null: recur.getWeekNoList().toString().toLowerCase();
            this.bysetpos = (recur.getSetPosList() == null || recur.getSetPosList().size() == 0)?null: recur.getSetPosList().toString().toLowerCase();
            this.wkst = (recur.getWeekStartDay() == null)?null: recur.getWeekStartDay().toLowerCase();
        }
    }

    public FcRRule() {
        this.freq = null;
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



    @JsonIgnore
    @JsonProperty(value = "uuid")
    public Long getUuid() {
        return uuid;
    }

    public String getFreq() {
        return freq;
    }

    public LocalDateTime getDtstart() {
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

    @JsonProperty("byweekday")
    public List<String> getArrayListOfByWeekDay() {
        if (this.byweekday != null) {
            List<String> byWeekDays = new ArrayList();
            for (String s : this.byweekday.split(",")) {
                byWeekDays.add(s.toString().toLowerCase());
            }
            return byWeekDays;
        }
        return null;
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
        sb.append("frequency='").append(freq).append('\'');
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
