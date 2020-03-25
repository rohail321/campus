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
            spinner:true

        }
    }
     componentDidMount(){
        
       
        const db=firebase.firestore()
       db.collection('createprofile').get()
       .then(doc=>{
           doc.forEach(res=>{
               this.setState({studentProfile:this.state.studentProfile.concat(res.data())})
               this.setState({spinner:false})

           })
       })
    }

    deleteUser=(e)=>{
        let currentuserid=e.target.id
        console.log(currentuserid)
        console.log(this.state.id)
        let userdelete=this.state.companyprofile.filter((res)=>(currentuserid!==res.id))
        this.setState({studentProfile:userdelete})
        const db=firebase.firestore()
        let userdb= db.collection("createprofile").where('id', '==', currentuserid)
        userdb.get().then((res)=>{
            res.forEach((doc)=>{
                doc.ref.delete()
            })
        })
        console.log(userdelete)

    }
    render() {
        let spiner
        let content
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px"}}><img src={Spn} style={{width:'80px'}} />
            <h4>Please Wait</h4></div>)

        }
        else{
            content=(<List user={this.state.studentProfile} deleteUser={this.deleteUser} />)
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
