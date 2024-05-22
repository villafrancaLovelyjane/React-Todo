import { Badge, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Header({
  handleChangeHome,
  handleChangeTask,
  handleChangeAbout,
  handleChangeMenu,
  todosCount,
  imgsCount,
}) {
  return (
    <div className="container-fluid bg-secondary">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            ToDo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 d-flex align-items-center justify-content-end">
              <Nav.Link
                className="text-white"
                onClick={handleChangeHome}
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="text-white"
                onClick={handleChangeMenu}
                href="#link"
              >
                Menu
              </Nav.Link>
              <Nav.Link
                className="text-white"
                onClick={handleChangeTask}
                href="#link"
              >
                Task <Badge bg="primary">{todosCount}</Badge>
              </Nav.Link>
              <Nav.Link
                className="text-white"
                onClick={handleChangeAbout}
                href="#link"
              >
                About <Badge bg="primary">{imgsCount}</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
