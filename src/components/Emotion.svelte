<script>
	import '../styles/emotion.scss';
	export let type = '';
	export let emotion = '';
</script>

<button class={`emotion type--${type} emotion--${emotion}`}><slot></slot></button>
