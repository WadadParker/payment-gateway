/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				bg:{
				  DEFAULT:'#F2F2F2',
				  dark: '#BBBBBB',
				  gray:"#696969"
				},
				text:{
				  DEFAULT:"#2F2F2F",
				  light:"#ACACAC"
				},
				border:{
				  DEFAULT:"#E1E1E1"
				}
			  }
		},
	},
	plugins: [],
}
