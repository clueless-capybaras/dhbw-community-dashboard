import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import rrulePlugin from '@fullcalendar/rrule'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import Container from 'react-bootstrap/esm/Container';

import {CalendarHttpClientContext} from '../../App';

function Calendar() {
  return (
    <Container>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[ bootstrap5Plugin, dayGridPlugin, listPlugin, timeGridPlugin, rrulePlugin ]}
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
            end: "2022-12-05T12:00:00",
            rrule : {
              freq: 'weekly',
              interval: 1,
              byweekday: [ 'mo', 'fr' ],
              dtstart: '2022-10-05T09:30:00', // will also accept '20120201T103000'
              count: 10
              //until: '2022-12-05' // will also accept '20120201'
            }
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