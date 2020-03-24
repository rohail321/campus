import React from 'react'
import './CompanyBanner.css'

function CompanyBanner({profile}) {

    let prf=( <div className="container">
    <div className="container-head">
        <div className="menu">
        
        </div>
    </div>
    

    <div className="name">
        <h3>{profile.companyname}</h3>
    </div>
    <div className="name">
        <p>{profile.ceo}</p>
    </div>
    <div className="name">
        <p>{profile.email}</p>
    </div>
    <div className="name">
        <p>{profile.contact}</p>
    </div>
    
    <div className="stats">
        <div className="followers">
            <h3>Founded</h3>
<p>{profile.founded}</p>
        </div>
        <div className="topics">
            <h3> Number of employes </h3>
            <p>{profile.noe}</p>
        </div>
     
        

    </div>
   
    
    
</div>)
    
       
    
    return (
        <div>
             {prf}
        </div>
    )
}

export default CompanyBanner
