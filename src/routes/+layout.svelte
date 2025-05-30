<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import MainSideBar from '../components/MainSideBar.svelte';

	let { children } = $props();

	const showMainSideBar = !page.url.pathname.includes('login');
</script>

<div class="flex h-screen w-screen flex-row bg-red-500">
	{#if showMainSideBar}
		<MainSideBar />
	{/if}
	{@render children()}
</div>
