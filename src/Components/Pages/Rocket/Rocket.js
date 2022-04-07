import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Paginations/Pagination";
import "./Rocket.css";
import Rockets from "./Rockets";
const Rocket = () => {
	const [roket, setRoket] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectItems] = useState([8]);
	//select date state
	const [selectDate, setSelectDate] = useState([]);
	console.log(selectDate);
	// sett launch state
	const [launch, setLaunch] = useState("");
	console.log(launch);
	// upcoming filter
	useEffect(() => {
		const launchFilter = async () => {
			const results = await axios(
				`https://api.spacexdata.com/v3/launches/${launch}`
			);
			setRoket(results.data);
		};
		launchFilter();
	}, [launch]);

	// search by name

	const [value, setValue] = useState("");
	const onChange = (q) => {
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

	//

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
								<div
									className="col s6"
									onChange={(e) => {
										const upcoming = e.target.value;
										setLaunch(upcoming);
									}}
								>
									<select className="browser-default">
										<option value=".">No</option>
										<option value="upcoming">Yes</option>
									</select>
								</div>
							</div>
							<div className="col s6 flex">
								<p>launch Year?</p>
								<div className="col s6">
									<select
										className="browser-default text-white"
										onChange={(e) => {
											const selectYear = e.target.value;
											setSelectDate(selectYear);
										}}
									>
										<option value="1">1990</option>
										<option value="2">1991-1995</option>
										<option value="3">1996-2000</option>
										<option value="4">2001-2005</option>
										<option value="5">2006-2010</option>
										<option value="6">2011-2015</option>
										<option value="7">2011-2015</option>
										<option value="8">2016-2020</option>
										<option value="9">2021</option>
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
