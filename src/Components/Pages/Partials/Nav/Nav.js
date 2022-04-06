import React from "react";
import "./Nav.css";
import vectorImg from '../../../images/Vector.png'
import { Link } from "react-router-dom";
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
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/about">About us</Link>
					</li>
					<li>
						<Link to="/story">story</Link>
					</li>
					<li>
						<Link to="/blog">blog</Link>
					</li>
					<li>
						<Link className="contact-btns" to="/contact">
							contact us
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
