import { useContext, useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import iCalendarPlugin from '@fullcalendar/icalendar'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import Container from 'react-bootstrap/esm/Container';

import {CalendarHttpClientContext} from '../../App';

function Calendar() {
  const calendarHttpClient = useContext(CalendarHttpClientContext)
  const [events, setEvents] = useState(null);
  useEffect(() => {
    setEvents(null);
    calendarHttpClient.getEventsFromRapla('https://rapla.dhbw-karlsruhe.de/rapla?page=ical&user=eisenbiegler&file=TINF21B4').then((ev) => {setEvents(ev); console.log(ev);});
  }, []
  );
  return (
    <Container>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[ bootstrap5Plugin, dayGridPlugin, listPlugin, timeGridPlugin, iCalendarPlugin ]}
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
        events={events}
      />
    </Container>
  );
}
export default Calendar;