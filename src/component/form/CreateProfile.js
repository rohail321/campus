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
		e.preventDefault()
		const{history}=this.props
		const{fullname,email,degree,major,experince,cgpa,gender,dob,contact,semester,field}=this.state
		this.currentUser().then((data)=>{
			const db=firebase.firestore()
		if(data){
			const getDoc= db.collection('createprofile')
				getDoc.where('id', '==', data).get()
					.then(res=>{
						res.forEach((result)=>{
							let dt=result.data()
							const{id}=dt
						if(data===id){
							this.setState({exist:true})
						}
						else{
							
						}
						
						})
					})
        

		}
			db.collection('createprofile').add({id:data,fullname,email,degree,major,experince,cgpa,gender,dob,contact,semester,field})
		.then(res=>{
			this.setState({success:true})
			history.push('/dashboard')

			
		})
		.catch(err=>{
			alert(err)
		})

		})
		
		
		

		

	}
	currentUser=()=>{
		return new Promise((res,rej)=>{
            firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    res(user.uid)
                }
                else{
                    rej('False')
                }
            })
        })
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
