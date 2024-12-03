import React, { memo, useState } from "react";
import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { Jockey_One } from "next/font/google";
const jockeyOne = Jockey_One({ subsets: ["latin"], weight: "400" });
import Image from "next/image";
import { ChevronRight } from "lucide-react";
function DrawerComp({
	children,
	itemsArray,
}: {
	children: React.ReactNode;
	itemsArray: ImageItem[];
}) {
	const [selected, setSelected] = useState(0);
	const [open, setOpen] = useState(false);
	return (
		<Drawer onOpenChange={setOpen}>
			<DrawerTrigger>{children}</DrawerTrigger>
			<DrawerContent
				className={`${jockeyOne.className} border-0 transition-all duration-300 ease-in-out rounded-t-3xl`}
				style={{ backgroundColor: itemsArray[selected].theme }}
			>
				<div className={`flex justify-around items-center transition-all md:w-[80vw] p-4 md:p-0 ${open ? "opacity-100" : "opacity-0"}`}>
					<div className="w-96 h-[26rem] overflow-hidden p-5 absolute top-0 left-1/2 md:static -translate-x-1/2 md:-translate-x-0 -translate-y-[70%] md:-translate-y-0">
						<div className="w-full max-w-80 h-full relative m-auto md:m-0">
							{itemsArray.map((item, index) => (
								<div
									className={`w-full transition-all duration-300 ease-in-out h-full absolute top-0 left-0 ${
										selected === index
											? "translate-x-0 opacity-100"
											: "translate-x-[120%] opacity-0"
									}`}
									key={index}
								>
									<Image
										src={item.url}
										alt={item.title}
										width={200}
										height={200}
										className={`w-full h-full object-contain ${
											selected === index && "image-shadow"
										} `}
									/>
								</div>
							))}
						</div>
					</div>


					<div className="bg-white/70 p-4 rounded-3xl relative w-[29rem] h-64 flex flex-col justify-between mt-[4rem]">
						<h2 className="text-4xl">{itemsArray[selected].title}</h2>
						<div
							className="flex items-center justify-between"
							style={{ color: itemsArray[selected].theme }}
						>
							<h3 className="text-3xl">{itemsArray[selected].flavor}</h3>
							<button
								onClick={() =>
									setSelected((prev) => (prev + 1) % itemsArray.length)
								}
							>
								<ChevronRight size={40} />
							</button>
						</div>
						<div className="">
							<h4 className="text-lg">Avalabile in:-</h4>
							<h3 className="text-2xl">MRP: ₹{itemsArray[selected].price}</h3>
						</div>
						<div className="absolute right-5 bottom-3 text-2xl">
							{itemsArray[selected].netWt}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}

export default memo(DrawerComp);
