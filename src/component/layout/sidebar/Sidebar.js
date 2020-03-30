import React,{Component} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {NavLink} from 'react-router-dom'
import firebase from '../../../firebase'


export class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state={
          email:"",
          user:'',
          id:"",
          bar:'false'
        }
    }
    componentDidMount(){
      this.currentUser().then((data)=>{
      
         this.setState({email:data.email})
         this.setState({id:data.uid})
         this.getUser()

     
      })

     
     
 }
 currentUser=()=>{
   return new Promise((res,rej)=>{
     firebase.auth().onAuthStateChanged((user)=>{
       if(user)
       {res(user)}
       else{rej('False')}
     })
   })
 }
 getUser=async ()=>{
   const db=await firebase.firestore()
     const getDoc=await db.collection('user')
     const doc=getDoc.where('id', '==', this.state.id).get()
     ;(await doc).forEach((data)=>{
       this.setState({user:data.data().user})
     })
 }

    
    render() {
        return (
            <div className="sidebar" style={this.state.bar?sidebar:sidebar1}>
          <List disablePadding dense>
            <ListItem button>
        <NavLink to='/dashboard/createprofile' style={{fontFamily:"Roboto",fontSize:'17px',fontWeight:'bold'}}> Create Profile</NavLink> 
      
      </ListItem><hr/>
      
      
      {this.state.user==='student'?null:(<div>
        <ListItem button>
      <NavLink to='/dashboard/companyform' style={{fontFamily:"Roboto",fontSize:'17px',fontWeight:'bold'}}> Create Company</NavLink> 
      </ListItem>
      <hr/>
      <ListItem button>
      <NavLink to='/dashboard/createvacancy' style={{fontFamily:"Roboto",fontSize:'17px',fontWeight:'bold'}}> Create Vacancy</NavLink> 
      </ListItem>
      <hr/>
      </div>)}

      {this.state.user==='student'||'company'?'':(<div><ListItem button>
      <NavLink to='/dashboard/createadmin' style={{fontFamily:"Roboto",fontSize:'17px',fontWeight:'bold'}}> Create Admin</NavLink> 
      </ListItem>
      <hr/></div>)}
      
    </List>
    </div>
          
        )
    }
}

export default Sidebar

const sidebar= {
    maxWidth: '240px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    background:'#ecf0f1',
    height: '100vh'
    
  }

  const sidebar1= {
    background: '#34495e',
  height: '100vh',
  width: '250px',
  opacity:'0', 
  positon: 'absolute',
  visibility: 'hidden',
  transition: 'all 0.25s ease',
  transform: 'translateX(-50%)',
    
  }