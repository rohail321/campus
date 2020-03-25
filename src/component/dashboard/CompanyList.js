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
        setTimeout(() => {
            this.setState({spinner:false})
        }, 4000);
        const db=firebase.firestore()
       db.collection('createcompany').get()
       .then(doc=>{
           doc.forEach(res=>{
               this.setState({companyprofile:this.state.companyprofile.concat(res.data())})
           })
       })
       this.currentUser()
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
        setTimeout(() => {
            const userCurrent= firebase.auth().currentUser
        this.setState({id:userCurrent.uid})
        const db=firebase.firestore()
        let getDoc=db.collection('user')
        getDoc.where('id', '==', userCurrent.uid).get()
        .then((doc)=>{
            doc.forEach((res)=>{
                console.log(res.data())
                this.setState({user:res.data().user})
                console.log(this.state)
            })
        })
            
        }, 5000);
        
        
    }
    
    render() {
        let spiner
        let content
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px"}}><img src={Spn} style={{width:'80px'}} />
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
