import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";


import { Container } from "@mui/material";

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <Container sx={{ p: 5 }}>
      <FullCalendar
        innerRef={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        editable
        selectable
      />
    </Container>
  );
};

// Calendar.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Calendar;
