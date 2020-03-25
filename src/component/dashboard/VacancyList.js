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
            spinner:true

        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({spinner:false})
        }, 5000);

        setTimeout(() => {
            const db=firebase.firestore()
       db.collection('createvacancy').get()
       .then(doc=>{
           doc.forEach(res=>{
               this.setState({vacancy:this.state.vacancy.concat(res.data())})
               
            })
       })
        }, 5000);
        
       
    }

    render() {
        let spiner
        let content
        if(this.state.spinner){
            spiner=(<div  style={{marginLeft:'500px',marginTop:"250px",width:'200px',height:'40px'}}><img src={Spn} style={{width:'80px'}}/>
            <h4>Please Wait</h4></div>)

        }
        else{
            content=(<Vacancylist vacancy={this.state.vacancy}/>)
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
