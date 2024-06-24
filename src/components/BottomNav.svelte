<script>
	import { Button } from 'bits-ui';
	import Icon from './Icon.svelte';
	import '../styles/bottom-nav.scss';
</script>

<div class="bottom-nav">
	<div class="nav-content">
		<Button.Root class="button type--text"><Icon src="home"></Icon></Button.Root>
		<Button.Root class="button type--text"><Icon src="search"></Icon></Button.Root>
		<div class="hide-desktop">
			<Button.Root class="button icon-button"><Icon src="pen"></Icon></Button.Root>
		</div>
		<div class="hide-desktop">
			<Button.Root class="button type--text"><Icon src="notification"></Icon></Button.Root>
		</div>
		<Button.Root class="button type--text"><Icon src="setting"></Icon></Button.Root>
	</div>
</div>
