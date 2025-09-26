import React from "react";
import { Users, Award, CalendarCheck } from "lucide-react";

const team = [
	{
		name: "Amanpreet K.",
		role: "Lead Trainer",
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		bio: "10+ years IELTS coaching experience. Specialized in speaking and writing.",
	},
	{
		name: "Mohit G.",
		role: "AI Specialist",
		avatar: "https://randomuser.me/api/portraits/men/34.jpg",
		bio: "Expert in AI-powered assessments and feedback.",
	},
	{
		name: "Riya S.",
		role: "Support Manager",
		avatar: "https://randomuser.me/api/portraits/women/68.jpg",
		bio: "Ensures 24/7 support and smooth student experience.",
	},
];

const About = () => (
	<section className="max-w-6xl mx-auto py-24 px-4 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
		{/* Decorative SVG background: stars + meteors for energy */}
		<div className="absolute inset-0 z-0 pointer-events-none">
			<svg
				width="100%"
				height="100%"
				className="absolute inset-0 w-full h-full animate-sparkle"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g>
					{Array.from({ length: 80 }).map((_, i) => (
						<circle
							key={i}
							cx={Math.random() * 100 + "%"}
							cy={Math.random() * 100 + "%"}
							r={Math.random() * 2 + 1}
							fill={`hsl(${Math.random() * 360}, 80%, 80%)`}
							opacity={0.5 + Math.random() * 0.4}
						/>
					))}
					{/* Meteor streaks */}
					{Array.from({ length: 6 }).map((_, i) => (
						<rect
							key={"meteor" + i}
							x={Math.random() * 100 + "%"}
							y={Math.random() * 100 + "%"}
							width={Math.random() * 40 + 30}
							height={2}
							rx={1}
							fill="white"
							opacity={0.3 + Math.random() * 0.3}
							style={{ filter: "blur(1px)" }}
						/>
					))}
				</g>
			</svg>
		</div>
		<h1 className="text-5xl font-extrabold text-blue-400 mb-10 drop-shadow-lg tracking-tight animate-shine uppercase font-montserrat relative z-10">
			About Us
		</h1>
		{/* Intro card explaining mission and values */}
		<div className="bg-[#181e2a]/90 rounded-3xl shadow-2xl p-12 border-2 border-[#232946] relative z-10">
			<p className="text-blue-200 mb-4 text-lg">
				IELTS Institute is dedicated to helping students achieve their dream band
				scores through expert coaching, AI-powered feedback, and 24/7 support. Our
				trainers are certified and our resources are up-to-date with the latest
				exam patterns.
			</p>
			<p className="text-blue-200 text-lg mb-8">
				Join us and experience a modern, supportive, and results-driven learning
				environment. We use the latest technology and proven teaching methods to
				ensure your success.
			</p>
			{/* Team Section (map over static team array) */}
			<div className="mt-10">
				<h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2 uppercase font-montserrat">
					<Users size={24} /> Meet Our Team
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{team.map((member, idx) => (
						<div
							key={idx}
							className="bg-[#232946] p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-all"
						>
							<img
								src={member.avatar}
								alt={member.name}
								className="mx-auto mb-4 w-20 h-20 rounded-full border-4 border-blue-400 shadow-lg"
							/>
							<h3 className="text-lg font-bold text-blue-200 mb-1">
								{member.name}
							</h3>
							<span className="block text-blue-400 font-semibold mb-2">
								{member.role}
							</span>
							<p className="text-gray-300 text-sm">{member.bio}</p>
						</div>
					))}
				</div>
			</div>
			{/* Stats & Timeline */}
			<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				<div className="flex flex-col items-center">
					<Award size={32} className="text-blue-400 mb-2" />
					<span className="text-xl font-bold text-blue-200">
						10,000+ Success Stories
					</span>
				</div>
				<div className="flex flex-col items-center">
					<Users size={32} className="text-blue-400 mb-2" />
					<span className="text-xl font-bold text-blue-200">
						Certified Trainers
					</span>
				</div>
				<div className="flex flex-col items-center">
					<CalendarCheck size={32} className="text-blue-400 mb-2" />
					<span className="text-xl font-bold text-blue-200">
						Established 2012
					</span>
				</div>
			</div>
		</div>
	</section>
);

export default About;
