import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import './index.scss';
import {Provider} from 'react-redux';

const restoService = new RestoService();
ReactDOM.render(
<Provider store= {store}>
    <ErrorBoundry>
        <RestoServiceContext.Provider value ={restoService}>
            <Router>
                <App/>
            </Router>
        </RestoServiceContext.Provider>        
    </ErrorBoundry>
</Provider>
    , document.getElementById('root'));

