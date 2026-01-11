import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			animation: {
				shimmer: 'shimmer 8s infinite',
				gradient: 'gradient 8s linear infinite',
			},
			keyframes: {
				shimmer: {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - var(--shimmer-width)) 0',
					},
					'30%, 60%': {
						'background-position': 'calc(100% + var(--shimmer-width)) 0',
					},
				},
				gradient: {
					'0%': {
						'background-position': '0% center',
					},
					'100%': {
						'background-position': 'var(--bg-size) center',
					},
				},
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
				},
				/* ========== THEME SYSTEM COLORS ========== */
				surface: {
					DEFAULT: 'hsl(var(--surface) / <alpha-value>)',
					muted: 'hsl(var(--surface-muted) / <alpha-value>)',
					elevated: 'hsl(var(--surface-elevated) / <alpha-value>)',
				},
				heading: {
					DEFAULT: 'hsl(var(--heading) / <alpha-value>)',
					accent: 'hsl(var(--heading-accent) / <alpha-value>)',
				},
				txt: {
					DEFAULT: 'hsl(var(--text-primary) / <alpha-value>)',
					secondary: 'hsl(var(--text-secondary) / <alpha-value>)',
					muted: 'hsl(var(--text-muted) / <alpha-value>)',
				},
				'border-subtle': 'hsl(var(--border-subtle) / <alpha-value>)',
				'border-strong': 'hsl(var(--border-strong) / <alpha-value>)',
				nav: {
					bg: 'hsl(var(--nav-bg) / <alpha-value>)',
					text: 'hsl(var(--nav-text) / <alpha-value>)',
					'text-hover': 'hsl(var(--nav-text-hover) / <alpha-value>)',
				},
				icon: {
					bg: 'hsl(var(--icon-bg) / <alpha-value>)',
					border: 'hsl(var(--icon-border) / <alpha-value>)',
				},
				testimonial: {
					'card-bg': 'hsl(var(--testimonial-card-bg) / <alpha-value>)',
					border: 'hsl(var(--testimonial-border) / <alpha-value>)',
					star: 'hsl(var(--testimonial-star) / <alpha-value>)',
				},
				tech: {
					'card-bg': 'hsl(var(--tech-card-bg) / <alpha-value>)',
					border: 'hsl(var(--tech-border) / <alpha-value>)',
					glow: 'hsl(var(--tech-glow) / <alpha-value>)',
				},
				opensource: {
					'card-bg': 'hsl(var(--opensource-card-bg) / <alpha-value>)',
					emerald: 'hsl(var(--opensource-emerald) / <alpha-value>)',
					pink: 'hsl(var(--opensource-pink) / <alpha-value>)',
				},
				product: {
					'card-bg': 'hsl(var(--product-card-bg) / <alpha-value>)',
					'image-bg': 'hsl(var(--product-image-bg) / <alpha-value>)',
				},
				launchschool: {
					red: 'hsl(var(--launchschool-red) / <alpha-value>)',
					'red-muted': 'hsl(var(--launchschool-red-muted) / <alpha-value>)',
					notes: 'hsl(var(--launchschool-notes-bg) / <alpha-value>)',
				},
				favorites: {
					'card-bg': 'hsl(var(--favorites-card-bg) / <alpha-value>)',
					green: 'hsl(var(--favorites-green) / <alpha-value>)',
					amber: 'hsl(var(--favorites-amber) / <alpha-value>)',
				},
				contact: {
					'card-bg': 'hsl(var(--contact-card-bg) / <alpha-value>)',
					'input-bg': 'hsl(var(--contact-input-bg) / <alpha-value>)',
					'input-border': 'hsl(var(--contact-input-border) / <alpha-value>)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: [...fontFamily.sans],
			},
		},
	},
	plugins: [require('tailwindcss-motion')],
};

export default config;
