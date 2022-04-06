import "./App.css";

import About from "./Components/Pages/Partials/About/About";
import Nav from "./Components/Pages/Partials/Nav/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Pages/Footer/Footer";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav></Nav>
				<Home></Home>
				<Footer></Footer>
				<Routes>
					<Route path="/" element={""}>
						{" "}
					</Route>
					<Route path="home" element={""}>
						{" "}
					</Route>
					<Route path="about" element={""}>
						{" "}
					</Route>
					<Route path="blog" element={""}>
						{" "}
					</Route>
					<Route path="story" element={""}>
						{" "}
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
