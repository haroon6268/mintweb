import Image from "next/image";
import Navbar from "./ components/Navbar";
import Hero from "./ components/Hero";
import HomeMarquee from "./ components/HomeMarquee";
import Testimonials from "./ components/Testimonials";
import LoveLanguage from "./ components/LoveLanguage";
import Pricing from "./ components/Pricing";
import { Stats } from "./ components/Stats";
import AnimatedTestimonials from "./ components/AnimatedTestimonials";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<AnimatedTestimonials />
			<LoveLanguage />
			<Pricing />
			<Stats />
		</div>
	);
}
