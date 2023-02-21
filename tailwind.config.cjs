/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'onedark-dark': '#282c34',
				'onedark-darker': '#21252b',
				'onedark-white': '#abb2bf',
				'onedark-gutter-gray': '#4b5263',
				'onedark-comment-gray': '#5c6370',
				'nord-white': '#eceff4',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
