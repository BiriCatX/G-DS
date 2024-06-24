<script lang="ts">
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
		<br/>
		<Button.Root class="button type--text size--sm">type--text size--sm</Button.Root>
		<Button.Root class="button type--text size--sm" disabled>type--text size--sm</Button.Root>
		<br/>
		<Button.Root class="button type--secondary size--sm">type--secondary size--sm</Button.Root>
		<Button.Root class="button type--secondary size--sm" disabled>type--secondary size--sm</Button.Root>
		<br/>
		<Button.Root class="button type--underline size--sm">type--underline size--sm</Button.Root>
		<Button.Root class="button type--underline size--sm" disabled>type--underline size--sm</Button.Root>
		<br/>
		<Button.Root class="button type--secondary icon--md"><img src="../assets/svg/google.svg"></Button.Root>
		<Button.Root class="button type--secondary icon--md" disabled><img src="../assets/svg/google.svg"></Button.Root>
		<br/>
		<Button.Root class="button type--primary icon--md"><img src="../assets/svg/bulb.svg"></Button.Root>
		<Button.Root class="button type--primary icon--md" disabled><img src="../assets/svg/bulb.svg"></Button.Root>

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