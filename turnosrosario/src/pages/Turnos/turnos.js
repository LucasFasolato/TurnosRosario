/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import NavbarApp from '../../components/NavbarApp/navbarApp'
import {useNavigate } from "react-router-dom";
import {Form, Button, Dropdown} from 'react-bootstrap';
import {httpPost} from "./../../utils/httpFunctions";
import './turnos.css'
import Date from '../../components/DayPicker/dayPicker';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
function turnos() {
const [day, setDay] = useState("");
const [hour, setHour] = useState ("");
const [name, setName] = useState ("");
const [id, setId] = useState("");

function createTurno (e) {
  
    try {
        e.preventDefault();
        const data = {
            nombre: name,
            fecha: day,
            hora: hour,
            id: id,
        }
        const datajson = JSON.stringify(data);   
        console.log(datajson);
        httpPost("turnos", datajson);
        // turnoscreados.push(data);
        // console.log(turnoscreados);
    } catch (error) {
        alert.show('Error al crear nuevo turno');
    }
    actualizarListaTurnos (id, day, hour);
}

function actualizarListaTurnos (){
    
}

return (
    <div>
        <NavbarApp/>
        <div className='content-form'>
            <h1>RESERVAR TURNO</h1>
            <div className='display-form'>
                <Form onSubmit={(e) => { createTurno(e)}}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>NOMBRE</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <div className='date-content'>
                        <Date/>
                    </div>

                    <h1>DATOS DEL TURNO</h1>
                    <div className='datos-turno'>
                        <div className='display-day'>
                            <h4>NOMBRE: {name}</h4>
                        </div>
                        <div className='display-day'>
                            <h4>DIA: {day}</h4>
                        </div>
                        <div className='display-day'>
                            <h4>HORA: {hour}</h4>
                        </div>
                        
                    </div>
                    <div className='display-button'>
                        <div className='display-button-sig'>
                            <Button variant="primary" type="submit">
                                SIGUIENTE
                            </Button> 
                        </div>          
                    </div>
                </Form>
            </div>
        </div>
    </div>  
  )
}

export default turnos