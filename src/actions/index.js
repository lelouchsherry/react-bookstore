export const addBook = book => ({ type: 'ADD_BOOK', payload: book });

export const removeBook = book => ({ type: 'REMOVE_BOOK', payload: book });

export const editBook = book => ({ type: 'EDIT_BOOK', payload: book });
