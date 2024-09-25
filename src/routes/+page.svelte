<script>
	import setTheme from '../lib/script';
	import { onMount } from 'svelte';
	let theme = '_theme';

	/**
   * @param {string} newTheme
   */
	function switchTheme(newTheme) {
		theme = newTheme;
		setTheme(theme);
	}

	//	onMount(() => setTheme(theme));
</script>

<div class="container">
	<button on:click={() => switchTheme('_theme')}>Theme - 1</button>
	<button on:click={() => switchTheme('_darktheme')}>Theme - 2</button>
</div>

