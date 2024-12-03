"use client";
import { itemsImages } from "@/constants";
import Image from "next/image";
import React, { memo, useRef } from "react";
import DrawerComp from "./DrawerComp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function getRandomRotation() {
	return Math.floor(Math.random() * 13) - 6;
}
function Displayitems() {
	const div = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const el = div.current?.children;
		if (!el) return;
		gsap.from(el, {
			y: 100,
			delay: 1,
			opacity: 0,
			duration: 1.2,
			ease: "expo.out",
			stagger: {
				from: "end",
				each: 0.2,
			},
		});
	}, []);
	return (
		<div className="flex gap-3 flex-wrap md:flex-nowrap items-center justify-evenly sm:justify-center" ref={div}>
			{itemsImages.map((item, index) => (
				<div className="" key={index}>
					<DrawerComp itemsArray={item}>
						<div  className="w-28 h-28">
							<Image
								src={item[0].url}
								alt={item[0].title}
								width={100}
								height={100}
								priority 
								className="w-full h-full object-contain hover:drop-shadow-xl image-shadow-sm transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
								style={{
									transform: `rotate(${getRandomRotation()}deg)`,
								}}
							/>
						</div>
					</DrawerComp>
				</div>
			))}
		</div>
	);
}

export default memo(Displayitems);
