import React from "react";

const testimonials = [
	{
		name: "Amanpreet K.",
		review:
			"I improved my band score from 6.0 to 7.5! The speaking practice and mock tests were game-changers.",
	},
	{
		name: "Riya S.",
		review:
			"The AI feedback was so accurate and helpful. Highly recommend this institute!",
	},
	{
		name: "Mohit G.",
		review:
			"24/7 support made my preparation stress-free. Amazing trainers and resources!",
	},
];

const Testimonials = () => {
	return (
		<section className="py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-blue-800 mb-8 text-center drop-shadow-lg">
					Student Testimonials
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center border border-blue-100 hover:scale-105 hover:bg-blue-50/80"
						>
							<p className="text-blue-700 mb-4 italic drop-shadow-md">
								“{t.review}”
							</p>
							<div className="font-semibold text-blue-800 drop-shadow-lg">
								{t.name}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
