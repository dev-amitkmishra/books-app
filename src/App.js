import logo from './logo.svg';
// import './App.css';
import Button from "./components/atoms/button";
import Search from "./components/atoms/search";
import SubTitle from "./components/atoms/subtitle";
import Title from "./components/atoms/title";
import CardList from "./components/organisms/cardList";
import { BlockSubTitle, BlockTitle, ButtonText } from './constants';

function App() {
  const btnClickHandler = () => {
    console.log('btn clicked');
  }
  return (
    <div className="App">
      <Title title={ BlockTitle } appTitleColor="app-title" />
      <Button text={ ButtonText } clickHandler={ btnClickHandler } />
      <Search />
      <SubTitle subTitle={ BlockSubTitle } appSubTitleColor="app-subTitle" />
      <CardList />
    </div>
  );
}

export default App;
