import React from 'react'
import './AdminBanner.css'
function AdminBanner({profile}) {
    return (
        <div>
            <div className="card-box">
  <div className="card card1">
    <div className="card-img"></div>
    <span className="hashtag"></span>
    <p className="profession">{profile.name}</p>
    <p className="profession">{profile.email}</p>
    <p className="profession">{profile.department}</p>

    
  </div>
</div>
        </div>
    )
}

export default AdminBanner
