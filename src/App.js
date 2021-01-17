import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import Button from "./components/atoms/button";
import Search from "./components/atoms/search";
import SubTitle from "./components/atoms/subtitle";
import Title from "./components/atoms/title";
import CardList from "./components/organisms/cardList";
import Form from "./components/organisms/form";
import { BlockSubTitle, BlockTitle, BooksApiUrl, ButtonText } from './constants';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { addBook, showBooks } from './actions';
import AddBook from './components/templates/addBooks';
import Home from './components/templates/home';

let volumeInfo = {};
function App(props) {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);

  const btnClickHandler = () => {
    console.log('btn clicked');
  };

  const searchHandler = (e) => {
    console.log('sdnfbhjsd', e.target.value);
    setSearchText(e.target.value);
  }
  return (
    <div className="App">
      <Title title={ BlockTitle } appTitleColor="app-title" />
      <Button text={ ButtonText } type="button" clickHandler={ btnClickHandler } />
      <Search searchHandler={ searchHandler } />
      {/* {
        searchText && (
          <>
            <SubTitle subTitle={ BlockSubTitle } appSubTitleColor="app-subTitle" />
            <CardList books={ props.books } />
          </>
        )
      } */}
      <Form submitBookHandler={ (bookInfo) => props.onAddBook(bookInfo) } />
      <CardList books={ props.books } />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAddBook: (bookInfo) => dispatch(addBook(bookInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
