import './App.scss';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Profile from '../Profile/profile';
import Dialogs from '../Dialogs/dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import News from '../News/news';
// import Music from '../Music/music';
// import Settings from '../Settings/settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="page container">
          <Sidebar />
          <div className="main-content">
            <Route path="/profile/" render={() => <Profile store={props.store} />} />
            <Route path="/dialogs/" render={() => <Dialogs store={props.store} />} />
            {/* <Route path="/news/" component={News} />
            <Route path="/music/" component={Music} />
            <Route path="/settings/" component={Settings} /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
