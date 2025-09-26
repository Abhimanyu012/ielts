import React from "react";
import { BookOpen, GraduationCap, Timer, Award } from "lucide-react";

// Course catalog (static). In future, this can be fetched from an API.
const courses = [
	{
		title: "IELTS Academic",
		icon: GraduationCap,
		badge: "Popular",
		description:
			"Intensive training for academic test takers. Includes speaking, writing, listening, and reading modules with mock tests and AI feedback.",
	},
	{
		title: "IELTS General",
		icon: BookOpen,
		badge: "Flexible",
		description:
			"Focused coaching for general module. Personalized study plans and 24/7 support.",
	},
	{
		title: "Crash Course",
		icon: Timer,
		badge: "Fast Track",
		description:
			"Fast-track preparation for last-minute needs. Daily practice and expert tips.",
	},
];

const Courses = () => (
	<section className="max-w-6xl mx-auto py-24 px-4 animate-float">
		<h1 className="text-5xl font-extrabold mb-10 drop-shadow-lg tracking-tight animate-shine text-blue-400 uppercase font-montserrat">
			Our Courses
		</h1>
		{/* Course cards grid */}
		<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
			{courses.map((course, idx) => (
				<div
					key={idx}
					className="group bg-gradient-to-br from-[#181e2a] via-[#232946] to-[#101624] p-8 rounded-3xl shadow-2xl border-2 border-[#232946] hover:border-blue-700 hover:scale-105 transition-all relative overflow-hidden"
				>
					<div className="flex items-center gap-3 mb-4">
						<course.icon className="text-blue-400 group-hover:animate-spin" size={32} />
						<span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
							{course.badge}
						</span>
					</div>
					<h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
						{course.title}
					</h3>
					<p className="text-gray-300 mb-6">{course.description}</p>
					<button className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white px-6 py-2 rounded-xl shadow-lg font-bold hover:scale-105 transition-all uppercase font-montserrat">
						View Details
					</button>
				</div>
			))}
		</div>
		{/* Achievements section to build trust */}
		<div className="mt-16 flex flex-col md:flex-row gap-10 justify-center items-center">
			<div className="flex items-center gap-2 text-blue-400 font-bold text-xl">
				<Award size={28} /> 10,000+ Success Stories
			</div>
			<div className="flex items-center gap-2 text-blue-400 font-bold text-xl">
				<GraduationCap size={28} /> Certified Trainers
			</div>
		</div>
	</section>
);

export default Courses;
