/* jshint esversion: 9 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import WorksProvider from './Components/Context';
import App from './App';

function Index() {
    return (
        <WorksProvider>
            <Router>
                <App/>
            </Router>
        </WorksProvider>    
    )
}


ReactDOM.render(<Index />, document.getElementById('root'));

