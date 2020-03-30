import React from 'react'
import './VacancyList.css'


const Vacancylist = ({vacancy,deleteUser,user}) => {
     let vacancycard=vacancy.map(data=>(
        <section key={data.id} className="blogsection2">

        <div className="blog-card web">
            <a href="#fakeLink">
                <div className="content-mask">
        
                    <h6>{data.title}</h6>
    <p className="blogtext" style={{fontSize:'13px'}} >{data.companyname},{data.address}</p>
    <p className="blogtext">{data.detail}</p>
     <p className="blogtext">Skills: {data.skills}</p>
                    <div className="post-detail">
     <p className="blogtext">experince: {data.experince}</p>
                    </div>
     <p className="blogtext">Work Shift:{data.shift}</p>
                    <p className="blogtext">Send Resume:{data.email}</p>
                    <button type="button" className="btn btn-danger" style={{visibility:`${user==='admin'?'visible':'hidden'}`}} id={data.id} onClick={deleteUser}>Delete</button>



                    
                </div>
                <div className="horizontal">

                </div>
            </a>
        </div></section>
    ))
    return (
        <div>
            {vacancycard}
        </div>
      
    )
}

export default Vacancylist
