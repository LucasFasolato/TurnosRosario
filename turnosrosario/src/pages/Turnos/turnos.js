/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import NavbarApp from '../../components/NavbarApp/navbarApp'
import {useNavigate } from "react-router-dom";
import {Form, Button, Dropdown} from 'react-bootstrap';
import {httpPost} from "./../../utils/httpFunctions";
import './turnos.css'
function turnos() {
const navigate = useNavigate();
const [numDia, setNumDia] = useState(0);
const [numHora, setNumHora] = useState(0);
const [day, setDay] = useState("");
const [hour, setHour] = useState ("");
const [name, setName] = useState ("");
const [id, setId] = useState("");
const mensaje ='OCUPADO';// const turnosMartes = [["MARTES","12:00"],["MARTES","12:40"],["MARTES","13:20"],["MARTES","14:00"],["MARTES","14:40"],["MARTES","15:20"],["MARTES","16:00"],["MARTES","16:40"],["MARTES","17:20"],["MARTES","18:00"],["MARTES","18:40"],["MARTES","19:20"],["MARTES","20:00"],["MARTES","20:40"],["MARTES","21:20"]];
// const turnosMiercoles = [["MIERCOLES","12:00"],["MIERCOLES","12:40"],["MIERCOLES","13:20"],["MIERCOLES","14:00"],["MIERCOLES","14:40"],["MIERCOLES","15:20"],["MIERCOLES","16:00"],["MIERCOLES","16:40"],["MIERCOLES","17:20"],["MIERCOLES","18:00"],["MIERCOLES","18:40"],["MIERCOLES","19:20"],["MIERCOLES","20:00"],["MIERCOLES","20:40"],["MIERCOLES","21:20"]];
// const turnosJueves = [["JUEVES","12:00"],["JUEVES","12:40"],["JUEVES","13:20"],["JUEVES","14:00"],["JUEVES","14:40"],["JUEVES","15:20"],["JUEVES","16:00"],["JUEVES","16:40"],["JUEVES","17:20"],["JUEVES","18:00"],["JUEVES","18:40"],["JUEVES","19:20"],["JUEVES","20:00"],["JUEVES","20:40"],["JUEVES","21:20"]];
// const turnosViernes = [["VIERNES","12:00"],["VIERNES","12:40"],["VIERNES","13:20"],["VIERNES","14:00"],["VIERNES","14:40"],["VIERNES","15:20"],["VIERNES","16:00"],["VIERNES","16:40"],["VIERNES","17:20"],["VIERNES","18:00"],["VIERNES","18:40"],["VIERNES","19:20"],["VIERNES","20:00"],["VIERNES","20:40"],["VIERNES","21:20"]];
// const turnosSabado = [["SABADO","12:00"],["SABADO","12:40"],["SABADO","13:20"],["SABADO","14:00"],["SABADO","14:40"],["SABADO","15:20"],["SABADO","16:00"],["SABADO","16:40"],["SABADO","17:20"],["SABADO","18:00"],["SABADO","18:40"],["SABADO","19:20"],["SABADO","20:00"],["SABADO","20:40"],["SABADO","21:20"]];
let fechasdisponibles = [   
    ["MARTES","12:00","12:40","13:20","14:00","14:40","15:20","16:00","16:40","17:20","18:00","18:40","19:20","20:00","20:40","21:20"], 
    ["MIERCOLES","12:00","12:40","13:20","14:00","14:40","15:20","16:00","16:40","17:20","18:00","18:40","19:20","20:00","20:40","21:20"],
    ["JUEVES","12:00","12:40","13:20","14:00","14:40","15:20","16:00","16:40","17:20","18:00","18:40","19:20","20:00","20:40","21:20"],
    ["VIERNES","12:00","12:40","13:20","14:00","14:40","15:20","16:00","16:40","17:20","18:00","18:40","19:20","20:00","20:40","21:20"],
    ["SABADO","12:00","12:40","13:20","14:00","14:40","15:20","16:00","16:40","17:20","18:00","18:40","19:20","20:00","20:40","21:20"]
];
let horasdisponibles = ["12:00","12:40","13:20","14:00","14:40","15:20","16:00","16:40","17:20","18:00","18:40","19:20","20:00","20:40","21:20"];
let horasMartes = []
let diasdisponibles = ["MARTES","MIERCOLES","JUEVES","VIERNES"];
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
    horasMartes.splice(numHora,1,"");
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
                        <div className='display-day'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
                                DIA
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="success">
                                <Dropdown.Item onClick={() => {setDay("MARTES"); setId("2"); setNumDia(0)}} id="martes">{fechasdisponibles[0][0]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setDay("MIERCOLES"); setId("3"); setNumDia(1)}} id="miercoles">{fechasdisponibles[1][0]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setDay("JUEVES"); setId("4"); setNumDia(2)}} id="jueves">{fechasdisponibles[2][0]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setDay("VIERNES"); setId("5"); setNumDia(3)}} id="viernes">{fechasdisponibles[3][0]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setDay("SABADO"); setId("6"); setNumDia(4)}} id="sabado">{fechasdisponibles[4][0]}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='display-hour'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
                                HORA
                                </Dropdown.Toggle>
                                {/* <Dropdown.Menu variant="success">
                                <Dropdown.Item onClick={() => {setHour("12:00"); setId(id+'1200'); setNumHora(1)}} id="1200">{fechasdisponibles[numDia][1]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("12:40"); setId(id+'1240'); setNumHora(2)}} id="1240">{fechasdisponibles[numDia][2]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("13:20"); setId(id+'1320'); setNumHora(3)}} id="1320">{fechasdisponibles[numDia][3]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("14:00"); setId(id+'1400'); setNumHora(4)}} id="1400">{fechasdisponibles[numDia][4]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("14:40"); setId(id+'1440'); setNumHora(5)}} id="1440">{fechasdisponibles[numDia][5]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("15:20"); setId(id+'1520'); setNumHora(6)}} id="1520">{fechasdisponibles[numDia][6]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("16:00"); setId(id+'1600'); setNumHora(7)}} id="1600">{fechasdisponibles[numDia][7]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("16:40"); setId(id+'1640'); setNumHora(8)}} id="1640">{fechasdisponibles[numDia][8]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("17:20"); setId(id+'1720'); setNumHora(9)}} id="1720">{fechasdisponibles[numDia][9]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("18:00"); setId(id+'1800'); setNumHora(10)}} id="1800">{fechasdisponibles[numDia][10]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("18:40"); setId(id+'1840'); setNumHora(11)}} id="1840">{fechasdisponibles[numDia][11]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("19:20"); setId(id+'1920'); setNumHora(12)}} id="1920">{fechasdisponibles[numDia][12]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("20:00"); setId(id+'2000'); setNumHora(13)}} id="2000">{fechasdisponibles[numDia][13]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("20:40"); setId(id+'2040'); setNumHora(14)}} id="2040">{fechasdisponibles[numDia][14]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("21:20"); setId(id+'2120'); setNumHora(15)}} id="2120">{fechasdisponibles[numDia][15]}</Dropdown.Item>
                                </Dropdown.Menu> */}
                                <Dropdown.Menu variant="success">
                                <Dropdown.Item onClick={() => {setHour("12:00"); setId(id+'1200'); setNumHora(0)}} id="1200">{horasMartes[0]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("12:40"); setId(id+'1240'); setNumHora(1)}} id="1240">{horasMartes[1]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("13:20"); setId(id+'1320'); setNumHora(3)}} id="1320">{horasMartes[2]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("14:00"); setId(id+'1400'); setNumHora(3)}} id="1400">{horasMartes[3]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("14:40"); setId(id+'1440'); setNumHora(4)}} id="1440">{horasMartes[4]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("15:20"); setId(id+'1520'); setNumHora(5)}} id="1520">{horasMartes[5]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("16:00"); setId(id+'1600'); setNumHora(6)}} id="1600">{horasMartes[6]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("16:40"); setId(id+'1640'); setNumHora(7)}} id="1640">{horasMartes[7]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("17:20"); setId(id+'1720'); setNumHora(8)}} id="1720">{horasMartes[8]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("18:00"); setId(id+'1800'); setNumHora(9)}} id="1800">{horasMartes[9]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("18:40"); setId(id+'1840'); setNumHora(10)}} id="1840">{horasMartes[10]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("19:20"); setId(id+'1920'); setNumHora(11)}} id="1920">{horasMartes[11]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("20:00"); setId(id+'2000'); setNumHora(12)}} id="2000">{horasMartes[12]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("20:40"); setId(id+'2040'); setNumHora(13)}} id="2040">{horasMartes[13]}</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setHour("21:20"); setId(id+'2120'); setNumHora(14)}} id="2120">{horasMartes[14]}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
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