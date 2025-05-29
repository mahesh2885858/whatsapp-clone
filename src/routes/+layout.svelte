<script lang="ts">
	import '../app.css';
	import MainSideBar from '../components/MainSideBar.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen w-screen flex-row bg-red-500">
	<MainSideBar />
	{@render children()}
</div>
