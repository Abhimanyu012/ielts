import React from "react";
import { Mic, FileText, Gauge, Headphones, GraduationCap, Users, Award } from "lucide-react";

// Define the features offered by the IELTS Institute
const features = [
	{
		title: "Speaking Practice",
		desc: "Daily speaking sessions with certified trainers.",
		// Icon representing speaking practice
		icon: <Mic className="mx-auto text-blue-700" size={48} />,
		details: [
			"One-on-one feedback",
			"Accent improvement",
			"Real exam scenarios",
		],
		link: "#speaking-practice",
	},
	{
		title: "Mock Tests",
		desc: "Real exam simulations to boost your confidence.",
		// Icon representing mock tests
		icon: <FileText className="mx-auto text-blue-700" size={48} />,
		details: [
			"Timed practice",
			"Band score prediction",
			"Detailed analysis",
		],
		link: "#mock-tests",
	},
	{
		title: "AI Band Score",
		desc: "Instant feedback powered by AI technology.",
		// Icon representing AI-powered scoring
		icon: <Gauge className="mx-auto text-blue-700" size={48} />,
		details: [
			"Automated scoring",
			"Personalized tips",
			"Progress tracking",
		],
		link: "#ai-band-score",
	},
	{
		title: "24/7 Support",
		desc: "Get help anytime from our dedicated team.",
		// Icon representing round-the-clock support
		icon: <Headphones className="mx-auto text-blue-700" size={48} />,
		details: [
			"Live chat",
			"Email support",
			"Resource library",
		],
		link: "#support",
	},
];

const Features = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-[#0a0f1c] via-[#101624] to-[#181e2a]">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="flex items-center gap-2 text-4xl font-extrabold mb-12 text-center tracking-tight text-gray-100 drop-shadow-lg animate-shine">
					<GraduationCap className="text-blue-100" size={32} /> Our Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{features.map((feature, idx) => (
						<div
							key={idx}
							className="group bg-gradient-to-br from-[#181e2a] via-[#232946] to-[#101624] p-8 rounded-3xl shadow-2xl border-2 border-[#232946] hover:border-blue-700 hover:scale-105 transition-all text-left animate-float relative overflow-hidden"
						>
							<div className="mb-4">
								{feature.icon}
							</div>
							<h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors uppercase font-montserrat">{feature.title}</h3>
							<p className="text-gray-300 mb-4">
								{feature.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
