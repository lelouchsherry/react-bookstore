import React from "react";
import Book from "./Book";
import { NewBook } from "../addNewBook/NewBook";
// Import removeBook reducer:
import { removeBook } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// Create BooksList component:
const BooksList = () => {
  // sort book list
  const books = [...useSelector((state) => state.books)].sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  });

  // pepare for dispatch
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    // remove book from list
    dispatch(removeBook(book));
  };
  
  // for popup window
  const [modalShow, setModalShow] = useState(false);

  function handleIdSelected(id) {
    // if id exist and not equal to -1
    if (id && id !== -1) {
      // show form and pass id
      setModalShow(true);
      // Get book from book list with id:
      const book = books.find((book) => Number(id) === book.id);
      // store clicked book in localStorage
      localStorage.setItem("viewbook", JSON.stringify(book));
    }
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <Book
            book={book}
            deleteBook={handleRemoveBook}
            sendDataBack={handleIdSelected}
          />
        </div>
      ))}
      <NewBook
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default BooksList;
