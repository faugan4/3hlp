import react from "react";

const SidebarModule=(props)=>{
	
	return(
		<div className="">
            <nav className="sticky-top">
                 <div className="sidebar-item">
                <div className="make-me-sticky">
                  <h3 className="hlp_color"></h3>
					<div className="card h-100">
					
					
					<div className="card-body p-0">
						<ul className="list-group list-group-flush">
						{
								props.state.module_1.map((el,i)=>{
									return(
										<li className="list-group-item  hlp_color" key={el.id}>
											<i className="text-primary ti-check-box  mr-2" ></i>
											{el.chapter}
										</li>
									);
								})
						}	
							
							
						</ul>
					</div>
					
				</div>
		
                </div>
              </div>
            </nav>
        </div>
	);
}

export default SidebarModule;