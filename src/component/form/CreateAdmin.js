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
		e.preventDefault()

		const{history}=this.props

		const{name,email,department}=this.state

		this.currentUser().then((data)=>{
			const db=firebase.firestore()
		if(data){
			const getDoc= db.collection('createadmin')
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
            db.collection('createadmin').add({id:data,name,email,department})
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
					<AdminForm onChange={this.onChange} onSubmit={this.onSubmit} state={this.state}  success={this.state.success} />
					</div>
				</div>
				
				</div>
            
        )
    }
}

export default withRouter(CreateAdmin)
