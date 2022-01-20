import React from "react";
import Route from "react-router-dom/Route";
import {Switch} from "react-router-dom";
import SidebarFormation from "../SidebarFormation/SidebarFormation";
import SidebarModule from "../SidebarModule/SidebarModule";
const sidebar=(props)=>{
	return (
		<Switch>
			<Route path="/" exact component={SidebarFormation} />
			<Route path="/contact" component={SidebarFormation} />
			<Route 
				path="/module1" 
				render={
					()=>{
						return <SidebarModule module={1}  state={props.state}/>
					}
					}
				
				/>
				<Route 
				path="/module2" 
				render={
					()=>{
						return <SidebarModule module={2} />
					}
					}
				
				/>
				
				<Route 
				path="/module3" 
				render={
					()=>{
						return <SidebarModule module={3} />
					}
					}
				
				/>
			
		</Switch>
	);
}
export default sidebar;