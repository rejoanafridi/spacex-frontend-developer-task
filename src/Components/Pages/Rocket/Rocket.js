import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../Paginations/Pagination";
import "./Rocket.css";
import Rockets from "./Rockets";
const Rocket = () => {
	const [roket, setRoket] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectItems] = useState([8]);
	//select date state

	const [selectDate, setSelectDate] = useState([]);

	// console.log(selectDate);

	// console.log(selectDate);
	// console.log(roket);

	// sett launch state
	const [launch, setLaunch] = useState("");

	// console.log(launch);
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
	// date filter
	useEffect(() => {
		// const selectValue = parseInt(e.target.value);
		const myFunction = async () => {
			// const dateFilter = async (date) => {
			// 	const results = await axios.get(
			// 		`https://api.spacexdata.com/v3/launches`
			// 	);
			// 	// console.log(results.data);

			// 	return results.data;
			// };

			// console.log(dateFilter);
			if (selectDate == 1990 || selectDate == 2021) {
				const result = await axios.get(
					`https://api.spacexdata.com/v3/launches?launch_year=${selectDate}`
				);

				setRoket(result.data);
			} else {
				let result = [];
				const firstYear = selectDate - 4;
				for (let i = firstYear; i <= selectDate; i++) {
					let resultFilterDate = await axios.get(
						`https://api.spacexdata.com/v3/launches?launch_year=${i}`
					);
					// console.log(result.data)
					// console.log(resultFilterDate.data);
					// if (resultFilterDate.data.length === 0) {
					// 	return result;
					// } else {
					result = [...result, ...resultFilterDate.data];
					// }
				}
				// console.log(result);
				setRoket(result);
			}
		};
		myFunction();
	}, [selectDate]);

	return (
		<section className=" indigo darken-4">
			<div className=" container section-padding ">
				<div className="row rocket-section-header">
					<div className="col s12 m6 l6">
						<div className="row">
							<div className="col s12 m6 l6 valign-wrapper">
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
								<div className="line">|</div>
							</div>
						
							<div className="col s12 m6 l6 flex">
								<p>launch Year?</p>
								<div className="col s6">
									<select
										className="browser-default text-white"
										onClick={(e) => setSelectDate(parseInt(e.target.value))}
									>
										<option value="1990">1990</option>
										<option value="1995">1991-1995</option>
										<option value="2000">1996-2000</option>
										<option value="2005">2001-2005</option>
										<option value="2010">2006-2010</option>
										<option value="2015">2011-2015</option>
										<option value="2020">2016-2020</option>

										<option value="2021">2021</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className="col s12 m6 l6 center">
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
				{roket.length === 0 ? (
					<h1 className="text-white center">data not found select another launch year</h1>
				) : (
					currentRockets.map((rockets, index) => (
						<Rockets rockets={rockets} key={index}></Rockets>
					))
				)}
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
