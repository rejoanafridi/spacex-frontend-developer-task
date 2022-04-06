import React from "react";
import imgVector from "../../images/Vector.png"
const Footer = () => {
	return (
		<footer className="indigo darken-5 ">
			<div className="footer row container">
				<div className="col s12 m3 l3">
					<a href="#" className="logo valign-wrapper">
						<img src={imgVector} alt="" />
						SPACE
					</a>
				</div>
				<div className="col s12 m3 l3">
					<p>space all right reserved 2022</p>
				</div>
				<div className="col s1 m3 l3 footer-icons">
					<i className="fa-brands fa-twitter"></i>
					<i className="fa-brands fa-facebook"></i>
					<i className="fa-brands fa-linkedin"></i>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
