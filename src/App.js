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

function App() {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data, status } = await axios(BooksApiUrl, {
        params: {
          q: searchText
        }
      });
      if(status === 200 && data && data.items) {
        setBooks(data.items);
      }
    }
    search();

  }, [searchText]);

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
      <Button text={ ButtonText } clickHandler={ btnClickHandler } />
      <Search searchHandler={ searchHandler } />
      {
        searchText && (
          <>
            <SubTitle subTitle={ BlockSubTitle } appSubTitleColor="app-subTitle" />
            <CardList books={ books } />
          </>
        )
      }
      <Form />
      <CardList books={ books } />
    </div>
  );
}

export default App;
