import React from 'react';
import Card from '../../molecules/card';
import './style.scss';

const CardList = ({ books }) => {
    return (
        <>
            <div className="row">
                {
                    books && books.map((book) => {
                        return (
                            <div className="column">
                                <Card bookInfo={ book.volumeInfo } />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

// export default connect(mapStateToProps, { addBook })(CardList);
export default CardList;
