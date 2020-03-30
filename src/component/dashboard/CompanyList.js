import React, { Component } from 'react'
import firebase from '../../firebase'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import Spn from '../../assets/91.gif'
import CompanyLists from '../layout/companylist/CompayLists'

export class CompanyList extends Component {
    constructor(props){
        super(props)
        this.state={
            companyprofile:[],
            spinner:true,
            user:'',
            id:'',
            dltid:""

        }
    }
     componentDidMount(){
        

        this.currentUser().then((data)=>{
            this.setState({id:data})
            this.getUser()
            this.getProfile()
        })

        
    }

    getProfile=async ()=>{
        const db=await firebase.firestore()
       const doc= await db.collection('createcompany').get()
       ;(await doc).forEach((res)=>{
           this.setState({companyprofile:this.state.companyprofile.concat(res.data())})
       this.setState({spinner:false})})
       
       if(this.state.companyprofile.length===0){
        alert('No Profile Exist')
        this.setState({spinner:false})

    }
    }

    deleteUser=(e)=>{
        let currentuserid=e.target.id
        console.log(currentuserid)
        console.log(this.state.id)
        let userdelete=this.state.companyprofile.filter((res)=>(currentuserid!==res.id))
        this.setState({companyprofile:userdelete})
        const db=firebase.firestore()
        let userdb= db.collection("createcompany").where('id', '==', currentuserid)
        userdb.get().then((res)=>{
            res.forEach((doc)=>{
                doc.ref.delete()
            })
        })
        console.log(userdelete)

    }

    currentUser= ()=>{
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
    getUser=()=>{
        const db=firebase.firestore()
        let getDoc=db.collection('user')
        getDoc.where('id', '==', this.state.id).get()
        .then((doc)=>{
            doc.forEach((res)=>{
                this.setState({user:res.data().user})
            })
        })
    }
    
    render() {
        let spiner
        let content
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px"}}><img src={Spn} alt='pic' style={{width:'80px'}} />
            <h4>Please Wait</h4></div>)

        }
        else{
            content=(<CompanyLists company={this.state.companyprofile} user={this.state.user} deleteuser={this.deleteUser}  />)
        }
        return (
            <div>
                <div> <Navbar/>
                <div style={{display:'flex',flexDirection:'row' }}>
				<div style={{flexGrow:'3'}}>
				<Sidebar />
				</div>
				<div style={{flexGrow:'40'}}>
                {spiner}
                {content}
					</div>
				</div>
                
                </div>
                </div>
            
        )
    }
}

export default CompanyList
