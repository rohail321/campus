import React from 'react'
import './List.css'

const List = ({profile}) => {

   let student= profile.map(data=>(
        <div key={data.fullname} className="container">
   

    <div className="name">
        <h3>{data.fullname}</h3>
    </div>
    <div className="name">
        <p>{data.email}</p>
    </div>
    <div className="name">
        <p>{data.contact}</p>
    </div>
    <div className="name">
        <p>{data.gender}</p>
    </div>
    <div className="name">
<p>{data.experince}  as {data.field}</p>
    </div>
    <div className="stats">
        <div className="followers">
            <h3>Cgpa</h3>
<p>{data.cgpa}</p>
        </div>
        <div className="following">
            <h3>Degree</h3>
            <p> {data.degree} </p>
        </div>
        <div className="topics">
            <h3> Major </h3>
            <p>{data.major}</p>
        </div>
        <div className="topics">
            <h3> Semester </h3>
            <p>{data.semester}</p>
        </div><div className="topics">
            <h3> Major </h3>
            <p>{data.dob}</p>
        </div>
     
        

    </div>
    
</div>
    ))
    return (
        <div>{student} </div>
        
    )
}

export default List
