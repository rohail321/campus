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

    onRadioChange=(e)=>{
        this.setState({user:e.target.value})

    }


   

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

        // var actionCodeSettings = {
        //     // URL you want to redirect back to. The domain (www.example.com) for this
        //     // URL must be whitelisted in the Firebase Console.
        //     url: 'http://localhost:3000',
        //     // This must be true.
        //     handleCodeInApp: true,
            

          
        //   };
        // firebase.auth().sendSignInLinkToEmail(this.state.email,actionCodeSettings)
        // .then((res)=>{
        //     window.localStorage.setItem('emailForSignIn', this.state.email);
        //     console.log(res)
        //     alert('Email have been send to your email account please verify it!')
        // })
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
        
        
        <input type="radio" id="student" value="student" checked={this.state.user==='student'} onChange={this.onRadioChange}  name="student" required /><label htmlFor="student" className="light">Student</label><br/>
        <input type="radio" id="company" value="company" checked={this.state.user==='company'} onChange={this.onRadioChange} name="company" /><label htmlFor="company" className="light">Company</label><br/>
        <input type="radio" id="admin" value="admin" checked={this.state.user==='admin'} onChange={this.onRadioChange}  name="admin" /><label htmlFor="admin" className="light">Admin</label>


      </fieldset>
      <button type="submit" className='btn btn-success'>Sign Up</button>


      
      {/* <fieldset>
        <legend><span class="number">2</span>Your profile</legend>
        <label for="bio">Biography:</label>
        <textarea id="bio" name="user_bio"></textarea>
      </fieldset>
      <fieldset>
      <label for="job">Job Role:</label>
      <select id="job" name="user_job">
        <optgroup label="Web">
          <option value="frontend_developer">Front-End Developer</option>
          <option value="php_developor">PHP Developer</option>
          <option value="python_developer">Python Developer</option>
          <option value="rails_developer"> Rails Developer</option>
          <option value="web_designer">Web Designer</option>
          <option value="WordPress_developer">WordPress Developer</option>
        </optgroup>
        <optgroup label="Mobile">
          <option value="Android_developer">Androild Developer</option>
          <option value="iOS_developer">iOS Developer</option>
          <option value="mobile_designer">Mobile Designer</option>
        </optgroup>
        <optgroup label="Business">
          <option value="business_owner">Business Owner</option>
          <option value="freelancer">Freelancer</option>
        </optgroup>
        <optgroup label="Other">
          <option value="secretary">Secretary</option>
          <option value="maintenance">Maintenance</option>
        </optgroup>
      </select>
      
        <label>Interests:</label>
        <input type="checkbox" id="development" value="interest_development" name="user_interest"/><label class="light" for="development">Development</label><br/>
          <input type="checkbox" id="design" value="interest_design" name="user_interest"/><label class="light" for="design">Design</label><br/>
        <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label class="light" for="business">Business</label>
      
      </fieldset> */}
    </form>
            </div>
        )
    }
}

export default withRouter(Signup)
