"use client";
import Image from "next/image";
import HeroText from "./HeroText";
import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
const bgClasses = ["bg1", "bg2", "bg3"];
const images = ["/file.png", "/file2.png", "/file3.png", "/file4.png"];
const color = ["#9a740a", "#990e0e", "#0b175f"];
import Link from "next/link";
export default function Home() {
	const [bgIndex, setBgIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setBgIndex((prevIndex) => (prevIndex + 1) % bgClasses.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section
			className="relative h-screen flex items-center overflow-hidden"
			id="home"
		>
			{/* Background fade-in/fade-out */}
			{bgClasses.map((bg, index) => (
				<div
					key={index}
					className={`-z-10 absolute inset-0 transition-opacity duration-1000 ease-in-out ${bg} ${
						bgIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
					}`}
				/>
			))}

			<div className="flex items-center justify-between px-16 xl:px-24 w-full">
				<div className="z-10 opacity-70">
					<HeroText />
					<div className="flex gap-5 mt-5">
						<button
							className="p-2 rounded-full bg-white/50 disabled:opacity-30 transition-all"
							onClick={() => {
								setBgIndex((prevIndex) => (prevIndex - 1) % bgClasses.length);
							}}
							disabled={bgIndex === 0}
						>
							<ChevronLeft />
						</button>
						<button
							className="p-2 rounded-full bg-white/50 disabled:opacity-30 transition-all"
							onClick={() => {
								setBgIndex((prevIndex) => (prevIndex + 1) % bgClasses.length);
							}}
							disabled={bgIndex === 3}
						>
							<ChevronRight />
						</button>
					</div>
				</div>

				<div className="w-[35rem] h-[68dvh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-10">
					<div
						className="py-3 absolute h-full inset-0 flex transition-transform duration-1000 ease-in-out"
						style={{ transform: `translateX(-${bgIndex * 100}%)` }}
					>
						{images.map((img, index) => (
							<Image
								key={index}
								src={img}
								alt={`Slide ${index + 1}`}
								className="w-full h-full object-contain flex-shrink-0 image-shadow"
								width={400}
								height={400}
							/>
						))}
					</div>
				</div>

				<div className="z-10 opacity-75 ">
					<div className="h-[3.2rem] overflow-hidden">
						<div
							className="h-full transition-transform duration-700 ease-in-out"
							style={{ transform: `translateY(-${bgIndex * 3.4}rem)` }}
						>
							<h2 className="text-4xl font-bold capitalize h-[3rem] flex items-center">
								Special Jhal
							</h2>
							<h2 className="text-4xl font-bold capitalize h-[3.3rem] flex items-center pt-2">
								tak/jhal/misty
							</h2>
							<h2 className="text-4xl font-bold capitalize h-[3.2rem] flex items-center">
                            Special Jhal
							</h2>
						</div>
					</div>

					<h4
						className="font-bold transition-colors duration-500 my-4 text-3xl text-black"
						
					>
						₹10
					</h4>
					
				</div>
			</div>
			<Link href={"#products"} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-35 ">
				<ChevronDown width={60} height={60}/>
			</Link>
		</section>
	);
}
