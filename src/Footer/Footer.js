import React from "react";

const footer=(props)=>{
	return(
		 <footer className="bg-light  text-lg-start">
		 
 
		  <div className="container p-4">
		   
			<div className="row">
			 
			  <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
				<h5 className="text-uppercase hlp_color">contacts</h5>

				<p>
				JKEP Consulting Rue la PamPa Adidogomé Face Ecole Prince Bedy Et MIDEC<br />
				Email :contact@3hlp.com<br />
				Phone (+228) 92 22 06 09 / 90 04 07 15<br />
				
				</p>
			  </div>
			  
			  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
				<h5 className="text-uppercase hlp_color">reseaus sociaux</h5>

				<ul className="list-unstyled mb-0">
				  <li>
					<a href="#!" className="text-dark">Facebook</a>
				  </li>
				  <li>
					<a href="#!" className="text-dark">Youtube</a>
				  </li>
				  <li>
					<a href="#!" className="text-dark">Skype</a>
				  </li>
				 
				</ul>
			  </div>
			  

			  
			  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
				<h5 className="text-uppercase mb-0 hlp_color">Liens utiles</h5>

				<ul className="list-unstyled">
				  <li>
					<a href="#!" className="text-dark">Boutique Amazone de 3HLP</a>
				  </li>
				  <li>
					<a href="#!" className="text-dark">Code source dans 3HLP module 1</a>
				  </li>
				  <li>
					<a href="#!" className="text-dark">Code source dans 3HLP module 2</a>
				  </li>
				  <li>
					<a href="#!" className="text-dark">Code source dans 3HLP module 3</a>
				  </li>
				</ul>
			  </div>
			  
			</div>
			
		  </div>
		  
		  <div className="text-center p-3">
			© 2021 Copyright: 
			<a className="hlp_color" href="jkepconsulting.com">JKEP Consulting SARL.</a>
		  </div>
		  </footer>
	);
}

export default footer;