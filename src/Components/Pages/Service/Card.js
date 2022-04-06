import React, { useEffect, useState } from "react";

import "./Card.css";
import rocketImg from "../../images/j@2x.png"
const Card = () => {

	return (
		<section className=" indigo darken-5">
			<div className="row card-section container pd ">
				<h1 className="center text-white">Discover Universe</h1>

		
				<div className="col s12 m4 ">
					<div className="card cards-content">
						<div className="card-content  white-text">
							<img
								className="responsive-img"
								src={rocketImg}
								alt="image"
							/>
							<span className="card-title">Mission Bongo</span>
							<p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 ">
					<div className="card cards-content">
						<div className="card-content  white-text">
							<img
								className="responsive-img"
								src={rocketImg}
								alt="image"
							/>
							<span className="card-title">Mission Bongo</span>
							<p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
						</div>
					</div>
				</div>
				<div className="col s12 m4 ">
					<div className="card cards-content">
						<div className="card-content  white-text">
							<img
								className="responsive-img"
								src={rocketImg}
								alt="image"
							/>
							<span className="card-title">Mission Bongo</span>
							<p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Card;
