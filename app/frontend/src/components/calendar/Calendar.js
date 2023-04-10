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


const EventItem = ({ info }) => {
  const { event } = info;
  return (
    <div>
      <p>{event.title}</p>
      <p>{event.id}</p>
    </div>
  );
};


function Calendar() {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,  /* werden an dieser stelle alle events neu gesetzt, statt nur eines hinzuzufügen?*/ 
        {start,
        end,
        title: eventNamePrompt,
        id: uuidv4()}
      ]);
    }
  };

  return (
    <Container>s
      <h1>Calendar</h1>
      <FullCalendar
        editable
        selectable
        events={events}
        eventContent={(info) => <EventItem info={info}/>}
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
      />
    </Container>
  );
}
export default Calendar;