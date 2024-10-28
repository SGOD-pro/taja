"use client";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import { Headset } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
	const pathname = usePathname();
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const homeSection = document.getElementById("home");
		const productSection = document.getElementById("products");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.id === "home") {
							setActiveSection("#home");
						} else if (entry.target.id === "products") {
							setActiveSection("#products");
						}
					}
				});
			},
			{
				root: null, // viewport
				threshold: 0.5, // 50% of the section must be visible
			}
		);

		if (homeSection) observer.observe(homeSection);
		if (productSection) observer.observe(productSection);

		// Cleanup observer when component unmounts
		return () => {
			if (homeSection) observer.unobserve(homeSection);
			if (productSection) observer.unobserve(productSection);
		};
	}, []);

	return (
		<header className="flex justify-between items-center absolute top-2 xl:top-3 left-0 w-full z-20 px-8 py-4">
			<Image
				src={"/rr_logo.png"}
				height={100}
				width={100}
				alt="rr"
				className="w-12 xl:w-14 h-12 xl:h-14"
			></Image>
			<nav className="w-1/2 flex gap-12 items-center px-4 md:px-6 py-3 bg-white/40 justify-center rounded-full fixed left-1/2 -translate-x-1/2 backdrop-blur-sm">
				<Link
					className={`text-black opacity-70 ${
						pathname === "/" && activeSection === "#home" && "font-bold opacity-100"
					}`}
					href={"/"}
				>
					Home
				</Link>
				<Link
					className={`text-black opacity-70 ${activeSection === "#products" && "font-bold opacity-100"}`}
					href={"#products"}
				>
					Products
				</Link>
				<Link
					className={`text-black opacity-70 ${pathname === "/about" && "font-bold opacity-100"}`}
					href={"/about"}
				>
					About
				</Link>
			</nav>
			<Link
				href={"/"}
				aria-disabled
				className="bg-white/40 p-3 rounded-full shadow-black shadow-sm text-black"
			>
				<Headset className="w-4 h-4" />
			</Link>
		</header>
	);
}

export default memo(Navbar);
