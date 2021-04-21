import React from 'react';
import ReactDOM from 'react-dom';
import Inicial from './pages/Inicial';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import CadastroCartorio from './pages/CadastroCartorio';

ReactDOM.render(
    (
        <Router>
                <Switch>
                    <Route exact path="/" component={Inicial}/>
                    <Route path="/cad-cartorio" component={CadastroCartorio}/>
                </Switch>
        </Router>
    )
    ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
