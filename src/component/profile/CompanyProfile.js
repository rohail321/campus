import React, { Component } from 'react'
import CompanyBanner from '../banner/CompanyBanner'
import DashboardBanner from '../banner/DashboardBanner'
import firebase from '../../firebase'
import spn from '../../assets/91.gif'

export class CompanyProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            profile:false,
            id:'',
            stdProfile:[],
            spinner:true

        }
    }


   async componentDidMount(){
        this.currentUser()
        setTimeout(() => {
            this.setState({spinner:false})
        }, 4000);
        
     
            this.checkUserProfile()

  
    }

    checkUserProfile=()=>{
        console.log(this.state.id)

        const db= firebase.firestore()
        setTimeout(() => {
            const getDoc= db.collection('createcompany')
        getDoc.where('id', '==', this.state.id).get()
        .then(res=>{
            res.forEach((result)=>{
                this.setState({profile:true})
               this.setState({stdProfile:result.data()})
               console.log(this.state.stdProfile)

            })
        })
        }, 3000);
        
        

        
       
        
    }

    currentUser=()=>{
        const currentUser=localStorage.getItem('user')
        this.setState({id:currentUser})
        console.log(currentUser)
        
        
    }
    render() {
        console.log(this.state)
        let banner
        let spiner
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px"}}><img src={spn}/>
            <h4>Please Wait</h4></div>)

        }
        else{
            switch (this.state.profile) {
                case true:
                    banner=<CompanyBanner profile={this.state.stdProfile} />
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

export default CompanyProfile
