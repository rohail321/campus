import React from 'react'
import './CompayList.css'


const CompanyList = ({company,user,deleteuser,}) => {
     let companycard=company.map(data=>(
        <section key={data.id} className="blogsection2">

        <div className="blog-card web">
                <div className="content-mask">
        
                    <h6>{data.companyname}</h6>
    <p className="blogtext" style={{fontSize:'13px'}} >,{data.address}</p>
     <p className="blogtext">Ceo: {data.ceo}</p>
                    <div className="post-detail">
     <p className="blogtext">Numberof employes: {data.noe}</p>
                    </div>
     <p className="blogtext">Contact No:{data.contact}</p>
                    <p className="blogtext">Email :{data.email}</p>
                    <button type="button" className="btn btn-danger"style={{visibility:`${user==='admin'?'visible':'hidden'}`}} id={data.id} onClick={deleteuser} >Delete</button>



                    
                </div>
              
        </div></section>
    ))
    return (
        <div>
            {companycard}
        </div>
      
    )
}

export default CompanyList
