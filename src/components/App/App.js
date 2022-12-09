import { useState } from 'react';
import './App.scss';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Company from '../company/company';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  const [search, setSearch] = useState('asd')

  const searchHandler = value => {
    setSearch(value)
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header search={search} searchHandler={searchHandler} />
        <div className="page">
          <Sidebar state={props.state} search={search} />
          <Company state={props.state} />
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
