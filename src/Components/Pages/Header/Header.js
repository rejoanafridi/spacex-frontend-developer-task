import React from "react";
import imgShape from "../../images/3 1.png";
import imgEllipse from "../../images/Ellipse 1.png";
import imgR82 from "../../images/r8 2.svg";

import imgAsste5 from "../../images/Asset 5@2x-8.png";
import imgAsste1 from "../../images/Asset 1@8x-8 1.png";
import imgR81 from "../../images/r8 1.png";
import imgR72 from "../../images/r7 2.png";
import manBg from "../../images/Vector 98.png";
import img21 from "../../images/2 1.png";
import "./Header.css";
const Header = () => {
	return (
		<header className="section-banner indigo darken-4">
			<div className="section no-pad-bot" id="index-banner">
				<div className="row">
					<div className="col s12 m2 l2  ">
						<img
							className="banner-left-img-shape responsive-img"
							src={imgShape}
							alt=""
						/>
						<img
							className="banner-left-img-bolb responsive-img"
							src={imgEllipse}
							alt=""
						/>
					</div>
					<div className="col s12 m4 l4 left-content ">
						<div className="title ">
							<span>
								<img className="responsive-img" src={imgR82} alt="" />{" "}
							</span>
							<span className="span-text">
								<p>Welcome to Stella</p>
							</span>
						</div>
						<div className="content center text-white">
							<h1>
								SPACE FOR <br /> EVERYONE
							</h1>
						</div>

						<p className="text-white left-content-text">
							At PIAP Space, we believe that we can make Space and Earth
							cleaner, engineering, and delivering top-quality robotics
							solutions.
						</p>
						<button className="banner-btns">Get Started</button>
					</div>
					<div className="col s12 m6 l6 ">
						<img
							className="banner-star responsive-img"
							src={imgAsste5}
							alt=""
						/>
						<img className="man" src={imgAsste1} alt="" />
						<img className="man-bg" src={manBg} alt="" />
						<div>
							<div className="banner-image " />
							<img
								className="banner-image-world responsive-img"
								src={imgR72}
								alt=""
							/>
							<img
								className="banner-image-ring responsive-img"
								src={img21}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
