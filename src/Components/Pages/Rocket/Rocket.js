import React from "react";
import "./Rocket.css"
const Rocket = () => {
	return (
		<section className=" indigo darken-4">
			<div className="rocket-section-header container red-text ">
				<div className="row">
					<div className="col s6">
						<div className="row">
							<div className="col s6 valign-wrapper">
								<p>is upcomming?</p>
								<div className="col s6">
									<select className="browser-default">
										<option value="1">Yes</option>
										<option value="2">No</option>
									</select>
								</div>
							</div>
							<div className="col s6 flex">
								<p>launch Year?</p>
								<div className="col s6">
									<select className="browser-default text-white">
										<option value="1">2005-2006</option>
										<option value="2">No</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className="col s6 center">
						<div className="search flex">
							<input type="" placeholder="search..." />
							<button>Search</button>
						</div>
					</div>
				</div>
			</div>

			<div className="row container rocket-section-card">
				<div className="col s12 m4 l3">
					<div className="card rocket-card-content">
						<div className="card-content white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 l3">
					<div className="card rocket-card-content">
						<div className="card-content white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 l3">
					<div className="card rocket-card-content">
						<div className="card-content white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 l3">
					<div className="card rocket-card-content">
						<div className="card-content white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 l3">
					<div className="card rocket-card-content">
						<div className="card-content white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 l3">
					<div className="card rocket-card-content">
						<div className="card-content white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 l3">
					<div className="card rocket-card-content">
						<div className="card-content white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 l3">
					<div className="card rocket-card-content">
						<div className="card-content white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="rocket-pagination center">
				<ul className="pagination">
					<li className="active">
						<a href="#!">1</a>
					</li>
					<li className="waves-effect">
						<a href="#!">2</a>
					</li>
					<li className="waves-effect">
						<a href="#!">3</a>
					</li>
					<li className="waves-effect">
						<a href="#!">.</a>
					</li>
					<li className="waves-effect">
						<a href="#!">.</a>
					</li>
					<li className="waves-effect">
						<a href="#!">.</a>
					</li>
					<li className="waves-effect">
						<a href="#!">10</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Rocket;
