import React, { Component } from 'react'
import firebase from '../../firebase'
import {withRouter} from 'react-router'
import './Signup.css'

export class Signup extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            password1:'',
            user:'',
            verified:false

        }
    }

    onChange=(e)=>this.setState({[e.target.name]:e.target.value})

    onRadioChange=(e)=>this.setState({user:e.target.value})
        

  

   

    onSubmit=(e)=>{
        const{history}=this.props
        const{password,password1}=this.state
      

        var actionCodeSettings = {
            url: 'http://localhost:3000',
            
            handleCodeInApp: true
          };


    
        
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((res)=>{
            console.log(res.user.uid)
            const db=firebase.firestore()
            db.collection('user').doc(res.user.uid).set({
                id:res.user.uid,
                email:this.state.email,
                user:this.state.user,
            })

            const user=firebase.auth().currentUser
            user.sendEmailVerification(actionCodeSettings)
            if(password!==password1){
                alert('Password dont match')
            }
    
            else{
                history.push('/verifyemail')
            }


        })
        .catch(err=>{
            alert(err)
            
        })

        
        console.log(this.state)
}


    

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
      
      <h1>Sign Up</h1>
      
      <fieldset>
        <legend><span className="number">1</span>Your basic info</legend>
        
        
        <label htmlFor="mail">Email:</label>
        <input type="email" id="mail" name="email"  onChange={this.onChange} value={this.state.email} required  />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={this.onChange} value={this.state.password} required />
        <label htmlFor="password">Retype-Password:</label>
        <input type="password" id="password" name="password1" onChange={this.onChange} value={this.state.password1} required />
        
        
        <input type="radio" id="student" value="student" checked={this.state.user==='student'} onChange={this.onRadioChange}  name="student"  /><label htmlFor="student" className="light">Student</label><br/>
        <input type="radio" id="company" value="company" checked={this.state.user==='company'} onChange={this.onRadioChange} name="company" /><label htmlFor="company" className="light">Company</label><br/>
        <input type="radio" id="admin" value="admin" checked={this.state.user==='admin'} onChange={this.onRadioChange}  name="admin" /><label htmlFor="admin" className="light">Admin</label>


      </fieldset>
      <button type="submit" className='btn btn-success' style={{height:'50px',fontSize:'20px'}}>Sign Up</button>


      
      
    </form>
            </div>
        )
    }
}

export default withRouter(Signup)
