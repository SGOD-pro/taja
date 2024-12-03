import React from "react";
import { Instagram, Facebook, Phone } from "lucide-react";

import {  Inria_Sans } from "next/font/google";
const inriaSans = Inria_Sans({ subsets: ["latin"], weight: "400" });
function Footer() {
	return (
		<footer className={`${inriaSans.className} p-3 pt-0 text-black mt-10`}>
			<div className="bg-slate-200/60 rounded-lg p-2 text-center md:text-left">
				<div className="flex justify-between px-4 md:px-10 py-2 flex-col md:flex-row gap-4 md:gap-0">
					<div className="md:w-1/3">
						<p className="leading-none">© 2024 RR Food Products. All Rights Reserved.</p>
						<p className="text-xs hidden md:block">
							Delivering the finest tea-time snacks, crafted with quality and
							care. Proudly serving our customers with the best in taste and
							tradition.
						</p>
					</div>
					<div className="md:w-1/3">
						<div className="flex gap-5 md:justify-end justify-center items-center">
							<h5 className="">Follow Us:</h5>
							<a href="#" className="">
								<Instagram />
							</a>
							<a href="#" className="">
								<Facebook />
							</a>
						</div>
						<div className="flex items-center justify-center md:justify-end">
							<Phone />
							<span>+91 99999 99999</span>
						</div>
					</div>
				</div>
				<p className="text-lg text-center leading-none">
					Stay connected for updates on new products and promotions!
				</p>
			</div>
		</footer>
	);
}

export default Footer;
