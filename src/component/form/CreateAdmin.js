import React, { Component } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import AdminForm from './AdminForm'
import firebase from '../../firebase'
import {withRouter} from 'react-router'
export class CreateAdmin extends Component {
	constructor(props){
		super(props)
		this.state={
            name:'',
            department:'',
            email:'',
			exist:false,
			success:false
		}
	}

	
	onChange=(e)=>this.setState({[e.target.name]:e.target.value})
	onSubmit=(e)=>{
		const{history}=this.props

		const{name,email,department}=this.state


		e.preventDefault()

		const currentUser=	firebase.auth().currentUser

		const db=firebase.firestore()
		if(currentUser.uid){
            console.log(currentUser.uid)
			const getDoc= db.collection('createadmin')
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
            db.collection('createadmin').add({id:currentUser.uid,name,email,department})
    .then(res=>{
        this.setState({success:true})
        history.push('/dashboard')

        
    })
    .catch(err=>{
        alert(err)
    })
        }, 5000);

	
        console.log(this.state)
		

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
					<AdminForm onChange={this.onChange} onSubmit={this.onSubmit} state={this.state}  success={this.state.success} />
					</div>
				</div>
				
				</div>
            
        )
    }
}

export default withRouter(CreateAdmin)
