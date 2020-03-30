import React from 'react';
import { DatePicker, theme } from 'react-trip-date';
import {ThemeProvider} from 'styled-components';


const EventsCalendar = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <DatePicker
            selectedDays={['2019-11-03']} //initial selected days
            jalali={false}
            numberOfMonths={1}
            numberOfSelectableDays={0} // number of days you need 
            disabledDays={['2019-12-02']} //disabeld days
            disabledBeforToday={false} 
            disabled={true} // disable calendar 
            />
      </ThemeProvider>
    )
}

export default EventsCalendar;