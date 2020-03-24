import React, { Component } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import CompanyForm from './CompanyForm'
import firebase from '../../firebase'
import {withRouter} from 'react-router'
export class CreateCompany extends Component {
	constructor(props){
		super(props)
		this.state={
			companyname:'',
			email:'',
			founded:'',
			contact:'',
            ceo:'',
            noe:'',
			address:'',
			exist:false,
			success:false
		}
	}

	
	onRadioChange=(e)=>this.setState({gender:e.target.value})
	onChange=(e)=>this.setState({[e.target.name]:e.target.value})
	onSubmit=(e)=>{
		const{history}=this.props

		const{companyname,email,founded,contact,ceo,noe,address}=this.state


		e.preventDefault()

		const currentUser=	firebase.auth().currentUser

		const db=firebase.firestore()
		if(currentUser.uid){
			const getDoc= db.collection('createcompany')
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
							setTimeout(() => {
								db.collection('createcompany').add({id:currentUser.uid,companyname,email,founded,contact,ceo,noe,address})
						.then(res=>{
							this.setState({success:true})
							history.push('/dashboard')
				
							
						})
						.catch(err=>{
							alert(err)
						})
							}, 5000);
						}
						
						})
					})
			}, 3000);
        

		}

		if(this.state.exist===false){
			
			
		}
        
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
					<CompanyForm onChange={this.onChange} onSubmit={this.onSubmit} state={this.state}  success={this.state.success} />
					</div>
				</div>
				
				</div>
            
        )
    }
}

export default withRouter(CreateCompany)
