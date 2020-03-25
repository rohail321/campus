import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './component/auth/Login'
import Signup from './component/auth/Signup'
import Dashboard from './component/dashboard/Dashboard'
import firebase from './firebase'
import Verification from './component/layout/verify/Verification'
import CreateProfile from './component/form/CreateProfile'
import StudentList from './component/dashboard/StudentList'
import CreateCompany from './component/form/CreateCompany'
import CreateVacancy from './component/form/CreateVacancy'
import ForgotPassword from'./component/form/ForgotPassword'
import VacancyList from './component/dashboard/VacancyList'
import CreateAdmin from './component/form/CreateAdmin'
import CompanyList from './component/dashboard/CompanyList';
import PrivateRoute from './PrivateRoute'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isAuth:true,
      login:true
    }
  }
  componentDidMount(){
    this.authListner()
  }
authListner=()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      localStorage.setItem('user',user.uid)
      this.setState({isAuth:true})
      this.setState({login:false})

    }
    else{
      localStorage.removeItem('user')
      this.setState({isAuth:false})

    }
  })
}

  render(){
    return (
      <Router>
      <Switch>
        {/* {this.state.login&&()} */}
        <Route exact path='/'><Login/></Route>
        <Route exact path='/signup'><Signup/></Route>
        <PrivateRoute exact path='/dashboard' isAuth={this.state.isAuth} component={Dashboard}/>
        <PrivateRoute exact path='/dashboard/createprofile'isAuth={this.state.isAuth} component={CreateProfile} />
        <Route exact path='/verifyemail'><Verification/></Route>
        <PrivateRoute exact path='/dashboard/studentlist'isAuth={this.state.isAuth} component={StudentList} />
        <PrivateRoute exact path='/dashboard/companyform' isAuth={this.state.isAuth} component={CreateCompany} />
        <PrivateRoute exact path='/dashboard/createvacancy' isAuth={this.state.isAuth} component={CreateVacancy} /> 
        <Route exact path='/forgotpassword'><ForgotPassword/> </Route>
        <PrivateRoute exact path='/dashboard/vacancy' isAuth={this.state.isAuth} component={VacancyList } />
        <PrivateRoute exact path='/dashboard/createadmin' isAuth={this.state.isAuth} component={CreateAdmin} /> 
        <PrivateRoute exact path='/dashboard/company' isAuth={this.state.isAuth} component={CompanyList } />









  
  
      </Switch>
      </Router>
     
    );
  }
  
}

export default App;
