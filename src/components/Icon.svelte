<script>
	import '../styles/icon.scss';
	export let src;
	const assetsPath = '/assets/svg/';
	const iconPath = src ? `${assetsPath}${src}.svg` : '';
	export let alt = 'icon';
	export let iconClass = 'icon';
</script>

<img src={iconPath} {alt} class={iconClass} />
