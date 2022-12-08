import './App.scss';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Company from '../company/company';
import { BrowserRouter } from 'react-router-dom';
function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="page">
          <Sidebar state={props.state} />
          <Company />
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
