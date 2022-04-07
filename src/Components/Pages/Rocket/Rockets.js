import React from "react";

const Rockets = ({ rockets }) => {
	const { links, mission_name, rocket, upcoming, launch_year } = rockets;
	// console.log(rockets);
	return (
		<div className="col s12 m4 l3">
			<div className="card rocket-card-content">
				<div className="card-content white-text">
					<img
						className="responsive-img"
						src={links.mission_patch}
						alt="rocket"
					/>
					<span>{mission_name}</span>
					<p>Rocket name: {rocket.rocket_name}</p>
					<p>Launch Year: {launch_year ? launch_year : "none"}</p>
					<p>Upcomming: {upcoming ? "true" : "false"}</p>
				</div>
			</div>
		</div>
	);
};

export default Rockets;
