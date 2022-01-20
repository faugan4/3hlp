import React from "react";
import logo2 from '../logo4.gif';

const forget_password=(props)=>{
	return(
		
		<div className="container h-100 mt-5 mb-5">
			<div className="d-flex justify-content-center h-100">
				<div className="user_card mt-4">
					<div className="d-flex justify-content-center">
						<div className="brand_logo_container">
							<img src={logo2} className="brand_logo" alt="Logo" />
						</div>
					</div>
					<div className="d-flex justify-content-center form_container">
						<form>
							<div className="input-group mb-3">
								<div className="input-group-append">
									<span className="input-group-text"><i className="ti-user"></i></span>
								</div>
								<input type="email" name="" className="form-control input_user" value="" placeholder="Entrez votre adresse mail" />
							</div>
							
							<div className="d-flex justify-content-center mt-3 login_container">
						<button type="button" name="button" className="btn login_btn">Recuperez votre mot de passe</button>
					   </div>
						</form>
					</div>
			
				
				</div>
			</div>
		</div>
		
	);
}

export default forget_password;