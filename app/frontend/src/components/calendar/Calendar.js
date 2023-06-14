import { useContext, useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import rrulePlugin from '@fullcalendar/rrule'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import Container from 'react-bootstrap/esm/Container';
import { useAuth0 } from '@auth0/auth0-react';

import {CalendarHttpClientContext} from '../../App';
import { tinf21B4Rapla } from "../../config";

function Calendar() {
  const { user, isAuthenticated, getAccessTokenSilently} = useAuth0();
  const calendarHttpClient = useContext(CalendarHttpClientContext);
  const [settings, setSettings] = useState(null);
  const [events, setEvents] = useState(null);
  useEffect(() => {
    setEvents(null);
    calendarHttpClient.getCalendarSettings(isAuthenticated, getAccessTokenSilently).then((s) => {
      setSettings(s);
      let raplaUrl = (s && s.calendarLink) ? s.calendarLink : tinf21B4Rapla;
      calendarHttpClient.getEventsFromRapla(raplaUrl).then((ev) => {setEvents(ev); console.log(ev);});
    });
  }, []
  );
  return (
    <Container>
      <h1>Kalender</h1>
      <FullCalendar
        plugins={[ bootstrap5Plugin, dayGridPlugin, listPlugin, timeGridPlugin, rrulePlugin ]}
        timeZone="Europe/Berlin"
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