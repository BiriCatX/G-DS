<script>
	import { Button } from 'bits-ui';
	import '../styles/app.scss';
	import '../styles/global.scss';
</script>

<section class="container">
	<div class="main">
		<Button.Root class="button type--primary size--md">type--primary size--md</Button.Root>
		<Button.Root class="button type--primary size--md" disabled>type--primary size--md</Button.Root>
		<br/>
		<Button.Root class="button type--text size--md">type--text size--md</Button.Root>
		<Button.Root class="button type--text size--md" disabled>type--text size--md</Button.Root>
		<br/>
		<Button.Root class="button type--secondary size--md">type--secondary size--md </Button.Root>
		<Button.Root class="button type--secondary size--md" disabled>type--secondary size--md</Button.Root>
		<br/>
		<Button.Root class="button type--primary size--sm">type--primary size--sm</Button.Root>
		<Button.Root class="button type--primary size--sm" disabled>type--primary size--sm</Button.Root>
	</div>
</section>

<style>
	.container {
		display: flex;
		justify-content: center;
        padding: 30px;
	}

    

    .main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.35em;
	}
</style>