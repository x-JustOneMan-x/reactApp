import './App.scss';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Company from '../company/company';

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <div className="page">
        <Sidebar state={props.state} />
        <Company />
      </div>
    </div >
  );
}

export default App;
