import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { NewBook } from "./components/addNewBook/NewBook";
import BooksList from "./components/booksList/index";

export const App = () => {
  // Get books from Redux store:
  const booksCount = useSelector((state) => state.books.length);
  // for popup window
  const [modalShow, setModalShow] = useState(false);
  const [newBook, setNewbook] = useState("old");

  const handleClick = (e) => {
    setModalShow(true);
    setNewbook("new");
  };

  const handleHide = (e) => {
    setModalShow(false);
    setNewbook("old");
  };

  return (
    <div className="container-fluid">
      <div className="grid text-center">
        <header className="mt-3">
          <h1 className="text-primary-emphasis p-2">Sherry's Bookstore</h1>
          <p>Books in collection: {booksCount}</p>
        </header>
        <button className="btn btn-primary mb-2" onClick={handleClick}>
          <i className="bi bi-folder-plus"></i> Add New Book
        </button>

        <NewBook show={modalShow} newbook={newBook} onHide={handleHide} />

        {booksCount > 0 ? (
          <BooksList />
        ) : (
          <div className="alert alert-info" role="alert">
            No books in store, add a book to display it here
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
