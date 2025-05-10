"use client";
import { motion } from "framer-motion";

const AnimatedTestimonials = () => {
	return (
		<div className="bg-base-200 py-12">
			<div className="mb-8 px-4">
				<h3 className=" text-4xl font-semibold text-center">Testimonials</h3>
				<p className="text-center text-neutral-300 text-sm mt-2 max-w-lg mx-auto">
					What our Clients Say
				</p>
			</div>
			<div className="p-4 overflow-x-hidden relative">
				<div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-base-100 to-transparent" />

				<div className="flex items-center mb-4">
					<TestimonialList list={testimonials.top} duration={125} />
					<TestimonialList list={testimonials.top} duration={125} />
					<TestimonialList list={testimonials.top} duration={125} />
				</div>
				<div className="flex items-center mb-4">
					<TestimonialList list={testimonials.middle} duration={75} reverse />
					<TestimonialList list={testimonials.middle} duration={75} reverse />
					<TestimonialList list={testimonials.middle} duration={75} reverse />
				</div>
				<div className="flex items-center">
					<TestimonialList list={testimonials.bottom} duration={275} />
					<TestimonialList list={testimonials.bottom} duration={275} />
					<TestimonialList list={testimonials.bottom} duration={275} />
				</div>

				<div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-base-100 to-transparent" />
			</div>
		</div>
	);
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
	return (
		<motion.div
			initial={{ translateX: reverse ? "-100%" : "0%" }}
			animate={{ translateX: reverse ? "0%" : "-100%" }}
			transition={{ duration, repeat: Infinity, ease: "linear" }}
			className="flex gap-4 px-2"
		>
			{list.map((t) => {
				return (
					<div
						key={t.id}
						className="shrink-0 md:w-[500px] w-[250px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
					>
						<div className="bg-base-100 text-slate-50 p-4">
							<span className="block font-semibold text-lg mb-1 flex justify-between">
								{t.name}{" "}
								<div className="flex border-spacing-1">
									<img src="/star.svg" className="h-5 w-5"></img>
									<img src="/star.svg" className="h-5 w-5"></img>
									<img src="/star.svg" className="h-5 w-5"></img>
									<img src="/star.svg" className="h-5 w-5"></img>
									<img src="/star.svg" className="h-5 w-5"></img>
								</div>
							</span>
							<span className="block mb-3 text-sm font-medium">{t.title}</span>
							<span className="block text-sm text-slate-300">{t.info}</span>
						</div>
					</div>
				);
			})}
		</motion.div>
	);
};

const testimonials = {
	top: [
		{
			id: 1,
			img: "https://images.unsplash.com/photo-1590080875650-27d99e8f49c5?auto=format&fit=crop&w=703&q=80",
			name: "Sarah M.",
			title: "Local Realtor",
			info: "Mint Detail brought my SUV back to life! The team was on time, professional, and left my car spotless inside and out.",
		},
		{
			id: 2,
			img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=715&q=80",
			name: "David L.",
			title: "Business Consultant",
			info: "I’ve tried a few mobile detailers, but Mint Detail was the most thorough. Definitely sticking with them.",
		},
		{
			id: 3,
			img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=687&q=80",
			name: "Jasmine R.",
			title: "Busy Mom of 3",
			info: "With three kids, my van was a mess. Mint Detail made it look brand new again. Super convenient!",
		},
		{
			id: 4,
			img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=928&q=80",
			name: "Mike D.",
			title: "Uber Driver",
			info: "Having a clean car is everything in my line of work. Mint Detail keeps me looking sharp for my passengers.",
		},
		{
			id: 5,
			img: "https://images.unsplash.com/photo-1614283609407-e7e9053c5103?auto=format&fit=crop&w=687&q=80",
			name: "Emily C.",
			title: "Teacher",
			info: "They came right to my school and detailed my car while I worked. Amazing service and results!",
		},
		{
			id: 6,
			img: "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=870&q=80",
			name: "Carlos B.",
			title: "Tech Startup Founder",
			info: "Mint Detail is the only company I trust with my Tesla. Reliable, eco-friendly, and spotless every time.",
		},
	],
	middle: [
		{
			id: 1,
			img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=687&q=80",
			name: "Anthony G.",
			title: "Photographer",
			info: "I care about aesthetics—Mint Detail nailed every detail. My car’s never looked better.",
		},
		{
			id: 2,
			img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=687&q=80",
			name: "Renee S.",
			title: "Health Coach",
			info: "I love supporting local businesses and Mint Detail exceeded expectations. Friendly, efficient, and thorough.",
		},
		{
			id: 3,
			img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=686&q=80",
			name: "Tyler W.",
			title: "Construction Manager",
			info: "My truck was covered in dirt. After Mint Detail, it looked showroom ready.",
		},
		{
			id: 4,
			img: "https://images.unsplash.com/photo-1589571894960-20bbe2828f3b?auto=format&fit=crop&w=1744&q=80",
			name: "Lindsey K.",
			title: "Real Estate Agent",
			info: "I rely on a clean car to impress clients—Mint Detail keeps me ready for showings.",
		},
		{
			id: 5,
			img: "https://images.unsplash.com/photo-1622651272054-3c45cd9c4f1f?auto=format&fit=crop&w=930&q=80",
			name: "George M.",
			title: "Retired Veteran",
			info: "Outstanding work and respectful service. Mint Detail earns my full recommendation.",
		},
		{
			id: 6,
			img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=870&q=80",
			name: "Nina P.",
			title: "Fitness Trainer",
			info: "Mint Detail makes my car smell and look fresh—perfect for my daily gym commutes.",
		},
	],
	bottom: [
		{
			id: 1,
			img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=687&q=80",
			name: "Travis C.",
			title: "Sales Executive",
			info: "Professional, fast, and they come to *you*. It’s a no-brainer.",
		},
		{
			id: 2,
			img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=930&q=80",
			name: "Olivia H.",
			title: "College Student",
			info: "Affordable and super convenient! My car is finally clean without the hassle.",
		},
		{
			id: 3,
			img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=898&q=80",
			name: "Ben T.",
			title: "Truck Owner",
			info: "They got rid of every coffee stain and dog hair. 10/10.",
		},
		{
			id: 4,
			img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=687&q=80",
			name: "Melissa V.",
			title: "Nurse",
			info: "It’s so nice coming out of a long shift to a sparkling clean car. Thank you Mint Detail!",
		},
		{
			id: 5,
			img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=687&q=80",
			name: "Henry P.",
			title: "Warehouse Manager",
			info: "Reliable, fair pricing, and quality work. They’ve earned a long-term customer.",
		},
		{
			id: 6,
			img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=2232&q=80",
			name: "Crystal N.",
			title: "Freelancer",
			info: "Mint Detail is a lifesaver. I book them every two weeks now. Total game changer!",
		},
	],
};

export default AnimatedTestimonials;
