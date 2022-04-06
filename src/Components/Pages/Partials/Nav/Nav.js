import React from "react";
import "./Nav.css";
import vectorImg from '../../../images/Vector.png'
const Nav = () => {
	return (
		<nav className="indigo darken-4">
			<div className="row container">
				<div className="nav-logo col s6">
					<a href="#" className="logo valign-wrapper">
						<img src={vectorImg} alt="logo" />
						SPACE
					</a>
				</div>
				<ul className="hide-on-med-and-down col s6 ">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About us</a>
					</li>
					<li>
						<a href="#">story</a>
					</li>
					<li>
						<a href="#">blog</a>
					</li>
					<li>
						<a className="contact-btns" href="#">
							contact us
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
