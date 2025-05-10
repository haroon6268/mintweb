"use client";
import Image from "next/image";
import Navbar from "./ components/Navbar";
import Hero from "./ components/Hero";
import HomeMarquee from "./ components/HomeMarquee";
import Testimonials from "./ components/Testimonials";
import LoveLanguage from "./ components/LoveLanguage";
import Pricing from "./ components/Pricing";
import { Stats } from "./ components/Stats";
import { useEffect } from "react";
export default function Home() {
	useEffect(() => {
		console.log("test");
		var docWidth = document.documentElement.offsetWidth;
		[].forEach.call(document.querySelectorAll("*"), function (el) {
			if (el.offsetWidth > docWidth) {
				console.log(el);
			}
		});
	}, []);
	return (
		<div>
			<Navbar />
			<Hero />
			<Testimonials />
			<LoveLanguage />
			<Pricing />
			<Stats />
		</div>
	);
}
