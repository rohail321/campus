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
  <a className="navbar-brand" href="#">  
  <i class="fas fa-bars"></i>
</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Welcome {this.state.email}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">profile</a>
          <a className="dropdown-item" href="#"></a>
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
