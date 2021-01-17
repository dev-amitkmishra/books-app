export const addBook = (book) => {
    console.log('mjsndbfhgdsf', book);
    return {
        type: 'ADD_BOOK',
        payload: book
    }
};

export const showBooks = () => {
    console.log('rtyghj')
    return {
        type: 'SHOW_BOOKS',
        payload: []
    }
}
