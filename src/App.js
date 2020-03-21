import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch, BrowserRouter} from 'react-router-dom'
import Login from './component/auth/Login'
import Signup from './component/auth/Signup'
import Dashboard from './component/dashboard/Dashboard'
import firebase from './firebase'
import Verification from './component/layout/verify/Verification'

class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
authListner=()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      localStorage.setItem('user',user.uid)
      console.log(user)
    }
    else{
      localStorage.removeItem('user')
    }
  })
}

  render(){
    return (
      <Router>
      <Switch>
        <Route exact path='/'><Login/></Route>
        <Route exact path='/signup'><Signup/></Route>
        <Route exact path='/dashboard'><Dashboard/></Route>
        <Route exact path='/dashboard/createprofile'><Dashboard/></Route>
        <Route exact path='/verifyemail'><Verification/></Route>


  
  
      </Switch>
      </Router>
     
    );
  }
  
}

export default App;
