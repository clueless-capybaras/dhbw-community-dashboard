import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import Container from 'react-bootstrap/esm/Container';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import {CalendarHttpClientContext} from '../../App';

function Calendar() {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {start,
        end,
        title: eventNamePrompt,
        id: uuidv4()}
      ]);
    }
  };

  return (
    <Container>
      <h1>Calendar</h1>
      <FullCalendar
        editable
        selectable
        events={events}
        select={handleSelect}
        plugins={[ bootstrap5Plugin, dayGridPlugin, listPlugin, timeGridPlugin, interactionPlugin ]}
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
            title  : 'event1',
            start  : '2023-03-03'
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