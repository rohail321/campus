import React, { Component } from 'react'
import firebase from '../../firebase'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import List from '../layout/studentlist/List'
import Spn from '../../assets/91.gif'

export class StudentList extends Component {
    constructor(props){
        super(props)
        this.state={
            studentProfile:[],
            spinner:true,
            id:'',
            user:''

        }
    }
     componentDidMount(){
        this.currentUser().then((data)=>{
            this.setState({id:data})
            this.getUser()
            this.profileList()
        })
       
       
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
        })}

        getUser=async ()=>{
            const db=await firebase.firestore()
            let getDoc=await db.collection('user')
            const doc=await getDoc.where('id', '==', this.state.id).get()
            doc.forEach((res)=>{
                this.setState({user:res.data().user})
            })
        }

        profileList=async ()=>{
            const db=await firebase.firestore()
            const doc=await db.collection('createprofile').get()
            ;(await doc).forEach((res)=>{
                this.setState({studentProfile:this.state.studentProfile.concat(res.data())})
                    this.setState({spinner:false})
            })
            if(this.state.studentProfile.length===0){
                alert('No Profile Exist')
                this.setState({spinner:false})

            }
            
        }

    deleteUser=(e)=>{
        let currentuserid=e.target.id
        let userdelete=this.state.studentProfile.filter((res)=>(currentuserid!==res.id))
        this.setState({studentProfile:userdelete})
        const db=firebase.firestore()
        let userdb= db.collection("createprofile").where('id', '==', currentuserid)
        userdb.get().then((res)=>{
            res.forEach((doc)=>{
                doc.ref.delete()
            })
        })
        
    }
    render() {
        let spiner
        let content
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px"}}><img src={Spn} style={{width:'80px'}} />
            <h4>Please Wait</h4></div>)

        }
        else{
            content=(<List profile={this.state.studentProfile} deleteUser={this.deleteUser} user={this.state.user}/>)
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

export default StudentList
