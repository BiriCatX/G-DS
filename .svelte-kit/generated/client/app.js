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
	() => import('./nodes/20')
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
		"/input": [12],
		"/pagination": [13],
		"/radio-group": [14],
		"/range-calendar": [15],
		"/select": [16],
		"/sidebar": [17],
		"/switch": [18],
		"/tabs": [19],
		"/textarea": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';