export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/accordian": [3],
		"/alert-dialog": [4],
		"/aspect-ratio": [5],
		"/avatar": [6],
		"/button": [7],
		"/calendar": [8],
		"/checkbox": [9],
		"/colorguidance": [10],
		"/dialog": [11],
		"/dropdown": [12],
		"/input": [13],
		"/menubar": [14],
		"/pagination": [15],
		"/radio-group": [16],
		"/range-calendar": [17],
		"/select": [18],
		"/sidebar": [19],
		"/switch": [20],
		"/tabs": [21],
		"/textarea": [22]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';