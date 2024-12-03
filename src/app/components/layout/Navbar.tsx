"use client";
import Image from "next/image";
import React, { memo, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, AlignRight } from "lucide-react";
import { Jockey_One } from "next/font/google";
const jockeyOne = Jockey_One({ subsets: ["latin"], weight: "400" });

const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About Us",
		href: "/about-us",
	},
	{
		name: "Contact us",
		href: "/contact-us",
	},
];
function Navbar() {
	const pathname = usePathname();
	const [activeSection, setActiveSection] = useState(false);
	const div = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				!div.current?.contains(e.target as Node) &&
				e.target !== document.getElementById("trigger-btn")
			) {
				setActiveSection(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		// <nav className="">
		// 	<header className="flex justify-between items-center fixed top-0 w-full left-1/2 -translate-x-1/2 \ z-50 backdrop-blur-3xl bg-white/40 px-8 py-3 rounded-b-3xl" >
		// 		<Image
		// 			src={"/rr_logo.png"}
		// 			height={100}
		// 			width={100}
		// 			alt="rr"
		// 			className="w-8 xl:w-10 h-8 xl:h-10 drop-shadow-lg filter"
		// 		></Image>
		// 		<button
		// 			className="bg-[#1c1c1c] px-4 py-2 text-white rounded-full"
		// 			id="trigger-btn"
		// 			onClick={() => setActiveSection(true)}
		// 		>
		// 			<span className="hidden md:block pointer-events-none">Menu</span>
		// 			<span className="md:hidden pointer-events-none">
		// 				<AlignRight />
		// 			</span>
		// 		</button>
		// 	</header>
		// 	<div
		// 		className={`fixed top-0 right-0 w-svw md:w-96 h-dvh z-[60] backdrop-blur-3xl flex flex-col items-center justify-center ${
		// 			activeSection ? "translate-x-0" : "translate-x-full"
		// 		} transition-all`}
		// 		ref={div}
		// 	>
		// 		<button
		// 			className="absolute right-12 top-10"
		// 			onClick={() => setActiveSection(false)}
		// 		>
		// 			<X size={40} />
		// 		</button>
		// 		<ul className="space-y-8 text-5xl">
		// 			{links.map((link) => (
		// 				<li key={link.name}>
		// 					<Link href={`${link.href}`}>{link.name.split(" ")}</Link>
		// 				</li>
		// 			))}
		// 		</ul>
		// 	</div>
		// </nav>

		<nav
			className={`${jockeyOne.className} fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-5`}
		>
			<ul
				className={`text-2xl flex gap-12 ${
					pathname === "/" ? "text-white" : "text-black"
				} justify-center`}
			>
				{links.map((link) => (
					<li key={link.name}>
						<Link
							href={`${link.href}`}
							className={pathname === link.href ? "opacity-100" : "opacity-50"}
						>
							{link.name.split(" ")}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default memo(Navbar);
