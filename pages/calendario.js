import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Header from "../components/Header/header";
import 'react-calendar/dist/Calendar.css';

export default function CalendarGfg() {
	const [value, onChange] = useState(new Date());

    return (
        <div>
            <Header />
            <h1>Calendario</h1>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}