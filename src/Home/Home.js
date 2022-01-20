import React from "react";
import logo2 from '../logo4.gif';
const home=()=>{
	return(
		<div>
		
		<h2 className="mt-1 mb-3 hlp_color">
			3HLP : Programme de formation intensive des développeurs en 3 mois pour 420 heures de cours
		</h2>
		
		<div className="lead mb-4">
			<img src={logo2} className="logo" />
			<div className="description_3hlp">
			Il s’agit de se former au langage informatique (le « code ») omniprésent dans une société connectée. Plus concrètement, ce type de formation permet notamment de devenir développeur de sites web et/ou d’applications mobiles, intégrateur, référent numérique. On y apprend le développement « front-end » (ce que l’on voit à l’écran), « back-end » (coulisses et fonctionnalités), l’administration de systèmes, la programmation d’objets connectés, la gestion de projet et la conception d’interface.
			</div>
		</div>
		
		<h4 className="text-danger">Module 1: HTML - CSS - Javacript - Firebase</h4>
		<p className="lead mb-4">
			D’une manière générale, s’adapter rapidement aux besoins du marché du travail et répondre aux besoins de développement des start-ups… Pour les candidats à ces formations : trouver un travail, se reconvertir ou encore créer sa propre activité. Dans un souci d’efficacité et de réactivité, les cursus proposés sont relativement courts (de 3 mois) et donc très intensifs.
		</p>
		<h4 className="text-danger">Module 2: Node JS - Firebase - Mongo DB - MYSQL</h4>
		<p className="lead mb-4">We're using built-in elements and text utilities to make this list more legible and understandable. This is a great starting point for a step by step guide within your knowledge base article.</p>
		<h4 className="text-danger">Module 3: React - Node JS</h4>
		<p className="lead mb-5">We've used spacing utilities, text utilities, and other components within this article example. This is just an example layout of a few things you can do within an article page. Thanks for reading!</p>
		<div className="alert alert-primary alert-icon mb-0" role="alert">
			<div className="alert-icon-aside"><i data-feather="alert-triangle"></i></div>
			<div className="alert-icon-content">
				<h5 className="alert-heading">Séminaire de formation en 3HLP</h5>
				If there is something in your article that you really want to emphasize, use the alert component, or our custom icon alert component like this one here!
			</div>
		</div>
		
		
		 <div className="text-center mt-5">
		<h4 className="mb-3 hlp_color">Voulez-vous participer au prochain séminaire ?</h4>
		<div className="mb-3">
			<button className="btn btn-warning mx-2 px-3" role="button">
				<i className="mr-2" data-feather="thumbs-up"></i>
				<b>Oui</b>
			</button>
			
		</div>
		
	</div>
		
		</div>
	);
}

export default home;