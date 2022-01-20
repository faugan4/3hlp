var express=require("express");
var cors=require("cors");
var firebase=require("firebase");

var app=express();

app.use(cors());
app.use(express.json());


const firebaseConfig = {
  apiKey: "AIzaSyA1Rb-pH9y1wKYN7uXvm0AoAHoebFVht0M",
  authDomain: "hlp-a9cc9.firebaseapp.com",
  projectId: "hlp-a9cc9",
  storageBucket: "hlp-a9cc9.appspot.com",
  messagingSenderId: "534337879796",
  appId: "1:534337879796:web:f816082a297bafbc2b68a1"
};

firebase.initializeApp(firebaseConfig);
//console.log(firebase);
/*
var ref=firebase.database().ref("module1");
ref.push({
	chapitre:'Les annexes'
});*/

function is_valide_user(user){
	return  user.email && user.email.toString().trim()!="" &&
			user.username && user.username.toString().trim()!="" &&
			user.password && user.password.toString().trim()!="";
	
}
app.get("/",(req,res)=>{
	res.json({message:"welcome to 3hlp"});
});

app.post("/register",(req,res)=>{
	
	if(is_valide_user(req.body)){
		var user={
			email:req.body.email,
			username:req.body.username,
			password:req.body.password,
			date:(new Date()).toLocaleString()
		};
		var ref=firebase.database().ref("users");
		ref.push(user).then((r)=>{
			res.json({
				message:"Enregistrement bien effectué",
				code:"OK"
			});
		}).catch((err)=>{
			res.json({
				message:"Une erreur est survenue",
				code:"KO"
			});
		});
	}else{
		res.status(442);
		res.json({
			message:"Certains champs sont vides",
			code:"KO"
		});
	}
	
});
	
	
app.post("/login",(req,res)=>{
	
	
	if(is_valide_user(req.body)){
		
		var ref=firebase.database().ref("users");
		//ref.orderByChild("username").equalTo(req.body.username);
		var find=false;
		var connected_user=null;
		ref.once("value",(user_info)=>{
			user_info.forEach((line)=>{
				var key=line.key;
				var info=line.val();
				var un=info.username;
				var pw=info.password;
				console.log(un, pw);
				if(req.body.username==un && req.body.password==pw){
					connected_user=[key,info];
					find=true;
					//break;
				}
			});
			
			if(find){
			res.json({
				message:"Vous  êtes bien connecté",
				code:"OK",
				connected_user
			});
			}else{
				res.json({
					message:"Vos informations de connexion sont erronées",
					code:"KO"
				});
			}
		});
		
		
	}else{
		res.status(442);
		res.json({
			message:"Certains champs sont vides",
			code:"KO"
		});
	}
	
});
	
app.post("/chapters",(req,res)=>{
	var id_module=req.body.id_module;
	let ref=firebase.database().ref("module1");
	
	ref.once("value",(result)=>{
		let chapters=[];
		result.forEach((line)=>{
			let el=line.val();
			let key=line.key;
			console.log(el)
			chapters.push({id:key,chapter:el.chapitre})
		});
		
		res.json({
			chapters:chapters
		})
	});
	
});
	
app.listen(3080,()=>{
	console.log("listen on http://localhost:3080");
});