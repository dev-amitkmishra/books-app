import axios from "axios";
import { BooksApiUrl } from "../constants";

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book
    }
};

export const showBooks = (searchtext) => async dispatch => {
    if (searchtext) {
        const response = await axios.get(BooksApiUrl, {
            params: {
                q: searchtext
            }
        });
        dispatch({
            type: 'SHOW_BOOKS',
            payload: response
        })
    }
}
