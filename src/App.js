import React from  "react";
import './App.css';
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";
import {BrowserRouter as Router,Switch, Redirect} from "react-router-dom";

import Body from "./Body/Body";

class  App extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			loggedIn:false,
			username:"",
			label_connexion:'Se connecter',
			registration_info:{
				email:'',
				username:'',
				password:'',
				
			},
			login_info:{
				email:'not_yet@gmail.com',
				username:'',
				password:'',
				date:''
			},
			API_URL:"http://localhost:3080",
			
			module_1:[]
		}
	}
	
	//const API_URL="http://localhost:5000/";
	
	load_chapter(id_module){
		fetch(this.state.API_URL+"/chapters",{
			method:"POST",
			body:JSON.stringify({id_module:id_module}),
			headers:{
				'Content-Type':'application/json',
			}
		}).then((res)=>{
			return res.json();
		}).then((chapters)=>{
			this.setState({
				module_1:chapters.chapters
			})
		});
	}
	
	register(){
		//console.log(this.state.registration_info);
		var user=this.state.registration_info;
		console.log(user);
		fetch(this.state.API_URL+"/register",{
			method:"POST",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json',
			},
			body:JSON.stringify(user)
		}).then((res)=>{
			return res.json();
		}).then((result)=>{
			var code=result.code;
			if(code=="OK"){
				alert(result.message);
				var ll=document.getElementById('link_login');
				
				ll.click();
			}else{
				alert(result.message);
			}
		});
		
	}
	registration_handler(event){
		const {name,value,type,checked}=event.target;
		this.setState((prevState)=>{
			return {
				registration_info:{
					...prevState.registration_info,
					[name]:value
				}
			}
		});
	}
	
	login_change_handler(event){
		const {name,value,type,checked}=event.target;
		this.setState((prevState)=>{
			return {
				login_info:{
					...prevState.login_info,
					[name]:value
				}
			}
		});
	}
	
	login(){
		var username=this.state.login_info.username;
		var password=this.state.login_info.password;
		var email=this.state.login_info.email;
		var user={
			username,password,email
		};
		fetch(this.state.API_URL+"/login",{
			method:"POST",
			body:JSON.stringify(user),
			headers:{
				'Content-Type':'application/json'
			}
		}).then((res)=>{
			return res.json();
		}).then((result)=>{
			var code=result.code;
			if(code=="OK"){
				alert(result.message);
				var id_user=result.connected_user[0];
				let username=result.connected_user[1].username;
				let email=result.connected_user[1].email;
				let password=result.connected_user[1].password;
				let date=result.connected_user[1].date;
				
				this.setState({
					login_info:{
						email,
						username,
						password,
						date
					},
					loggedIn:true,
					label_connexion:'Se déconnecter'
				});
				try{
					this.load_chapter(1);
				}catch(err){
					alert("une erreur est survenue lors du chargement des modules");
				}finally{
					document.getElementById('link_module1').click();
				}
				
				
			}else{
				alert(result.message);
			}
		});
	}
	
	logout(){
		this.setState({
			login_info:{
				email:'not_yet@gmail',
				username:'',
				password:'',
				date:''
			},
			loggedIn:false,
			label_connexion:'Se connecter'
		});
	}
	
  render(){
	
  return (
	
	<Router>
    <div className="container">
		 <Menu state={this.state} logout={this.logout.bind(this)}/>
		 <div className="row">
			<div className="col-9">
				<Body 
					btn_register_clicked={this.register.bind(this)}  
					email_reg={this.state.registration_info.email} 
					username_reg={this.state.registration_info.username} 
					password_reg={this.state.registration_info.password} 
					registration_handler={this.registration_handler.bind(this)}
					login_change_handler={this.login_change_handler.bind(this)}
					state={this.state}
					btn_login_handler={this.login.bind(this)}
					
					
					/>
			</div>
			<div className="col-3">
				<Sidebar state={this.state} />
			</div>
		 </div>
		 
		 <Footer state={this.state}/>

		</div>
	
	</Router>
  );
  }
}

export default App;
