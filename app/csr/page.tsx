"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function CSRPage() {
	const csrImages = [
		"/csr-1.jpg",
		"/csr-2.jpg",
		"/csr-3.jpg",
		"/csr-4.jpg",
		"/csr-5.jpg",
		"/csr-6.jpg",
		"/csr-7.jpg",
	];

	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => setAnimate(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="min-h-screen pt-16">
			{/* Hero Section */}
			<section className="py-10 bg-gradient-to-r from-purple-600 to-blue-500">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">Corporate Social Responsibility</h1>
					<p className="text-xl text-white/90 leading-relaxed mb-8">
						Making a positive impact through community engagement, social initiatives, and responsible business practices.
					</p>
				</div>
			</section>

			{/* CSR Initiatives Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Our Initiatives</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							We believe in giving back to society and supporting causes that matter. Here are some highlights from our recent CSR activities.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{csrImages.map((img, i) => (
							<Card
								key={i}
								className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300
									${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
									transition-all duration-700 ease-out`
								}
								style={{
									transitionDelay: animate ? `${i * 120}ms` : '0ms',
								}}
							>
								<div className="aspect-[4/3] relative">
									<div className="absolute inset-0 z-10 rounded-lg shadow-2xl shadow-black/30 transition-all duration-300" />
									<Image
										src={img}
										alt={`CSR Initiative ${i + 1}`}
										fill
										className="object-cover rounded-lg z-20 relative"
									/>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Impact Statement Section */}
			<section className="py-10 bg-gray-50">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">Bilkes's Role</h2>
					<p className="text-xl text-gray-700 leading-relaxed">
						Beyond her professional journey in fashion, media, and entrepreneurship, Bilkes Perveen is deeply committed to social responsibility and philanthropy. She is actively involved in initiatives supporting underprivileged children and specially abled individuals, working consistently to create awareness around equality and education.
					</p>
                    <p className="text-xl text-gray-700 leading-relaxed mt-4">
                        Bilkes strongly believes in giving platforms to talented children, nurturing their skills, confidence, and dreams irrespective of background. She also advocates mental health awareness, emphasizing emotional well-being alongside personal growth. Through her work, she strives to inspire compassion, empowerment, and positive change—using her influence to make a meaningful difference in society.
                        </p>
				</div>
			</section>
		</div>
	);
}
