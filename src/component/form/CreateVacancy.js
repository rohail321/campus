import React, { Component } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import VacancyForm from './VacancyForm'
import firebase from '../../firebase'
import {withRouter} from 'react-router'

export class CreateVacancy extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            companyname:'',
            email:'',
            address:"",
            skills:'',
            experince:'',
            detail:'',
            shift:'',
            success:false
        }
    }

    onChange=(e)=>this.setState({[e.target.name]:e.target.value})
    onSubmit=(e)=>{
        const{title,companyname,email,address,skills,experince,detail,shift}=this.state
        e.preventDefault()
        const currentUser=firebase.auth().currentUser
        const db=firebase.firestore()
        db.collection('createvacancy').add({id:currentUser.uid,title,companyname,email,address,skills,experince,detail,shift})
        .then(res=>{
            this.setState({success:true})
        })
        .catch(err=>{
            alert(err)
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
					<VacancyForm onChange={this.onChange} onSubmit={this.onSubmit} state={this.state}  success={this.state.success} />
					</div>
				</div>
                
            </div>
        )
    }
}

export default CreateVacancy
