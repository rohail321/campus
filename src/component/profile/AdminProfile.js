import React, { Component } from 'react'
import AdminBanner from '../banner/AdminBanner'
import DashboardBanner from '../banner/DashboardBanner'
import firebase from '../../firebase'
import spn from '../../assets/91.gif'
export class AdminProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            profile:false,
            id:'',
            adminprofile:[],
            spinner:true

        }
    }

    async componentDidMount(){
        this.currentUser().then((data)=>{
            this.setState({id:data})
            this.checkUserProfile()

        })
        
        
     

  
    }
    checkUserProfile=async()=>{
        

        const db=await firebase.firestore()
        
            const getDoc=await db.collection('createadmin')
        const doc=await getDoc.where('id', '==', this.state.id).get()
        ;(await doc).forEach((result)=>{
            this.setState({profile:true})
               this.setState({adminprofile:result.data()})
               this.setState({spinner:false})
        })
        if(this.state.profile.length===0){
            alert('No Profile Exist')
            this.setState({spinner:false})
           }
            
     
 
        
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
        let banner
        let spiner
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px"}}><img src={spn} style={{width:'80px'}} alt='pic' />
            <h4>Please Wait</h4></div>)

        }
        else{
            switch (this.state.profile) {
                case true:
                    banner=<AdminBanner profile={this.state.adminprofile} />
                    break;
                case false:
                    banner=<DashboardBanner/>
                    break;
            
                default:
                    break;
            }
        }
        return (
            <div>
            {spiner}
            {banner}
        </div>
        )
    }
}

export default AdminProfile
