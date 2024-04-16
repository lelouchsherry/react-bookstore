const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";
const EDIT_BOOK = "EDIT_BOOK";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case EDIT_BOOK:
      const books = state.filter((book) => Number(action.payload.id) !== book.id);
      return [...books, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
