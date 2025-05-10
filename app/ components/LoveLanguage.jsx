import React from "react";

const LoveLanguage = () => {
	return (
		<div className="flex flex-col min-h-[60vh] lg:min-h-[50vh] bg-primary text-base-200 justify-center">
			<div className=" md:ml-20 p-5">
				<h2 className="md:text-5xl text-4xl  font-bold md:max-w-[70%]">
					For Mint, Car Washing is our{" "}
					<span className="text-gradient">
						<p style={{ transform: "skew(14deg)", transform: "rotate(3deg)" }}>
							Love Language
						</p>
					</span>
				</h2>
			</div>
			<div className="md:mr-20 p-5 lg:flex items-end justify-end">
				<p className="md:max-w-[70%] text-lg">
					At Mint, we don’t just clean cars — we treat them like they’re part of
					the family. Every wash is a carefully crafted experience, blending
					premium products with obsessive attention to detail. Whether it’s a
					quick refresh or a deep clean, your car leaves sparkling — and your
					day a little brighter. Because for us, love looks like a spotless
					shine and that new-car feeling.
				</p>
			</div>
		</div>
	);
};

export default LoveLanguage;
