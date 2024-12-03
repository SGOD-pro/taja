import type { Config } from "tailwindcss";
const { Lora, Kalnia, Jockey_One, Inria_Sans } = require("next/font/google");

// const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });
// const kalnia = Kalnia({ subsets: ["latin"] });
// const jockeyOne = Jockey_One({ subsets: ["latin"] });
// const inriaSans = Inria_Sans({ subsets: ["latin"] });
const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			height: {
				device: "100dvh",
			},
			keyframes: {
				bounceWithPause: {
					"0%, 100%": {
						transform: "translateY(-25%)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "translateY(0)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
					},
				},
			},
			animation: {
				"bounce-slow":
					"bounceWithPause 1s infinite ease-in-out, pauseAnimation 2s infinite step-end",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
