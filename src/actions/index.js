const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book
    }
};

const showBooks = () => {
    return {
        type: 'SHOW_LIST_OF_BOOKS',
        payload: []
    }
}