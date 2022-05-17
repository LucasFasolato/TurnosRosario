import "./Horarios.css";
import {DayPicker} from 'react-day-picker';
import DateUtils from 'dateutils'
import 'react-day-picker/dist/style.css';
import {useEffect, useState} from "react";
import {httpPost} from "./../../utils/httpFunctions";
import {makeDateTime} from "./../../utils/helpers"
import NavbarApp from '../../components/NavbarApp/navbarApp'

// Utilizamos la libreria react-day-picker para facilitar la seleccion de dias en qeu se habilitan turnos.
// Utiliza el State para determinar que dias son seleccionados.

// AGREGAR https://react-day-picker.js.org/examples/selected-multiple/
function Horarios() {
    const [selectedDays, setDay ] = useState({selectedDays: []}); // Generamos el estado para los dias seleccionados
    const [disabledDays, setDisabledDays] = useState("")
    const [turnosDayCount, setTurnosDayCount] = useState(1)
    const [turnosStartHour, setTurnosStartHour] = useState("12:00")
    const [turnosDuration, setTurnosDuration] = useState(40)
    // Funcion que maneja los dias seleccionados en el estado
    // El primer parametro recibe un dia seleccionado, el segundo parametro es para eliminar la seleccion si se vuelve a presionar sobre el mismo dia
    const handleDayClick = (day, { selected, disabled }) => {
        if (disabled) {
            alert.show('Ya existen turnos en el día seleccionado',{
                type: "error"
            })
            return;
        }
        const selectedDays2 = selectedDays.selectedDays;

        if (selected) {
            const selectedIndex = selectedDays2.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays2.splice(selectedIndex, 1);
        } else {
            selectedDays2.push(day);
        }
        setDay({ selectedDays: selectedDays2 })
    }

    const createTurnos = async (e) => {
        try {
            e.preventDefault()
            for (const day of selectedDays.selectedDays) {
                let startHourISO = makeDateTime(day,turnosStartHour);
                for(let i = 0; i < turnosDayCount; i++ ) {
                    await httpPost("turnos", {
                        nombre: "",
                        fecha: "",
                        hora: "",
                        id: "",
                    })
                    startHourISO = startHourISO + (60000 * turnosDuration)
                }
            }
            alert.show('Turno/s creado correctamente',{
                type: "success"
            })
        } catch (error) {
            alert.show('Error en la creación, intente mas tarde!',{
                type: "error"
            })
        }

    }

    return (
        <div>
           <NavbarApp/>
            <div className="horarios-contenido">
                <h2>Habilitar turnos</h2>
                <div className="horarios-contenido-items">
                    <div className="contenido-calendario">
                        <DayPicker mode="multiple" onDayClick={handleDayClick} selectedDays={selectedDays.selectedDays}  disabledDays={disabledDays} />
                    </div>
                    <div className="horarios-contenedor">
                        <h5>Seleccione la franja horaria</h5>
                        <form onSubmit={(e) => createTurnos(e)}>
                            <div className="horarios-contenedor-desde">
                                <label htmlFor="horarios-desde-input">Hora de inicio</label>
                                <input
                                    id='horarios-desde-input'
                                    type='time'
                                    className='form-control'
                                    value={turnosStartHour}
                                    onChange={(e) => setTurnosStartHour(e.target.value)}
                                />
                            </div>
                            <div className="contenedor-cant-turnos">
                                <label htmlFor="horarios-cant-input">Cantidad de turnos</label>
                                <select name=""  id="horarios-cant-input" className='form-control' value={turnosDayCount}
                                onChange={(e) => setTurnosDayCount(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="9">10</option>
                                    <option value="9">11</option>
                                    <option value="9">12</option>
                                </select>

                            </div>
                            <div className="contenedor-duracion">
                                <label htmlFor="horarios-duracion">Duración turnos</label>
                                <select name=""   id='horarios-duracion-input' className='form-control' value={turnosDuration}
                                        onChange={(e) => setTurnosDuration(e.target.value)}>
                                    <option value="40">40 minutos</option>
                                </select>
                            </div>
                            <button type="submit">Habilitar turnos</button>
                        </form>

                    </div>
                </div>
            </div> 
        </div>
        
    )

}

export default Horarios;