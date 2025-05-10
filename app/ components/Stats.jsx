"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
	return (
		<div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
			<h2 className="mb-8 text-center text-base sm:text-lg md:mb-16 font-semibold">
				Over
				<span className="text-gradient font-semibold">
					<p style={{ transform: "skew(14deg)", transform: "rotate(3deg)" }}>
						{" "}
						1000 Clients
					</p>{" "}
				</span>
				Satisfied
			</h2>

			<div className="flex flex-col items-center justify-center sm:flex-row">
				<Stat
					num={45}
					suffix="%"
					subheading="Customers who switched to mobile washes to save time and hassle."
				/>
				<div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
				<Stat
					num={15.5}
					decimals={1}
					suffix="K+"
					subheading="Cars cleaned and shining across neighborhoods and cities."
				/>
				<div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
				<Stat
					num={20}
					suffix="B+"
					subheading="Gallons of water saved with our eco-friendly wash methods."
				/>
			</div>
		</div>
	);
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (!isInView) return;

		animate(0, num, {
			duration: 2.5,
			onUpdate(value) {
				if (!ref.current) return;

				ref.current.textContent = value.toFixed(decimals);
			},
		});
	}, [num, decimals, isInView]);

	return (
		<div className="flex w-72 flex-col items-center py-8 sm:py-0">
			<p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
				<span ref={ref}></span>
				{suffix}
			</p>
			<p className="max-w-48 text-center text-neutral-400">{subheading}</p>
		</div>
	);
};
