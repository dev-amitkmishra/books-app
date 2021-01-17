import { connect } from 'react-redux';
import Button from "./components/atoms/button";
import Search from "./components/atoms/search";
import SubTitle from "./components/atoms/subtitle";
import Title from "./components/atoms/title";
import CardList from "./components/organisms/cardList";
import Form from "./components/organisms/form";
import { BlockSubTitle, BlockTitle, ButtonText } from './constants';
import { useEffect, useState } from 'react';
import { addBook, showBooks } from './actions';


function App(props) {
  const [searchText, setSearchText] = useState('');
  const [createBtnClicked, setCreateBtnClicked] = useState(false);
  const { onSearch } = props;
  useEffect(() => {
    onSearch(searchText);
  }, [onSearch, searchText]);

  const btnClickHandler = () => {
    setCreateBtnClicked(!createBtnClicked);
    setSearchText('');
  };

  const searchHandler = (e) => {
    setSearchText(e.target.value);
    setCreateBtnClicked(false);
  }
  return (
    <div className="App">
      <Title title={ BlockTitle } appTitleColor="app-title" />
      <Button text={ ButtonText } type="button" clickHandler={ btnClickHandler } />
      <Search searchHandler={ searchHandler } />
      {
        searchText && (
          <>
            <SubTitle subTitle={ BlockSubTitle } appSubTitleColor="app-subTitle" />
            <CardList books={ props.books } />
          </>
        )
      }
      {
        createBtnClicked && (
          <>
            <Form submitBookHandler={ (bookInfo) => props.onAddBook(bookInfo) } />
            <CardList books={ props.localBooks } />
          </>
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      books: state.books,
      localBooks: state.localBooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAddBook: (bookInfo) => dispatch(addBook(bookInfo)),
      onSearch: (searchText) => dispatch(showBooks(searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
