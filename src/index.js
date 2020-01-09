import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducerCar } from "./reducers/reducerCar"

import 'bulma/css/bulma.css';
import './styles.scss';

const carStore = createStore(reducerCar);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={carStore}>
        <App />
    </Provider>,
    rootElement
);
