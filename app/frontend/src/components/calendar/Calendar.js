import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import Container from 'react-bootstrap/esm/Container';

import {CalendarHttpClientContext} from '../../App';

function Calendar() {
  return (
    <Container>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[ bootstrap5Plugin, dayGridPlugin, listPlugin, timeGridPlugin ]}
        initialView="timeGridSixDay"
        weekends={false}
        themeSystem="bootstrap5"
        height={600}
        locale="de"
        headerToolbar={{
          left: 'today prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridSixDay,listWeek'
        }}
        navLinks={true}
        weekNumbers={true}
        buttonText={{
          today:    'Heute',
          month:    'Monat',
          week:     'Woche',
          day:      'Tag',
          list:     'Liste',
          timeGridSixDay:    '6 Tage'
        }}
        views={{
          timeGridSixDay: {
            type: 'timeGrid',
            duration: { days: 6 },
            buttonText: '10 day',
            weekends: true,
            firstDay: 1
          }
        }}
        events={[
          {
            uuid: "a0641fcf-7d21-4f73-8b5a-94f4ecc0b193",
            title: "Rechnerarchitektur I",
            description: "F492  Hörsaal",
            start: "2022-10-05T09:30:00",
            end: "2022-10-05T12:00:00",
            url: "https://rapla.dhbw-karlsruhe.de/rapla?page=ical&user=eisenbiegler&file=TINF21B4",
            rrule : "FREQ=WEEKLY;INTERVAL=1;COUNT=11;BYDAY=WE"
          },
          {
            title  : 'event2',
            start  : '2023-03-04',
            end    : '2010-03-05'
          },
          {
            title  : 'event3',
            start  : '2023-01-09T12:30:00',
            allDay : false // will make the time show
          }
        ]}
      />
    </Container>
  );
}
export default Calendar;