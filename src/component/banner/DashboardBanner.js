import React from 'react'
import './DashboardBanner.css'
import {NavLink} from 'react-router-dom'

const DashboardBanner = () => {
    return (
        <div className="container ">
        <div className="card">
          <div className="row ">
      
            <div className="col-md-12 ">
              <div className="card-block ">
                <h4 className="card-title">Welcome! </h4>
                <p className="card-text">
                  Hi!  
                </p>
                <p>WELCOME NEW USER PLEASE CREATE YOUR PROFILE WHICH CAN BE SEEN BY COMPANY WHO ARE RECURTING.CLICK BUTTON IN ORDER CREATE FILE</p>
                <br/>
              </div>
            </div>
          
          </div>
        </div>
      
      </div>
      
    )
}

export default DashboardBanner
