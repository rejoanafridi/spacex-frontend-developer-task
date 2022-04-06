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
				<Routes>
					<Route path="/" element={<Nav></Nav>}>
						{" "}
					</Route>
					<Route path="home" element={<Home></Home>}>
						{" "}
					</Route>
					<Route path="about" element={<About></About>}>
						{" "}
					</Route>
					<Route path="blog" element={""}>
						{" "}
					</Route>
					<Route path="story" element={""}>
						{" "}
					</Route>
				</Routes>
          <Home></Home>
          <Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
