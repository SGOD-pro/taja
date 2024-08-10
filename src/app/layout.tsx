import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "R.R. Food Proucts",
	description: "Tea time snacks",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} max-w-screen max-h-screen overflow-hidden`}>{children}</body>
		</html>
	);
}
