<script>
    import '../styles/input.scss';
	export let placeholder = 'Placeholder';
	export let type = 'text';
</script>

<div class="input-main">
    <slot></slot>
	<input class="input-box" type={type} placeholder={placeholder} />
</div>

