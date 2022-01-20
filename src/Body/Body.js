import React from "react";
import Route from "react-router-dom/Route";
import {Switch} from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import Module1 from "../Module1/Module1";
import Module2 from "../Module2/Module2";
import Module3 from "../Module3/Module3";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Forget_password from "../Forget_password/Forget_password";
import Profil from "../Profil/Profil";
const body=(props)=>{
	console.log(props);
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/contact" component={Contact} />
			<Route path="/module1" component={Module1}  />
			<Route path="/module2" component={Module2}  />
			<Route path="/module3" component={Module3}  />
			<Route path="/profil" component={Profil}  />
			<Route 
				path="/login" 
				render={
					()=>{
						return <Login 
							state={props.state} 
							login_change_handler={props.login_change_handler} 
							btn_login_handler={props.btn_login_handler}
						/>
					}
				}
			/>
			<Route path="/register" 
			render={()=>{
				
				return <Register 
					click={props.btn_register_clicked} 
					email_reg={props.email_reg}
					registration_handler={props.registration_handler}
					
					
					/>;
			}}
		  />
			<Route path="/forget-password" component={Forget_password}  />
			<Route  component={NotFound} />
		</Switch>
	);
}

export default body;