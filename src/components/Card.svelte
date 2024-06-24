<script>
	import { Avatar, Button } from 'bits-ui';
	import Emotion from './Emotion.svelte';
	import Icon from './Icon.svelte';

	export let name = 'Alekoi';
	export let time = 'Jun 1, 2024 at 3:24 pm';
</script>

<div class="container">
	<div class="top-row">
		<div class="full-details">
			<div class="line"></div>
			<div class="main">
				<Avatar.Root class="avatar"
					><Avatar.Image
						src="https://avatars.continue.cx/beam/80/524541?colors=1b325f,9cc4e4,e9f2f9,3a89c9,f26c4f"
					/><Avatar.Fallback /></Avatar.Root
				>
				<div class="right">
					<div class="main-details">
						<div>{name}</div>
						<div class="verb">is</div>
						<Emotion type="text" emotion="positive">Happy</Emotion>
					</div>
					<div class="time">{time}</div>
				</div>
			</div>
		</div>
		<Button.Root class="button type--text"><Icon src="more"></Icon></Button.Root>
	</div>
	<div class="journal-entry">
		<slot>Placeholder</slot>
	</div>
	<div class="comment-group">
		<Avatar.Root class="avatar small"
			><Avatar.Image
				src="https://avatars.continue.cx/beam/80/524541?colors=1b325f,9cc4e4,e9f2f9,3a89c9,f26c4f"
			/><Avatar.Fallback /></Avatar.Root
		>
		<div class="comment-entry">Yay Progress!!</div>
	</div>

	<hr class="border" />
</div>

<style lang="scss">
	@import '../styles/colors.scss';
	@import '../styles/fonts.scss';

	.main-details,
	.main {
		display: flex;
		gap: 4px;
		justify-content: center;
		align-items: center;
		color: $text-primary;

		@extend %font-t2-1;
	}

	.main {
		gap: 12px !important;
	}

	.time {
		color: $text-secondary;

		@extend %font-t2-1;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.verb {
		color: $text-secondary;
	}

	.line {
		background-color: $emotion-positive;
		height: 30px;
		width: 5px;
		border-radius: 3px;
	}

	.full-details {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.top-row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.journal-entry {
		width: 100%;
		color: $text-primary;
		max-height: 92px;
		overflow: hidden;
		text-overflow: ellipsis;
		@extend %font-t1-1;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 100%;
	}

	.border {
		color: $border;
		width: 100%;
		margin: 0px;
		outline: none;
		border: 1px solid $border;
	}

	.comment-group {
		display: flex;
		gap: 8px;
	}

	.comment-entry {
		width: 100%;
		color: $text-primary;
		height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;

		@extend %font-t2-1;
	}
</style>
