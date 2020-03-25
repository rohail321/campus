import React, { Component } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import StudentProfile from '../profile/StudentProfile'
import CompanyProfile from '../profile/CompanyProfile'
import firebase from '../../firebase'
import spn from '../../assets/91.gif'
import AdminProfile from '../profile/AdminProfile'
export class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state={
            id:"",
            user:'',
            spinner:true,
            profile:false
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({spinner:false})
        }, 6000);
        this.getcurrentUser()
        setTimeout(() => {
            this.checkUser()

        }, 4000);
    }

    checkUser=()=>{
        const db=firebase.firestore()
        const getDoc= db.collection('user')
        getDoc.where('id', '==', this.state.id).get()
        .then(res=>{
            res.forEach((result)=>{
                this.setState({profile:true})
               this.setState({user:result.data().user})

            })
        })
    }

    getcurrentUser=()=>{
        setTimeout(() => {
            const currentUser=firebase.auth().currentUser
            this.setState({id:currentUser.uid})
        }, 3000);
       
    }
    render() {
        let spiner
        let usr

        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px"}}><img src={spn} style={{width:'80px'}} />
            <h4>Please Wait</h4></div>)
        }
        else if(!this.state.spinner){
            switch (this.state.user) {
                case 'company':
                    usr=<CompanyProfile/>
    
                    break;
                case 'student':
                    usr=<StudentProfile/>
                    break;
                 case 'admin':
                    usr=<AdminProfile/>
                    break;
            
                default:
                    break;
            }
        }
        
        
        return (
            <div>
                <Navbar/>
                <div style={{display:'flex',flexDirection:'row' }}>
				<div style={{flexGrow:'3'}}>
				<Sidebar />
				</div>
				<div style={{flexGrow:'40'}}>
                    <div>
                    {spiner}
                    </div>
                   
                   {usr}
					</div>
				</div>
                </div>
        )
    }
}

export default Dashboard
