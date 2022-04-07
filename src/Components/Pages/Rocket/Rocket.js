import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Paginations/Pagination";
import "./Rocket.css";
import Rockets from "./Rockets";
const Rocket = () => {
	const [roket, setRoket] = useState([]);
	const [maindata, setMainData] = useState([]);
	// const [loading, setLoading] = useState([false]);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectItems] = useState([8]);

	// search by name

	const [value, setValue] = useState("");
	const onChange = (q) => {
		// q.capitalize();
		
		setValue(q);
	};
	
	// console.log(value);
	useEffect(() => {
		const searchByName = async () => {
		
			const result = await axios(
				`https://api.spacexdata.com/v3/launches?rocket_name=${value}`
			);
			
			setRoket(result.data);
		};
		searchByName();
	}, [value]);

	// let searchResult = await roket.filter((item) =>
	// 	item.rocket.rocket_name.toLowerCase().includes(search.toLowerCase())
	// );
	// setRoket(searchResult);

	

	//paginate change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchData = async () => {
			// setLoading(true);
			const res = await axios.get("https://api.spacexdata.com/v3/launches");
			setRoket(res.data);
			// setMainData(res.data);
			// setLoading(false);
		};
		fetchData();
		// console.log(roket);
	}, []);

	// get current data
	const indexOfLastRocket = currentPage * selectItems;
	const indexOfFirstRocket = indexOfLastRocket - selectItems;
	const currentRockets = roket.slice(indexOfFirstRocket, indexOfLastRocket);
	// console.log(currentRockets);
	return (
		<section className=" indigo darken-4">
			<div className="rocket-section-header container red-text ">
				<div className="row">
					<div className="col s6">
						<div className="row">
							<div className="col s6 valign-wrapper">
								<p>Is upcomming?</p>
								<div className="col s6">
									<select className="browser-default">
										<option value="1">Yes</option>
										<option value="2">No</option>
									</select>
								</div>
							</div>
							<div className="col s6 flex">
								<p>launch Year?</p>
								<div className="col s6">
									<select className="browser-default text-white">
										<option value="1">2005-2006</option>
										<option value="2">2007-2008</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className="col s6 center">
						<div className="search flex">
							<input
								type=""
								value={value}
								onChange={(e) => onChange(e.target.value)}
								placeholder="search by name"
							/>
							<button>Search</button>
						</div>
					</div>
				</div>
			</div>

			<div className="row container rocket-section-card">
				{currentRockets.map((rockets, index) => (
					<Rockets rockets={rockets} key={index}></Rockets>
				))}
			</div>
			<Pagination
				selectItems={selectItems}
				totalItems={roket.length}
				paginate={paginate}
			></Pagination>
		</section>
	);
};

export default Rocket;
