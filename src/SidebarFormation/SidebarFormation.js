import React from "react";

const sidebar_formation=()=>{
	return(
		<div className="">
            <nav className="sticky-top">
                 <div className="sidebar-item">
                <div className="make-me-sticky">
                  <h3 className="hlp_color">Formation 3HLP</h3>
					<div className="card h-100">
					<div className="card-header bg-transparent">
						<div className="pricing-columns-price display-3">
							$275
						</div>
					</div>
					<div className="card-body p-0">
						<ul className="list-group list-group-flush">
							<li className="list-group-item  hlp_color">
								<i className="text-primary ti-check-box  mr-2" ></i>
								Livre du module 1
							</li>
							<li className="list-group-item hlp_color">
								<i className="text-primary mr-2 ti-check-box  " data-feather="check-circle"></i>
								Livre du module 2
							</li>
							<li className="list-group-item  hlp_color">
								<i className="text-primary mr-2 ti-check-box" data-feather="check-circle"></i>
								Livre du module 3
							</li>
							<li className="list-group-item  hlp_color">
								<i className="text-primary mr-2 ti-check-box" data-feather="check-circle"></i>
								Assistance prĂ©sentiel
							</li>
							<li className="list-group-item  hlp_color">
								<i className="text-primary mr-2 ti-check-box" data-feather="check-circle"></i>
								Assistance en ligne
							</li>
							<li className="list-group-item  hlp_color">
								<i className="text-primary mr-2 ti-check-box" data-feather="check-circle"></i>
								SĂ©minaires gratuits
							</li>
						</ul>
					</div>
					<a className="card-footer d-flex align-items-center justify-content-between text-decoration-none bg-primary-soft" href="#!">
						Commencer la formation
						<i data-feather="arrow-right"></i>
					</a>
				</div>
		
                </div>
              </div>
            </nav>
        </div>
	);
}

export default sidebar_formation;