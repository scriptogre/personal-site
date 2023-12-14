/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  xs: '450px',
		  sm: '580px',
		  md: '768px',
		  lg: '1024px',
		  xl: '1250px',
		},
		colors: {
			'gray-100': 'hsl(0, 0%, 7%)', // background
			'gray-200': 'hsl(0, 0%, 22%)', // portfolio button background
			'gray-300': 'hsl(240, 2%, 16%)', // web design logo
			'gray-500': 'hsl(240, 2%, 15%)', // button background
			'lime-700': '#4d7c0f',
			'light-gray': 'hsl(180, 4%, 59%)',
			'light-gray-70': 'hsl(0, 0%, 22%)',
			'icon-light': 'hsla(0, 0%, 84%, 0.7)', // icon color
			'light-gray-90': 'hsl(0, 0%, 84%)', // icon hover color
			'light-gray-100': 'hsl(0, 0%, 80%);',
			'black': 'hsl(240, 2%, 12%)', // big card background
			'slate': 'hsl(0, 0%, 22%)',
			'onyx': 'hsl(240, 1%, 17%);',
			'light-slate': 'hsl(90, 3%, 62%)', // small shape under heading
			'white': 'hsl(0, 0%, 98%)', // heading
			'light': 'hsl(0, 0%, 82%)', // text
			'scroll': 'hsl(0, 0%, 16%);',
			'scroll-border': 'hsl(0, 0%, 25%);',
			'scroll-hover': 'hsl(0, 0%, 35%);',
		  },		  
		fontFamily: {
			'sans': ['Poppins', 'sans-serif'],
		},
		extend: {	
		  borderRadius: {
			DEFAULT: '20px',
		  },
		}
	  },
	plugins: [],
}
