import React from "react";

const TestimonialCard = ({ name, text }) => {
	return (
		<div className="card w-96 md:w-66 lg:w-96 bg-base-100 card-lg shadow-sm">
			<div className="card-body">
				<div className="flex border-spacing-1">
					<img src="/star.svg" className="h-5 w-5"></img>
					<img src="/star.svg" className="h-5 w-5"></img>
					<img src="/star.svg" className="h-5 w-5"></img>
					<img src="/star.svg" className="h-5 w-5"></img>
					<img src="/star.svg" className="h-5 w-5"></img>
				</div>

				<h2 className="card-title">{name}</h2>
				<p>"{text}"</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
