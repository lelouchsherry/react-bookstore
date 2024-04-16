import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BookForm from "./BookForm";

export const NewBook = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.newbook ? "Add New Book" : "Book Detail"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm newbook={props.newbook}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
