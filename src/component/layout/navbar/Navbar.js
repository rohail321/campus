import React, { Component } from 'react'
import firebase from '../../../firebase'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            user:'',
            id:""
        }
    }

    componentDidMount(){
         this.currentUser().then((data)=>{
         
            this.setState({email:data.email})
            this.setState({id:data.uid})
            this.getUser()

        
         })

        
        
    }
    currentUser=()=>{
      return new Promise((res,rej)=>{
        firebase.auth().onAuthStateChanged((user)=>{
          if(user)
          {res(user)}
          else{rej('False')}
        })
      })
    }
    getUser=async ()=>{
      const db=await firebase.firestore()
        const getDoc=await db.collection('user')
        const doc=getDoc.where('id', '==', this.state.id).get()
        ;(await doc).forEach((data)=>{
          this.setState({user:data.data().user})
        })
    }

    render() {
        return (
            

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to='/dashboard'>  
</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to='/dashboard'>Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/dashboard/vacancy'>Vacancy</NavLink>
      </li>
      {this.state.user=='company'?'':(<li className="nav-item">
      <NavLink className="nav-link" to='/dashboard/company'>Company</NavLink>
      </li>)}
      
      {this.state.user=='student'?'':(<li className="nav-item">
        <NavLink className="nav-link" to='/dashboard/studentlist' >Sudent</NavLink>
      </li>)}
      
    
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to='' id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Welcome {this.state.email}
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
