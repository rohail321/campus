import React, { Component } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'
import StudentProfile from '../profile/StudentProfile'
export class Dashboard extends Component {
    render() {
        
        return (
            <div>
                <Navbar/>
                <div style={{display:'flex',flexDirection:'row' }}>
				<div style={{flexGrow:'3'}}>
				<Sidebar />
				</div>
				<div style={{flexGrow:'40'}}>
                   <StudentProfile/>
					</div>
				</div>
                </div>
        )
    }
}

export default Dashboard
