import React, { Component } from 'react'
import './Login.css'
import firebase from '../../firebase'
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
	}
	



    onChange=(e)=>this.setState({[e.target.name]:e.target.value})
    onSubmit=(e)=>{
        const {history}=this.props
		e.preventDefault()
		firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
		.then(res=>{
			setTimeout(() => {
				
			}, 2000);
			const users =firebase.auth().currentUser
			
		if(!users.emailVerified){
			history.push('/verifyemail')

		}
			else{console.log(res)
				history.push('/dashboard')}
		})
		.catch(err=>{
			alert(err)
		})
		
		


		
//         if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//   // Additional state parameters can also be passed via URL.
//   // This can be used to continue the user's intended action before triggering
//   // the sign-in operation.
//   // Get the email if available. This should be available if the user completes
//   // the flow on the same device where they started it.
//   var email = window.localStorage.getItem('emailForSignIn');
//   if (!email) {
//     // User opened the link on a different device. To prevent session fixation
//     // attacks, ask the user to provide the associated email again. For example:
//     email = window.prompt('Please provide your email for confirmation');
//   }
//   // The client SDK will parse the code from the link for you.
//   firebase.auth().signInWithEmailLink(email, window.location.href)
//     .then(function(result) {
//       // Clear email from storage.
// 	  window.localStorage.removeItem('emailForSignIn');
// 	  history.push('/dashboard')
// 	  console.log(result)
//       // You can access the new user via result.user
//       // Additional user info profile not available via:
//       // result.additionalUserInfo.profile == null
//       // You can check if the user is new or existing:
//       // result.additionalUserInfo.isNewUser
//     })
//     .catch(function(error) {
//       // Some error occurred, you can inspect the code: error.code
//       // Common errors could be invalid email and invalid or expired OTPs.
//     });
// }


console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-178" onSubmit={this.onSubmit}>
					<span className="login100-form-title">
						Sign In
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter emai">
						<input className="input100" type="email" name="email" onChange={this.onChange} value={this.state.email}  placeholder="Email" required/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Please enter password">
						<input className="input100" type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required/>
						<span className="focus-input100"></span>
					</div>

					<div className="text-right p-t-13 p-b-23">
						<span className="txt1">
							Forgot
						</span>

						<NavLink to='' className="txt2">
							Username / Password?
						</NavLink>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign in
						</button>
					</div>

					<div className="flex-col-c p-t-170 p-b-40">
						<span className="txt1 p-b-9">
							Don’t have an account?
						</span>

						<NavLink to='/signup' className="txt3">
							Sign up now
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	</div>
                
            </div>
        )
    }
}

export default withRouter(Login) 
