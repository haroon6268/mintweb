import React from "react";

const PricingCard = ({ points, name, isPopular }) => {
	return (
		<div className="card md:w-76 lg:w-96 bg-base-100 shadow-sm mt-8">
			<div className="card-body relative">
				{isPopular ? (
					<span className="badge badge-xs badge-secondary">Most Popular</span>
				) : (
					<span className="h-4"></span>
				)}
				<div className="flex justify-between">
					<h2 className="text-2xl font-semibold">{name}</h2>
					<span className="text-xl">$29/mo</span>
				</div>
				<ul className="mt-6 flex flex-col gap-2 text-xs h-26">
					{points.map((x, i) => {
						return (
							<li key={i}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4 me-2 inline-block text-success"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span>{x}</span>
							</li>
						);
					})}
				</ul>
				<div className="mt-6">
					<button className="btn btn-primary btn-block">Book</button>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
