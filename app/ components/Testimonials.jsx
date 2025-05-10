import React from "react";
import TestimonialCard from "./TestimonialCard";

const copy = [
	{
		name: "Laura H",
		text: "Mint is a game-changer for busy people like me. I’m never going back to a regular car wash again!",
	},
	{
		name: "Nathan C",
		text: "They were extremely professional, showed up right on time, and did an incredibly thorough job. My car looks, feels, and smells like it just came off the showroom floor!",
	},
	{
		name: "James R",
		text: "I didn’t think my car could look brand new again, but they proved me wrong. Super convenient, professional, and the attention to detail was insane. Highly recommend!",
	},
];

const Testimonials = () => {
	return (
		<div
			className="bg-base-200 min-h-[120vh] lg:min-h-[80vh] flex justify-center items-center flex-col"
			style={{
				backgroundImage:
					"radial-gradient(20% 30% at 70% 75%, #4a7e5c30 0%, #4a7e5c15 60%, #161212 100%)",
			}}
		>
			<div className="flex flex-col justify-center items-center">
				<p className="text-gradient font-bold py-1">Testimonials</p>
				<h2 className="text-4xl font-bold py-1">What our Clients Say</h2>
				<p className="py-1">Read User Reviews</p>
			</div>
			<div className="flex flex-col md:flex-row space-x-4 py-10 space-y-4">
				<TestimonialCard text={copy[0].text} name={copy[0].name} />
				<TestimonialCard text={copy[1].text} name={copy[1].name} />
				<TestimonialCard text={copy[2].text} name={copy[2].name} />
			</div>
		</div>
	);
};

export default Testimonials;
