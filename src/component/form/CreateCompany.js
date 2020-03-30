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
			success:false,
			id:""
		}
	}

	
	onRadioChange=(e)=>this.setState({gender:e.target.value})
	onChange=(e)=>this.setState({[e.target.name]:e.target.value})
	onSubmit=(e)=>{
		e.preventDefault()
		const{history}=this.props

		const{companyname,email,founded,contact,ceo,noe,address}=this.state
		this.currentUser().then((data)=>{
			this.setState({id:data})

		const db=firebase.firestore()
		if(data){
			const getDoc= db.collection('createcompany')
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

			db.collection('createcompany').add({id:data,companyname,email,founded,contact,ceo,noe,address})
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
					<CompanyForm onChange={this.onChange} onSubmit={this.onSubmit} state={this.state}  success={this.state.success} />
					</div>
				</div>
				
				</div>
            
        )
    }
}

export default withRouter(CreateCompany)
