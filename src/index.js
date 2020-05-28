import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StorePicker from './Components/StorePicker'
import App from './Components/App'
import './css/style.css'


function Root(){
 
  return(
   
      <Router>
        <Switch>
          <Route path="/" exact component={StorePicker}></Route>
          <Route path="/store/:storeId" exact component={App}></Route>
        </Switch>
      </Router>
   
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

