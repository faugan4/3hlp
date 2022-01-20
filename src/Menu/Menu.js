import React from "react";
import {NavLink,Link} from "react-router-dom";



const menu=(props)=>{
	
	return(
		
		<nav className="navbar navbar-expand shadow navbar-light bg-white fixed-top">
			<div className="container">
		 
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
			  <li className="nav-item active">
				<NavLink to="/" activeStyle={{color:"green"}}><span className="nav-link" href="#">3HLP <span className="sr-only">(current)</span></span></NavLink>
			  </li>
			 
			  <li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  Modules
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
				  <Link to="/module1" id='link_module1'><span className="dropdown-item" href="#">Modules 1</span></Link>
				  <Link to="/module2"><span className="dropdown-item" href="#">Modules 2</span></Link>
				 <Link to="/module3" > <span className="dropdown-item" href="#">Modules 3</span></Link>
				  <div className="dropdown-divider"></div>
				   <Link to="/login" id='link_login' onClick={props.logout}> <span className="dropdown-item" href="#">{props.state.label_connexion}</span></Link>
				  
				</div>
			  </li>
			   <li className="nav-item">
				<NavLink to="/contact" activeStyle={{color:"green"}}><span className="nav-link" href="#">Contacts</span></NavLink>
			  </li>
			  
			   <li className="nav-item">
				<NavLink to="/profil" activeStyle={{color:"green"}}><span className="nav-link" href="#">{props.state.login_info.username}</span></NavLink>
			  </li>
			  
			</ul>
			<form className="form-inline my-2 my-lg-0">
				
				<code>
					<span className="hlp_color">const threeMonths=()=>return HLP;</span>
				</code>
			  
			</form>
		  </div>
		  </div>
		 
		  
		  
		</nav>
	);
}

export default menu;