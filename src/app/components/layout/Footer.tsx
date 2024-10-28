import React from "react";
import { Instagram, Facebook, Phone } from "lucide-react";
function Footer() {
	return (
		<footer className="bg-zinc-300 p-3 pt-0 text-black">
			<div className="bg-slate-200 rounded-lg p-2">
				<div className="flex justify-between px-10 py-2">
					<div className="w-1/3">
						<p className="">© 2024 RR Food Products. All Rights Reserved.</p>
						<p className="text-xs">
							Delivering the finest tea-time snacks, crafted with quality and
							care. Proudly serving our customers with the best in taste and
							tradition.
						</p>
					</div>
					<div className="w-1/3 text-right">
						<div className="flex gap-5 justify-end items-center">
							<h5 className="">Follow Us:</h5>
							<a href="#" className="">
								<Instagram />
							</a>
							<a href="#" className="">
								<Facebook />
							</a>
						</div>
						<div className="flex items-center justify-end">
							<Phone />
							<span>+91 99999 99999</span>
						</div>
					</div>
				</div>
				<p className="text-lg text-center">
					Stay connected for updates on new products and promotions!
				</p>
			</div>
		</footer>
	);
}

export default Footer;
