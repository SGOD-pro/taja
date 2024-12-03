import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { Kalnia, Jockey_One, Inria_Sans } from "next/font/google";
import Main from "./Main";

const kalnia = Kalnia({ subsets: ["latin"] });
const jockeyOne = Jockey_One({ subsets: ["latin"], weight: "400" });
const inriaSans = Inria_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "R.R. Food Proucts",
	description: "Tea time snacks",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${jockeyOne.className} ${kalnia.className} ${inriaSans.className}`}
			>
				<Navbar />
				<Main>{children}</Main>
			</body>
		</html>
	);
}
