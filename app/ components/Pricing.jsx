import React from "react";
import PricingCard from "./PricingCard";

const interiorPoints = [
	"Deep vacuuming - Seats, carpets, and floor mats",
	"Wipe-down of all surfaces",
	"Streak-free interior window and mirror cleaning",
];
const exteriorPoints = [
	"Hand wash and dry",
	"Streak-free window cleaning",
	"Tire shine and wheel wipe-down",
	"Spray wax for a glossy finish and paint protection",
];
const interiorAndExteriorPoints = [
	"Everything from Interior Refresh + Exterior Shine",
	"Extra attention to high-touch areas",
];

const Pricing = () => {
	return (
		<div
			className="bg-base-200 min-h-[170vh] lg:min-h-[80vh] flex justify-center items-center flex-col"
			style={{
				backgroundImage:
					"radial-gradient(85% 85% at 0% 100%, #97E1B030 0%, #2ABAA115 60%, #2A283A 100%)",
			}}
		>
			<div className="space-y-2 p-2 text-center">
				<h2 className="text-4xl tracking-wide text-center font-semibold">
					Pricing
				</h2>
				<p className="text-md text-centerkk">
					Pick the{" "}
					<span className="text-accent font-semibold">Perfect Wash</span> for
					your car's needs.
				</p>
			</div>
			<div className="flex md:flex-row flex-col md:space-x-8 space-y-8 md:space-y-0 mt-4">
				<PricingCard points={interiorPoints} name={"Interior Only"} />
				<PricingCard
					points={interiorAndExteriorPoints}
					name={"Interior & Exterior"}
					isPopular={true}
				/>
				<PricingCard points={exteriorPoints} name={"Exterior Only"} />
			</div>
		</div>
	);
};

export default Pricing;
