import React from "react";
import './Card.css'
const Card = () => {
	return (
		<section className=" indigo darken-5">
			<div className="row card-section container pd ">
				<h1 className="center text-white">Discover Universe</h1>

				<div className="col s12 m4 ">
					<div className="card cards-content">
						<div className="card-content  white-text">
							<span className="card-title">Card Title</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4">
					<div className="card cards-content">
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
				<div className="col s12 m4">
					<div className="card cards-content">
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
		</section>
	);
};

export default Card;
