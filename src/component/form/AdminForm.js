import React from 'react'
import './Form.css'


const AdminForm = ({onChange,onSubmit,state,success}) => {
	console.log(state)
    return (
        <div>
            
			<div class="alert alert-danger" style={{visibility:`${state.exist?'visible':'hidden'}`}}>
				<p>Admin profile already exist</p>
				</div>
				<form className="contact1-form validate-form" onSubmit={onSubmit}>
                <div className="alert alert-success" style={{visibility:`${success?'visible':'hidden'}`}}>
                    <strong>Success!</strong> Comapny Profile Created succesfully.
                </div>
					<span className="contact1-form-title">
						Create Admin Profile
					</span>
	
					<div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" onChange={onChange} value={state.name} name="name" placeholder="Name" data-validate = "Name is required" required/>
                        <input className="input1" type="text" name="email" onChange={onChange} value={state.email} placeholder="email" data-validate = "Email is required" required/>
					</div>
                    <div className="wrap-input1 validate-input"  style={{display:'flex',FlexDirection:'row'}}>
						<input className="input1" type="text" name="department" onChange={onChange} value={state.department} placeholder="Department" data-validate = "Department is required" required/>
					</div>
                    
					
                    
					
                  
       
					<div className="container-contact1-form-btn">
						<button className="contact1-form-btn">
							<span>
								Create Admin Profile
								<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
							</span>
						</button>
					</div>
				</form>
			</div>
		
    )
}

export default AdminForm
