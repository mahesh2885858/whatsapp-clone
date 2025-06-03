<script lang="ts">
	import ChatsHeader from './ChatsHeader.svelte';
	let { data }: { data: any } = $props();
</script>

<ChatsHeader />
{#if !data.userDetails.rooms}
	<p>No rooms found</p>
{/if}
