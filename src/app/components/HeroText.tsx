import React, { memo } from "react";

function HeroText() {
	return (
		<div className="">
			<h2 className="text-6xl leading-none tracking-tighter font-bold">The Tea</h2>
			<h2 className="text-6xl leading-none tracking-tighter font-bold">Time</h2>
			<h2 className="text-6xl leading-none tracking-tighter font-bold">Cousins</h2>
		</div>
	);
}

export default memo(HeroText);
