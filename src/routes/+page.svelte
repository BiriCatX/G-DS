<script>
	import setTheme from '../lib/script';
	import { onMount } from 'svelte';
	let theme = '_theme';
    import { Button } from "bits-ui";

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
    <Button.Root class="button type--primary size--sm"
    on:click={() => switchTheme('_theme')}>Theme 1</Button.Root
    >
    <Button.Root class="button type--secondary size--sm"
    on:click={() => switchTheme('_darktheme')}>Theme 2</Button.Root
    >
</div>

