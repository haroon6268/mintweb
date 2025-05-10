"use client";
import React from "react";
import HomeMarquee from "./HomeMarquee";
import { useEffect } from "react";
import {
	animate,
	motion,
	useMotionTemplate,
	useMotionValue,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const COLORS = ["#97E1B0", "#2ABAA1", "#95BAFF"];

const Hero = () => {
	const color = useMotionValue(COLORS[0]);
	const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #2A283A 50%, ${color})`;
	useEffect(() => {
		animate(color, COLORS, {
			ease: "easeInOut",
			duration: 10,
			repeat: Infinity,
			repeatType: "mirror",
		});
	}, []);
	const border = useMotionTemplate`1px solid ${color}`;
	const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
	return (
		<div className="lg:min-h-[90vh] min-h-[60vh]">
			<motion.div
				className="hero bg-base-200 min-h-[85vh] relative z-50"
				style={{
					backgroundImage,
				}}
			>
				<div className="absolute inset-0 z-0 h-[85vh]">
					<Canvas className="z-0">
						<Stars
							className="z-0"
							radius={50}
							count={2500}
							factor={4}
							fade
							speed={2}
						/>
					</Canvas>
				</div>
				<div className="hero-content flex-col lg:flex-col">
					<div className="flex flex-col justify-center items-center">
						<button className="btn bg-accent text-base-100 flex">
							We Are Live!
						</button>
						<h1 className="text-5xl md:text-7xl font-semibold tracking-tight max-w-[700px] text-center leading-[80px] tracking-wide mt-4">
							<span className="">Revitalize</span> Your Car in Under 30 Minutes
						</h1>
						<p className="py-6 text-lg text-center">
							Car Washes Dream, We Deliver!
						</p>
						<motion.button
							className="btn btn-ghost btn-lg w-46 cursor-pointer z-50"
							style={{
								border,
								boxShadow,
							}}
						>
							Book Now <img src="right_arrow.svg" />
						</motion.button>
					</div>
				</div>
			</motion.div>
			<HomeMarquee />
		</div>
	);
};

export default Hero;
