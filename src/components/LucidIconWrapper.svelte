<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, onClick = () => {} }: { children: Snippet<[]>; onClick?: () => void } = $props();
</script>

<button
	onclick={onClick}
	class="hover:bg-accent-l dark:hover:bg-accent-d flex cursor-pointer justify-center rounded-md px-2 py-2"
>
	{@render children()}
</button>
