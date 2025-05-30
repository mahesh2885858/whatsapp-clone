<script lang="ts">
	import { EllipsisVertical, MessageSquarePlus, Search } from '@lucide/svelte';
	import LucidIconWrapper from '../LucidIconWrapper.svelte';
	import { IconClassValue } from '$lib';
</script>

<section class="mb-3 flex flex-row items-center justify-between px-3 pt-2">
	<h1 class="text-text-primary-l dark:text-text-primary-d text-xl font-bold">Whatsapp</h1>
	<div class="flex flex-row items-center">
		<LucidIconWrapper>
			<MessageSquarePlus size={25} class={IconClassValue} />
		</LucidIconWrapper>
		<LucidIconWrapper>
			<EllipsisVertical size={25} class={IconClassValue} />
		</LucidIconWrapper>
	</div>
</section>
<section class="px-3">
	<div
		class=" dark:bg-secondary-d bg-secondary-l flex flex-row items-center gap-2 rounded-3xl px-3 py-2"
	>
		<Search size={18} class={IconClassValue} />
		<input
			type="text"
			placeholder="Search or start a new chat"
			class="text-text-primary-l dark:text-text-primary-d focus:outline-accent-l dark:focus:outline-accent-d flex-[1] outline-2 outline-transparent"
		/>
	</div>
</section>
