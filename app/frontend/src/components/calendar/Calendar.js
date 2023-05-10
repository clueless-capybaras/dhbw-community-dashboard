import { useContext, useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import rrulePlugin from '@fullcalendar/rrule'
import rrulePlugin from '@fullcalendar/rrule'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import Container from 'react-bootstrap/esm/Container';

import {CalendarHttpClientContext} from '../../App';
import { tinf21B4Rapla } from "../../config";

function Calendar() {
  const calendarHttpClient = useContext(CalendarHttpClientContext)
  const [events, setEvents] = useState(null);
  useEffect(() => {
    setEvents(null);
    calendarHttpClient.getEventsFromRapla(tinf21B4Rapla).then((ev) => {setEvents(ev); console.log(ev);});
  }, []
  );
  return (
    <Container>
      <h1>Kalender</h1>
      <FullCalendar
        plugins={[ bootstrap5Plugin, dayGridPlugin, listPlugin, timeGridPlugin, rrulePlugin ]}
<<<<<<< HEAD
        initialView="timeGridWeek"
        weekends={false}
        themeSystem="bootstrap5"
        height={600}
        locale="de"
        firstDay={1}
        headerToolbar={{
          left: 'today prev,next',
          center: 'title',
          right: 'timeGridWeek,dayGridMonth,listWeek'
        }}
        nowIndicator={true}
        navLinks={true}
        weekNumbers={true}
        buttonText={{
          today:    'Heute',
          month:    'Monat',
          week:     'Woche',
          day:      'Tag',
          list:     'Liste',
        }}
        views={{
<<<<<<< HEAD
          timeGridWeek: {
            weekends: true
          },
          dayGridMonth: {
            weekends: true
          },
          listWeek: {
            weekends: true
          }
        }}
        events={events}
      />
    </Container>
  );
}
export default Calendar;