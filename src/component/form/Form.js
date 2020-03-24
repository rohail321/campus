import React from 'react'
import './Form.css'


const Form = ({onChange,onSubmit,state,onRadioChange,success}) => {
    return (
        <div>
            
				
				<form className="contact1-form validate-form" onSubmit={onSubmit}>
                <div class="alert alert-success" style={{visibility:`${success?'visible':'hidden'}`}}>
                    <strong>Success!</strong> Profile Created succesfully.
                </div>
					<span className="contact1-form-title">
						Create Profile
					</span>
	
					<div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" onChange={onChange} value={state.fullname} name="fullname" placeholder="Full name" data-validate = "Full name is required" required/>
                        <input className="input1" type="text" name="email" onChange={onChange} value={state.email} placeholder="email" data-validate = "Email is required" required/>
					</div>
                    <div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="degree" onChange={onChange} value={state.degree} placeholder="Degree" data-validate = "Degree is required" required/>
                        <input className="input1" type="text" name="major"onChange={onChange} value={state.major} data-validate = "Major is required" placeholder="Exmaple CS/SE/BA" required/>
					</div>
                    
                    <div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="semester" onChange={onChange} value={state.semester} data-validate = "Semester is required" placeholder="Semester" required/>
                        <input className="input1" type="text" name="cgpa" onChange={onChange} value={state.cgpa}  data-validate = "Cgpa is required"placeholder="CGPA" required/>
					</div>
                    <div className="wrap-input1 validate-input" data-validate = "Name is required" style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="experince" onChange={onChange} value={state.experince} data-validate = "Experince is required" placeholder="Experince" />
                        <input className="input1" type="text" name="field" onChange={onChange} value={state.field} data-validate = "Field is required" placeholder="Field of experince"/>
					</div>
					<div className="wrap-input1 validate-input" data-validate = "Date of birth is required" style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="dob" onChange={onChange} value={state.dob} placeholder="day/month/year"/>
                        <input className="input1" type="text" name="contact" onChange={onChange} value={state.contact} data-validate = "Experince is required" placeholder="Contact" required/>

					</div>
                    
                    <div class="form-check-inline" >
                        <div style={{marginLeft:'20px'}}>
                        <input type="radio" id="male" value="male" checked={state.gender==='male'} onChange={onRadioChange}  name="male" required />
                    <label htmlFor="male" className="light">Male</label><br/>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <input type="radio" id="female" value="female" checked={state.gender==='female'} onChange={onRadioChange}  name="female" />
                            <label htmlFor="female" className="light">Female</label><br/>
                            </div>
                            </div>
                        
       
					<div className="container-contact1-form-btn">
						<button className="contact1-form-btn">
							<span>
								Create Profile
								<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
							</span>
						</button>
					</div>
				</form>
			</div>
		
    )
}

export default Form
