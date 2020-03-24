import React from 'react'
import './Form.css'


const CompanyForm = ({onChange,onSubmit,state,success}) => {
	console.log(state)
    return (
        <div>
            
			<div class="alert alert-danger" style={{visibility:`${state.exist?'visible':'hidden'}`}}>
				<p>User profile already exist</p>
				</div>
				<form className="contact1-form validate-form" onSubmit={onSubmit}>
                <div className="alert alert-success" style={{visibility:`${success?'visible':'hidden'}`}}>
                    <strong>Success!</strong> Comapny Profile Created succesfully.
                </div>
					<span className="contact1-form-title">
						Create Company Profile
					</span>
	
					<div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" onChange={onChange} value={state.companyname} name="companyname" placeholder="Company Name" data-validate = "Company name is required" required/>
                        <input className="input1" type="text" name="email" onChange={onChange} value={state.email} placeholder="email" data-validate = "Email is required" required/>
					</div>
                    <div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="address" onChange={onChange} value={state.address} placeholder="Address" data-validate = "Address is required" required/>
                        <input className="input1" type="text" name="contact"onChange={onChange} value={state.contact} data-validate = "contact is required" placeholder="Contact Number" required/>
					</div>
                    
                    <div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="founded" onChange={onChange} value={state.founded} data-validate = "Founded is required" placeholder="Date of foundation" required/>
                        <input className="input1" type="text" name="ceo" onChange={onChange} value={state.ceo}  data-validate = "Ceo is required"placeholder="Ceo" required/>
					</div>
                    <div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="noe" onChange={onChange} value={state.noe} data-validate = "anaumber of employes is required" placeholder="Number of employe" required/>
					</div>
					
                    
					
                  
       
					<div className="container-contact1-form-btn">
						<button className="contact1-form-btn">
							<span>
								Send Email
								<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
							</span>
						</button>
					</div>
				</form>
			</div>
		
    )
}

export default CompanyForm
