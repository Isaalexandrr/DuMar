import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoSearch } from "react-icons/io5";

import styles from "./Menu.module.css";

function Menu({ handleCategorySelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione a lógica de pesquisa aqui se necessário
    console.log("Pesquisar por:", searchTerm);
  };

  return (
    <div className={styles["menu1"]}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-5 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Categoria" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => handleCategorySelect("Todos")}>
                  Todos
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleCategorySelect("Peixe")}>
                  Peixe
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategorySelect("Crustáceo")}
                >
                  Crustáceo
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategorySelect("Molusco")}
                >
                  Molusco
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/consumo">Consumo Consciente</Nav.Link>
              <Nav.Link href="/quemSomos">Quem somos</Nav.Link>
            </Nav>
            <div className={styles["pesquisar"]}>
              <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  placeholder="Pesquisar"
                  className="me-2 shadow p-2 mb-2 bg-body rounded"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Button type="submit" className="me-4 shadow p-2 mb-2 rounded">
                  <IoSearch />
                </Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
