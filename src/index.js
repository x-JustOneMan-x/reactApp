import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import store from './redux/redux-store';
import './index.scss';

let rerenderEntrireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntrireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntrireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
