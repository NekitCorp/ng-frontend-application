// theme.ts
import { DefaultTheme } from 'styled-components';

export const defaultTheme = {
	radius: {
		s: '3px',
		m: '5px',
		l: '7px',
		xl: '10px'
	},
	spacing: {
		unset: 'unset',
		'7xs': '2px',
		'6xs': '4px',
		'5xs': '6px',
		'4xs': '8px',
		'3xs': '12px',
		'2xs': '16px',
		xs: '20px',
		s: '24px',
		m: '32px',
		l: '40px',
		xl: '48px',
		'2xl': '64px',
		'3xl': '80px',
		'4xl': '100px',
		'5xl': '120px',
		'6xl': '140px',
		'7xl': '160px',
		'8xl': '180px'
	},
	device: {
		mobile: '@media (max-width: 768px)',
		tablet: '@media (min-width: 768px)',
		desktop: '@media (min-width: 1024px)'
	}
};

export const darkTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		// set theme colors
		gold: '#BEA77E',
		white: '#FFFFF4',
		grey: '#8E8E8E',
		darkGrey: '#333030',
		lighterBlack: '#1D1C1A',
		black: '#151515',
		blue: '#98A7F5',
		green: '#93D788'
	}
};
