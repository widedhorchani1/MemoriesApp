import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction" 

function Calendar() {
  return (
    <div class="calendar">
     <FullCalendar
     plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
     initialView={"dayGridMonth"}
     headerToolbar={
        {
            start:"prev",
            center:"title",
            end:"next"

        }
     }
     height={"90vh"}
     dayMinWidth={"250px"}
     />   
    </div>
  )
}

export default Calendar