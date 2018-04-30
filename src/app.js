import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainContainer from './components/container/main_container';
import store from './components/redux/store';


const app = document.getElementById('app');

ReactDOM.render((
    <Provider store={store}>
    <BrowserRouter>
    <MainContainer /> 
    </BrowserRouter>
    </Provider>), app);