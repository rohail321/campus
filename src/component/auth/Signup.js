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
            user:''

        }
    }

    onChange=(e)=>this.setState({[e.target.name]:e.target.value})

    onRadioChange=(e)=>{
        this.setState({user:e.target.value})

    }

    onSubmit=(e)=>{
        const{history}=this.props
        const{password,password1}=this.state
        if(password!==password1){
            alert('Password dont match')
        }
        
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((res)=>{
            console.log(res)
            history.push('/dashboard')
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
      
      <h1>Sign Up</h1>
      
      <fieldset>
        <legend><span class="number">1</span>Your basic info</legend>
        
        
        <label for="mail">Email:</label>
        <input type="email" id="mail" name="email"  onChange={this.onChange} value={this.state.email}  />
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" onChange={this.onChange} value={this.state.password} />
        <label for="password">Retype-Password:</label>
        <input type="password" id="password" name="password1" onChange={this.onChange} value={this.state.password1} />
        
        
        <input type="radio" id="student" value="student" checked={this.state.user==='student'} onChange={this.onRadioChange}  name="student"/><label for="student" class="light">Student</label><br/>
        <input type="radio" id="company" value="company" checked={this.state.user==='company'} onChange={this.onRadioChange} name="company"/><label for="company" class="light">Company</label><br/>
        <input type="radio" id="admin" value="admin" checked={this.state.user==='admin'} onChange={this.onRadioChange}  name="admin"/><label for="admin" class="light">Admin</label>

      </fieldset>
      
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
      <button type="submit">Sign Up</button>
    </form>
            </div>
        )
    }
}

export default withRouter(Signup)
