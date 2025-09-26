import React from "react";

const features = [
	{
		title: "Speaking Practice",
		desc: "Daily speaking sessions with certified trainers.",
		icon: "🗣️",
	},
	{
		title: "Mock Tests",
		desc: "Real exam simulations to boost your confidence.",
		icon: "📝",
	},
	{
		title: "AI Band Score",
		desc: "Instant feedback powered by AI technology.",
		icon: "🤖",
	},
	{
		title: "24/7 Support",
		desc: "Get help anytime from our dedicated team.",
		icon: "📞",
	},
];

const Features = () => {
	return (
		<section className="py-12 bg-white/80 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-blue-800 mb-8 text-center drop-shadow-lg">
					Our Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{features.map((feature, idx) => (
						<div
							key={idx}
							className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center border border-blue-100 hover:scale-105 hover:bg-blue-50/80"
						>
							<div className="text-5xl mb-4 drop-shadow-lg animate-pulse-slow">
								{feature.icon}
							</div>
							<h3 className="text-xl font-semibold text-blue-700 mb-2 drop-shadow-md">
								{feature.title}
							</h3>
							<p className="text-blue-600">{feature.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
