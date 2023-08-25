import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function DropDown({}) {
  return (
    <div>
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Pantalones</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Zapatillas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Mayorista</NavDropdown.Item>
            </NavDropdown>
    </div>
  )
}
