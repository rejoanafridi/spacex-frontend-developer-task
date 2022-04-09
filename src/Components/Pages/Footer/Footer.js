import React from "react";

import imgVector from "../../images/Vector.png";
const Footer = () => {
	return (
		<footer className="indigo darken-5 ">
			<div className="footer row container">
				<div className="col s3 m4 l4">
					<a href="#" className="logo valign-wrapper">
						<img src={imgVector} alt="" />
						SPACE
					</a>
				</div>
				<div className="col s6 m4 l4">
					<p>Space 2020, All rights reserved.</p>
				</div>
				<div className="col s3 m4 l4 footer-icons">
					<i className="fa-brands fa-twitter"></i>
					<i class="fa-brands fa-facebook-f"></i>
					<i class="fa-brands fa-linkedin-in"></i>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
