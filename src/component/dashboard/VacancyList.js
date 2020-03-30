import React, { Component } from 'react'
import firebase from '../../firebase'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import Vacancylist from '../layout/vacancylist/Vacancylist'
import Spn from '../../assets/91.gif'
export class VacancyList extends Component {
    constructor(props){
        super(props)
        this.state={
            vacancy:[],
            spinner:true,
            user:"",
            id:''

        }
    }

   async componentDidMount(){
        this.currentUser().then((data)=>{
            this.setState({id:data})
            this.vacancyList()
            this.getUser()


        })


    }
    vacancyList=async ()=>{
        const db=await firebase.firestore()
        const doc=await db.collection('createvacancy').get()
        ;(await doc).forEach((res)=>{
         this.setState({vacancy:this.state.vacancy.concat(res.data())})
         this.setState({spinner:false})
        })
        if(this.state.vacancy.length===0){
            alert('No Profile Exist')
            this.setState({spinner:false})

        }
    }
    deleteUser=(e)=>{
        let currentuserid=e.target.id
        let userdelete=this.state.vacancy.filter((res)=>(currentuserid!==res.id))
        this.setState({vacancy:userdelete})
        const db=firebase.firestore()
        let userdb= db.collection("createvacancy").where('id', '==', currentuserid)
        userdb.get().then((res)=>{
            res.forEach((doc)=>{
                doc.ref.delete()
            })
        })

    }
    getUser=async ()=>{
        const db=await firebase.firestore()
        let getDoc=await db.collection('user')
        const doc=await getDoc.where('id', '==', this.state.id).get()
        doc.forEach((res)=>{
            this.setState({user:res.data().user})
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

    render() {
        console.log(this.state)
        let spiner
        let content
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px",width:'200px',height:'40px'}}><img src={Spn} alt='pic' style={{width:'80px'}}/>
            <h4>Please Wait</h4></div>)

        }
        else{
            content=(<Vacancylist vacancy={this.state.vacancy} deleteUser={this.deleteUser} user={this.state.user} />)
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

export default VacancyList
