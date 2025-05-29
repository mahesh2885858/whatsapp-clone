<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, onClick = () => {} }: { children: Snippet<[]>; onClick?: () => void } = $props();
</script>

<button
	onclick={onClick}
	class="flex cursor-pointer justify-center rounded-md py-2 hover:bg-red-300"
>
	{@render children()}
</button>
