/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useNavigate } from "react-router-dom";
import NavbarApp from '../../components/NavbarApp/navbarApp'
import { Button } from 'react-bootstrap'
import './homePage.css'
function homePage() {
  const navigate = useNavigate();
  return (
    <div>
      <NavbarApp/>
      <div className='display-button'>
        <Button variant="primary" className='bttn' onClick={() => navigate("/turnos")}>RESERVAR TURNO</Button>
      </div>
      <div className='display-button'>
        <Button variant="danger" className='bttn' onClick={() => navigate("/miturno")}>CANCELAR TURNO</Button>  
      </div>
    </div>
  )
}

export default homePage