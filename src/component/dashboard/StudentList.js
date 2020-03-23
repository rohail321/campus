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
        setTimeout(() => {
            this.setState({spinner:false})
        }, 4000);
        const db=firebase.firestore()
       db.collection('createprofile').get()
       .then(doc=>{
           doc.forEach(res=>{
               this.setState({studentProfile:this.state.studentProfile.concat(res.data())})
           })
       })
    }
    render() {
        let spiner
        let content
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px"}}><img src={Spn}/>
            <h4>Please Wait</h4></div>)

        }
        else{
            content=(<List profile={this.state.studentProfile}/>)
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
