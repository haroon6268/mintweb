import React from "react";
import Marquee from "react-fast-marquee";
const HomeMarquee = () => {
	return (
		<Marquee autoFill={true} className="py-6">
			<h1 className="mx-2 text-xl text-primary">
				We Use Safe Eco-friendly Products To Protect Both your Car and the
				Environemnt!
			</h1>
			<div className="rounded-full bg-primary w-1 .5 h-1.5" />
			<h1 className="mx-2 text-xl text-primary">Premier Car Washing Service</h1>
			<div className="rounded-full bg-primary w-1.5 h-1.5" />
		</Marquee>
	);
};

export default HomeMarquee;
