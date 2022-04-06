import React from "react";

import Header from "../Header/Header";
import About from "../Partials/About/About";
import Rocket from "../Rocket/Rocket";
import Card from "../Service/Card";

const Home = () => {
	return (
		<div>
			<Header></Header>
			<Card></Card>
			<Rocket></Rocket>
               <About></About>
			
		</div>
	);
};

export default Home;
