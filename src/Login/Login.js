import React from "react";
import logo2 from '../logo4.gif';

const login=(props)=>{
	//console.log(props, "from login");
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
								<input type="text" name="username" value={props.state.login_info.username} 
									onChange={props.login_change_handler}
								className="form-control input_user"  placeholder="username" />
							</div>
							<div className="input-group mb-2">
								<div className="input-group-append">
									<span className="input-group-text"><i className="ti-lock"></i></span>
								</div>
								<input type="password" name="password" 
								onChange={props.login_change_handler}
								value={props.state.login_info.password}
								className="form-control input_pass"  placeholder="password" />
							</div>
							<div className="form-group">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="customControlInline" />
									<label className="custom-control-label" for="customControlInline">Se rappelez de moi</label>
								</div>
							</div>
								<div className="d-flex justify-content-center mt-3 login_container">
						<button type="button" name="button" className="btn login_btn" onClick={props.btn_login_handler}>Se connecter</button>
					   </div>
						</form>
					</div>
			
					<div className="mt-4">
						<div className="d-flex justify-content-center links">
							Vous n'avez pas de compte? <a href="/register" className="ml-2">S'inscrire</a>
						</div>
						<div className="d-flex justify-content-center links">
							<a href="/forget-password">Mot de passe oubliĂ© ?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}

export default login;