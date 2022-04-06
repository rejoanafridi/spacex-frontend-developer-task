import React from "react";
import "./Pagination.css";
const Pagination = ({ selectItems, totalItems,paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalItems / selectItems); i++) {
		pageNumbers.push(i);
	}
	console.log(pageNumbers);
	return (
		<div className="rocket-pagination center">
			{pageNumbers.map((number) => (
				<ul className="pagination">
					<li key={number} className="waves-effect">
						<a onClick={() => paginate(number)} href="#!">{number}</a>
					</li>
				</ul>
			))}
		</div>
	);
};

export default Pagination;
