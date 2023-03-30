import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import Container from 'react-bootstrap/esm/Container';

import {CalendarHttpClientContext} from '../../App';

function Calendar() {
  const icalUrl = 'https://rapla.dhbw-karlsruhe.de/rapla?page=calendar&user=eisenbiegler&file=TINF21B4';
  const calendarHttpClient = React.useContext(CalendarHttpClientContext);
  const [calendarEvents, setCalendarEvents] = React.useState([]);
  React.useEffect(() => {
    calendarHttpClient.getEventsFromRapla(icalUrl).then((events) => {
      setCalendarEvents(events);
    });
    console.log(calendarEvents);
  }, [calendarEvents, calendarHttpClient, icalUrl]);
  return (
    <Container>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[ bootstrap5Plugin, dayGridPlugin, listPlugin ]}
        initialView="dayGridWeek"
        weekends={false}
        themeSystem="bootstrap5"
        height={600}
        locale="de"
        headerToolbar={{
          left: 'today prev,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,listWeek'
        }}
        navLinks={true}
        weekNumbers={true}
        buttonText={{
          today:    'Heute',
          month:    'Monat',
          week:     'Woche',
          day:      'Tag',
          list:     'Liste'
        }}
      />
    </Container>
  );
}
export default Calendar;