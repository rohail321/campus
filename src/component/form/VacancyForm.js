import React from 'react'
import './Form.css'


const VacancyForm = ({onChange,onSubmit,state,success}) => {
    return (
        <div>
            
				
				<form className="contact1-form validate-form" onSubmit={onSubmit}>
                <div className="alert alert-success" style={{visibility:`${success?'visible':'hidden'}`}}>
                    <strong>Success!</strong> Vacancy Created succesfully.
                </div>
					<span className="contact1-form-title">
						Create Vacancy
					</span>
	
					<div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" onChange={onChange} value={state.title} name="title" placeholder="Job Title" data-validate = "Job Title is required" required/>
                        <input className="input1" type="text" name="companyname" onChange={onChange} value={state.companyname} placeholder="Company Name" data-validate = "Company Name is required" required/>
					</div>
                    <div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="email" onChange={onChange} value={state.email} placeholder="Email" data-validate = "Email is required" required/>
                        <input className="input1" type="text" name="shift" onChange={onChange} value={state.shift} data-validate = "Shift is required" placeholder="Job Shift eg afternoon"/>
					</div>
                    
                    <div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="address" onChange={onChange} value={state.address} data-validate = "Address is required" placeholder="Address" required/>
						<input className="input1" type="text" name="experince" onChange={onChange} value={state.experince} data-validate = "Experince is required" placeholder="Experince" />
					</div>
                    <div className="wrap-input1 validate-input" data-validate = "Name is required" style={{display:'flex',FlexDirection:'row'}}>
                    <input className="input1" type="text" name="skills"onChange={onChange} value={state.skills} data-validate = "Skills is required" placeholder="Skills " required/>
					</div>
					<div className="wrap-input1 validate-input" data-validate = "Date of birth is required" style={{display:'flex',FlexDirection:'row'}}>
						<textarea className="input1" type="text" name="detail" onChange={onChange} row='4' columns='4' value={state.detail} placeholder="Job Summary"/>
                        

					</div>
                    
                   
                        
       
					<div className="container-contact1-form-btn">
						<button className="contact1-form-btn">
							<span>
								Create Vaccancy
								<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
							</span>
						</button>
					</div>
				</form>
			</div>
		
    )
}

export default VacancyForm
