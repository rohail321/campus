import React, { Component } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Sidebar from '../layout/sidebar/Sidebar'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Sidebar/>
            </div>
        )
    }
}

export default Dashboard
