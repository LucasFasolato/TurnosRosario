import React from 'react'
import NavbarApp from '../../components/NavbarApp/navbarApp'
import {Card} from 'react-bootstrap'
function miTurno(id) {
  return (
    <div>
        <NavbarApp/>
        <Card
        bg={'Dark'.toLowerCase()}
        key={'Dark'}
        text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Header>Información de turno</Card.Header>
        <Card.Body>
          <Card.Title>Turno confirmado </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default miTurno