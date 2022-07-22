const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [
  // {
  //   id: '1',
  //   title: 'Think Big',
  //   author: 'Ben Carson',
  // },
  // {
  //   id: '2',
  //   title: 'The Power of Significance',
  //   author: 'John Maxwell',
  // },
  // {
  //   id: '3',
  //   title: 'Change your thinking cahnge your life',
  //   author: 'Brian Tracy',
  // },
  // {
  //   id: '4',
  //   title: 'The Leader who had no title',
  //   author: 'Robin Sharma',
  // },
];

export const addedBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removedBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.id);

    default:
      return state;
  }
};
