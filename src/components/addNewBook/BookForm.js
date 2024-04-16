import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { addBook, editBook } from "../../actions";
import { randomInt, categories } from "../../helpers/app-helpers";
import { useDispatch } from "react-redux";

// Create BookForm component:
const BooksForm = ({ newbook }) => {
  // pepare for dispatch
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  // Create form states:
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");

  const [viewbook, setView] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("viewbook");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  // wait for data read
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      // waits for 1000ms
      await sleep(800);

      // if not new, need display
      if (!newbook) {
        // set form to this book
        setTitle(viewbook.title);
        setCategory(viewbook.category);
        setAuthor(viewbook.author);
        setPrice(viewbook.price);
        setDetail(viewbook.detail);
      }
      return "UpdatedForm";
    };
    const result = fetchData()
      // make sure to catch any error
      .catch(console.error);

    // what will be logged to the console?
    console.log(result);
  }, []);

  // Add form handleSubmit handler:
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    // simple validation on form not empty
    if (validated === true && title && category && author && price && detail) {
      // new book, add to list
      if (newbook) {
        dispatch(
          addBook({
            id: randomInt(4, 8),
            title,
            category,
            author,
            price,
            detail,
          })
        );
      } else {
        dispatch(
          editBook({
            id: viewbook.id,
            title,
            category,
            author,
            price,
            detail,
          })
        );
      }
      // reset state to default
      setTitle("");
      setCategory(categories[0]);
      setAuthor("");
      setPrice("");
      setDetail("");
      setValidated(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Name"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter book name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Author</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">By</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Author"
              aria-describedby="inputGroupPrepend"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter author.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Detail</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Detail"
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide book detail.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit"> {newbook ? "Add BooK" : "Edit Book"}</Button>
    </Form>
  );
};
export default BooksForm;
