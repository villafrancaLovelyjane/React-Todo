import { useState } from "react";
import Header from "./header";
import { Button, Fade, Form, ListGroup, Modal } from "react-bootstrap";
import Homepage from "./home page";
import Menupage from "./menu";
import Aboutpage from "./about";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpeg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";

const App = (props) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toDoID, setToDoID] = useState("");
  const [toDoName, setToDoName] = useState("");
  const [toDos, settoDos] = useState([
    { id: 1, name: "task #1" },
    { id: 2, name: "task #2" },
  ]);

  const [images, setImages] = useState([img3, img4, img5, img6]);

  const [page, setPage] = useState("task");

  function handleDelete(id) {
    const copyToDos = [...toDos];
    const output = copyToDos.filter((toDos) => {
      if (toDos.id != id) {
        return toDos;
      }
    });

    console.log(output);
    settoDos(output);
  }

  function handleOpenModal(id) {
    setShowModal(true);
  }

  function handleCloseModal(id) {
    setShowModal(false);
  }

  function handleSubmit(id) {
    const data = { id: toDoID, name: toDoName };
    const copyToDos = [...toDos];
    copyToDos.push(data);
    console.log(copyToDos);
    settoDos(copyToDos);
    handleCloseModal();
  }

  console.log(page);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-start flex-column">
      <Header
        todosCount={toDos.length}
        imgsCount={images.length}
        handleChangeHome={() => setPage("home")}
        handleChangeTask={() => setPage("task")}
        handleChangeAbout={() => setPage("about")}
        handleChangeMenu={() => setPage("menu")}
      />

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputPassword5">Task ID</Form.Label>
          <Form.Control
            onChange={(event) => setToDoID(event.target.value)}
            type="text"
            placeholder="Enter Task ID"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

          <Form.Label htmlFor="inputPassword5">Task name</Form.Label>
          <Form.Control
            onChange={(event) => setToDoName(event.target.value)}
            type="text"
            placeholder="Enter Task Name"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} variant="secondary">
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Add ToDo
          </Button>
        </Modal.Footer>
      </Modal>

      {page == "home" && (
        <>
          <Homepage></Homepage>
        </>
      )}

      {page == "about" && (
        <>
          <Aboutpage images={images}></Aboutpage>
        </>
      )}

      {page == "menu" && (
        <>
          <Menupage></Menupage>
        </>
      )}

      {page == "task" && (
        <>
          <button onClick={handleOpenModal} className="btn btn-primary my-3">
            Create ToDo
          </button>

          {toDos.map((toDos) => {
            return (
              <div>
                <ListGroup>
                  <ListGroup.Item action variant="success">
                    {toDos.name}
                  </ListGroup.Item>
                </ListGroup>
                <div className="wrapper d-flex align-items-center justify-content-center ">
                  <button
                    onClick={(id) => handleDelete(toDos.id)}
                    className="btn btn-secondary mx-3 my-3"
                  >
                    delete
                  </button>

                  <Button
                    onClick={(id) => setOpen(!open)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}
                  >
                    click me
                  </Button>
                  <Fade in={open}>
                    <div id="example-fade-text">
                      ANG HIRAP PERO KERI LANG HAHAHAHHA
                    </div>
                  </Fade>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default App;
