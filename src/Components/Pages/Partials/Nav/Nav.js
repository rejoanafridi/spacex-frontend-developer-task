import React from "react";
import "./Nav.css";
import vectorImg from "../../../images/Vector.png";
import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className=" z-depth-0">
			<div className="row container">
				<div className="nav-logo col s9 m6 l6">
					<Link to="/" className="logo valign-wrapper">
						<img src={vectorImg} alt="logo" />
						SPACE
					</Link>
				</div>
				<ul className="hide-on-small-and-down col s6 m6 l6 ">
					<li>
						<Link className="nav-active" to="/home">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about">About us</Link>
					</li>
					<li>
						<Link to="/story">Story</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link className="contact-btns" to="/contact">
							Contact Us
						</Link>
					</li>
				</ul>

				<a
					href="#"
					data-target="mobile-demo"
					className="sidenav-trigger hide-on-med-and-down"
				>
					<i className="material-icons">menu</i>
				</a>
				<ul className="sidenav" id="mobile-demo">
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
