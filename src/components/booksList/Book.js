import React from "react";
import { useState } from "react";

const Book = ({ book, deleteBook, sendDataBack }) => {
  const handleRemoveBook = () => {
    deleteBook(book);
  };

  const [bookId, setBookID] = useState(book.id);

  function handleClick() {
    setBookID(book.id);
    sendDataBack(bookId);
  }

  return (
    <div className="card m-3" key={book.id}>
      <h5 className="card-header">
        <cite title="Source Title">{book.title}</cite> by {book.author}
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-outline-success mx-3"
        >
          Edit<i className="bi bi-pencil-fill"></i>
        </button>
        <button
          onClick={handleRemoveBook}
          type="button"
          className="btn btn-outline-danger"
        >
          Delete<i className="bi bi-trash3-fill"></i>
        </button>
      </h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: ${book.price}</li>
        <li className="list-group-item">Category: {book.category}</li>
      </ul>
    </div>
  );
};
export default Book;
