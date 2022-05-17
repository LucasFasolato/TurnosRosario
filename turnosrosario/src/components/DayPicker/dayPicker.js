/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import es from 'date-fns/locale/es';

function dayPicker() {
    const [selected, setSelected] = useState ();
    const defaultDate = new Date();
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div>
            <DayPicker 
                mode="single"
                defaultDate={defaultDate}
                fromDate={defaultDate}
                toDate={new Date(2022, 5, 30)}
                selected={selected}
                onSelect={setSelected}
                footer={footer}
                locale={es}
            />

        </div>
    )
}
export default dayPicker