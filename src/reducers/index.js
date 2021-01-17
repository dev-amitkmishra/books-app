const initialState = {
    books: [],
    localBooks: []
}

const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject, 
        ...updatedValues
    }
}

const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return updateObject(state, {
                localBooks: state
                    .localBooks
                    .concat({
                        volumeInfo: action.payload
                    })
            })
        case 'SHOW_BOOKS':
            return {
                ...state,
                books: action.payload.data.items
            }
        default:
            break;
    }
    return state;
};

export default actionReducer;
