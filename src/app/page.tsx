"use client";
import Image from "next/image";
import Section1 from "./components/Section1";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// List of images
const images = ["/file.png", "/file2.png", "/file3.png", "/file4.png"];

export default function Home() {
	// Define animation variants for the fade-in effect
	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95,y:50 },
		visible: { opacity: 1, scale: 1,y:0, transition: { duration: 0.5, } },
	};

	return (
		<main className="relative">
			<Section1 />
			<section className="w-full p-3 bg-zinc-300" id="products">
				<div className="rounded-md h-full w-full bg-neutral-200 text-black pt-14 pb-4">
					<h1 className="text-5xl font-semibold px-5 py-2">
						Products{" "}
						<span className="text-rose-600 text-xs">
							<sup>*</sup>Only for wholesale
						</span>
					</h1>
					<div className="flex justify-around container m-auto gap-5 flex-wrap">
						{images.map((image, index) => {
							// Create a unique ref for each image
							const ref = useRef(null);
							// Detect when each image is in view
							const isInView = useInView(ref, { once: true });

							return (
								<motion.div
									key={index}
									ref={ref}
									className="min-w-80 w-1/3 border bg-neutral-300 p-2 rounded-md"
									initial="hidden"
									animate={isInView ? "visible" : "hidden"}
									variants={imageVariants}
									transition={{delay:index*0.1}}
								>
									<Image
										src={image}
										alt="image"
										width={500}
										height={500}
										className="object-contain w-full"
									/>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}
