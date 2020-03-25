import React, { Component } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import Form from './Form'
import firebase from '../../firebase'
import {withRouter} from 'react-router'
export class CreateProfile extends Component {
	constructor(props){
		super(props)
		this.state={
			fullname:'',
			email:'',
			cgpa:'',
			semester:'',
			degree:'',
			major:'',
			gender:'',
			contact:'',
			experince:'',
			dob:'',
			field:"",
			success:false,
			exist:false
		}
	}
	onRadioChange=(e)=>this.setState({gender:e.target.value})
	onChange=(e)=>this.setState({[e.target.name]:e.target.value})
	onSubmit=(e)=>{
		const{history}=this.props
		const{fullname,email,degree,major,experince,cgpa,gender,dob,contact,semester,field}=this.state
		e.preventDefault()
		const currentUser=	firebase.auth().currentUser
		const db=firebase.firestore()
		if(currentUser.uid){
			const getDoc= db.collection('createprofile')
			setTimeout(() => {
				getDoc.where('id', '==', currentUser.uid).get()
					.then(res=>{
						res.forEach((result)=>{
							let dt=result.data()
							const{id}=dt
						if(currentUser.uid===id){
							this.setState({exist:true})
						}
						else{
							
						}
						
						})
					})
			}, 3000);
        

		}
		setTimeout(() => {
			db.collection('createprofile').add({id:currentUser.uid,fullname,email,degree,major,experince,cgpa,gender,dob,contact,semester,field})
		.then(res=>{
			console.log(res)
			this.setState({success:true})
			history.push('/dashboard')

			
		})
		.catch(err=>{
			alert(err)
		})
		}, 5000);
		

		

	}

    render() {
        return (
			<div>
				<Navbar/>
				<div style={{display:'flex',flexDirection:'row' }}>
				<div style={{flexGrow:'1'}}>
				<Sidebar />
				</div>
				<div style={{flexGrow:'10'}}>
					<Form onChange={this.onChange} onSubmit={this.onSubmit} state={this.state} onRadioChange={this.onRadioChange} success={this.state.success} />
					</div>
				</div>
				
				</div>
            
        )
    }
}

export default withRouter(CreateProfile)
