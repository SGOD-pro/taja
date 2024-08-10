import Image from "next/image";

export default function Home() {
	return (
		<>
			<main className="relative w-screen h-screen overflow-hidden">
			
				<nav className="z-20 absolute p-3 sm:p-7">
					<Image width={80} height={80} src="/rr_logo.png" alt="logo" className="w-10 h-10 sm:w-20 sm:h-20"/>
				</nav>
				<section className="w-full lg:w-2/3 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20">
					<h1 className="text-4xl sm:text-5xl font-bold">
						Get Ready for a Tasty Experience!
					</h1>
					<p className="text-sm sm:text-basic text-center mt-6 w-[80%] md:w-[70%] m-auto">
						In the meantime, please stay tuned for updates and follow us on{" "}
						<a
							href="https://www.instagram.com/new_taja/"
							target="_blank"
							className="text-[#ffd700] font-semibold hover:underline"
						>
							Social media
						</a>{" "}
						to be the first to know when we launch. We appreciate your patience
						and look forward to serving you soon!
					</p>
				</section>
				<footer className="z-20 fixed top-8 md:top-5 left-1/2 -translate-x-1/2">
					<Image width={240} height={240} src="/taja.png" alt="logo" className="w-40 h-40 sm:w-72 sm:h-72"></Image>
				</footer>

        <div className="fixed w-full h-full z-0 top-0 left-0">
					<img
						src="/BG.jpg"
						alt=""
						className="w-full h-full object-cover brightness-50"
					/>
				</div>
			</main>
		</>
	);
}
