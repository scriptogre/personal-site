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
		  'gray-100': '#535A5B', // background
		  'gray-200': '#383838', // portfolio button background
		  'gray-300': '#2B2B2C', // web design logo
		  'gray-500': '#282829', // button background
		  'light-gray': '#929B9C',
		  'black': '#1E1E1F', // big card background
		  'slate': '#383838', // border 
		  'light-slate': '#939D9F', // small shape under heading
		  'white': '#FAFAFA', // heading 
		  'light': '#d1d1d1', // text
		  'card-primary': '#232325', // card primary
		  'card-secondary': '#202022', // card secondary
		  'scroll': '#949D9E', // scroll bar color
		},
		fontFamily: {
			'poppins': ['Poppins', 'sans-serif'],
		},
		extend: {	
		  borderRadius: {
			DEFAULT: '20px',
		  },
		}
	  },
	plugins: [],
}
