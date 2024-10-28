import type { Metadata } from "next";
import { Inter ,Lora} from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
Footer
const inter = Lora({ subsets: ["latin"] });

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
				className={`${inter.className}`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
