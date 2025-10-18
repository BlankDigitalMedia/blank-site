const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["media", "class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
  fontFamily: {
  sans: ['var(--font-sans)'],
  serif: ['var(--font-serif)'],
  mono: ['var(--font-mono)']
  },
  		fontSize: {
  			'xs': ['0.9rem', { lineHeight: '1.2rem' }],
  			'sm': ['1.05rem', { lineHeight: '1.5rem' }],
  			'base': ['1.2rem', { lineHeight: '1.8rem' }],
  			'lg': ['1.35rem', { lineHeight: '2.1rem' }],
  			'xl': ['1.5rem', { lineHeight: '2.1rem' }],
  			'2xl': ['1.8rem', { lineHeight: '2.4rem' }],
  			'3xl': ['2.25rem', { lineHeight: '2.7rem' }],
  			'4xl': ['2.7rem', { lineHeight: '3rem' }],
  			'5xl': ['3.6rem', { lineHeight: '1' }],
  			'6xl': ['4.5rem', { lineHeight: '1' }],
  			'7xl': ['5.4rem', { lineHeight: '1' }],
  			'8xl': ['7.2rem', { lineHeight: '1' }],
  			'9xl': ['9.6rem', { lineHeight: '1' }]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
