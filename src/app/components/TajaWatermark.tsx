import React, { memo,use,useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Jockey_One } from "next/font/google";
const jockeyOne = Jockey_One({ subsets: ["latin"], weight: "400" });
function TajaWatermark() {
    const div = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if (!div.current) {
            return;
        }
        gsap.from(div.current.children, {
            x:"30%",
            delay:.5,
            stagger: {
                from: "end",
                each: 0.1,
            },
            opacity: 0,
        })
    },[])
	return (
		<div
			className="absolute top-0 left-10 opacity-10"
			data-scroll
			data-scroll-speed=".3"
		>
			<h1
				className={`tracking-wide font-bold flex -rotate-[20deg] ${jockeyOne.className} lg:text-[23rem] xl:text-[27rem] `}
                ref={div}
			>
                {"TAJA".split("").map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
			</h1>
		</div>
	);
}

export default memo(TajaWatermark);
