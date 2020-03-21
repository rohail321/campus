import React, { Component } from 'react'
import firebase from '../../../firebase'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            email:""
        }
    }

    async componentDidMount(){
        let user =await firebase.auth().currentUser
        if(user!=null){
            const email=user.email
            this.setState({email:email})
        }
    }

    render() {
        return (
            

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to=''>  
  <i class="fas fa-bars"></i>
</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to=''>Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to=''>Features</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to=''>Pricing</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to='' id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Welcome {this.state.email}
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to=''>profile</NavLink>
          <NavLink className="dropdown-item" to=''></NavLink>
          <NavLink className="dropdown-item" to='' onClick={()=>(firebase.auth().signOut())}>signOut</NavLink>
        </div>
      </li>
    </ul>
  </div>
</nav>




        )
    }
}

export default Navbar
