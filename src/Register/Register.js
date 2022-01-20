import React from "react";
import logo2 from '../logo4.gif';
const register=(props)=>{
	//console.log("props for register",props);
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
								<input type="email" name="email" className="form-control input_user"  placeholder="Votre adresse mail" 
									onChange={props.registration_handler} value={props.email_reg}
								/>
							</div>
							<div className="input-group mb-3">
								<div className="input-group-append">
									<span className="input-group-text"><i className="ti-user"></i></span>
								</div>
								<input type="text" name="username" className="form-control input_user"  placeholder="Votre nom utilisateur" 
									onChange={props.registration_handler} value={props.username_reg}
								/>
							</div>
							<div className="input-group mb-2">
								<div className="input-group-append">
									<span className="input-group-text"><i className="ti-lock"></i></span>
								</div>
								<input type="password" name="password" className="form-control input_pass"  placeholder="Votre mot de passe" 
									onChange={props.registration_handler} value={props.password_reg}
								/>
							</div>
							
								<div className="d-flex justify-content-center mt-3 login_container">
									<button type="button" name="button" className="btn login_btn" onClick={props.click}>S'inscrire</button>
								</div>
						</form>
					</div>
			
					<div className="mt-4">
						<div className="d-flex justify-content-center links">
							Déjà enregistré? <a href="/login" className="ml-2">Se connecter</a>
						</div>
						<div className="d-flex justify-content-center links">
							<a href="/forget-password">Forgot your password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}

export default register;