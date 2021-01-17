import React, { useState } from 'react';
import SubTitle from '../atoms/subtitle';
import CardList from '../organisms/cardList';

const home = (props) => {
    return (
        <>
            {
                props.searchText && (
                    <>
                      <SubTitle subTitle={ props.BlockSubTitle } appSubTitleColor="app-subTitle" />
                      <CardList books={ props.books } />
                    </>
                  )
            }
        </>
    )
}

export default home;
