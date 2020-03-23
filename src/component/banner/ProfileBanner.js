import React from 'react'
import './ProfileBanner.css'
import firebase from '../../firebase'

function ProfileBanner({profile}) {

    let prf=( <div className="container">
    <div className="container-head">
        <div className="menu">
        
        </div>
    </div>

    <div className="name">
        <h3>{profile.fullname}</h3>
    </div>
    <div className="name">
        <p>{profile.email}</p>
    </div>
    <div className="name">
        <p>{profile.contact}</p>
    </div>
    <div className="name">
        <p>{profile.gender}</p>
    </div>
    <div className="name">
<p>{profile.experince}  as {profile.field}</p>
    </div>
    <div className="stats">
        <div className="followers">
            <h3>Cgpa</h3>
<p>{profile.cgpa}</p>
        </div>
        <div className="following">
            <h3>Degree</h3>
            <p> {profile.degree} </p>
        </div>
        <div className="topics">
            <h3> Major </h3>
            <p>{profile.major}</p>
        </div>
        <div className="topics">
            <h3> Semester </h3>
            <p>{profile.semester}</p>
        </div><div className="topics">
            <h3> Major </h3>
            <p>{profile.dob}</p>
        </div>
     
        

    </div>
    
</div>)
    
       
    
    return (
        <div>
             {prf}
        </div>
    )
}

export default ProfileBanner
