import { connect } from 'react-redux';
import Button from "./components/atoms/button";
import Search from "./components/atoms/search";
import SubTitle from "./components/atoms/subtitle";
import Title from "./components/atoms/title";
import CardList from "./components/organisms/cardList";
import Form from "./components/organisms/form";
import { AddBook, BackToSearch, BlockSubTitle, BlockTitle, ButtonText, SearchInputPlaceholdertext } from './constants';
import { useEffect, useState } from 'react';
import { addBook, showBooks } from './actions';


function App(props) {
  const [searchText, setSearchText] = useState('');
  const [blockTitle, setBlockTitle] = useState(BlockTitle);
  const [btnText, setBtnText] = useState(ButtonText);
  const [createBtnClicked, setCreateBtnClicked] = useState(false);
  const { onSearch } = props;
  useEffect(() => {
    onSearch(searchText);
  }, [onSearch, searchText]);

  const btnClickHandler = () => {
    setCreateBtnClicked(!createBtnClicked);
    setSearchText('');
    if (!createBtnClicked) {
      setBtnText(BackToSearch);
      setBlockTitle(AddBook);
    } else {
      setBtnText(ButtonText);
      setBlockTitle(BlockTitle);
    }
  };

  const changeHandler = (e) => {
    setSearchText(e.target.value);
    setCreateBtnClicked(false);
  }
  return (
    <div className="App">
      <Title title={ blockTitle } appTitleColor="app-title" />
      <Button text={ btnText } type="button" clickHandler={ btnClickHandler } />
      {
        !createBtnClicked && <Search changeHandler={ changeHandler } placeholderText={ SearchInputPlaceholdertext } icon="fas fa-search" />
      }
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
