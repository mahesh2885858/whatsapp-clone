<script lang="ts">
	import { MessageSquareText, CircleDashed, Rss, Users, Settings, Moon, Sun } from '@lucide/svelte';
	import LucidIconWrapper from './LucidIconWrapper.svelte';
	import { getTheme, toggleTheme } from '../states/theme.svelte';
	import type { Component, IconProps } from '@lucide/svelte';
	import type { ClassValue } from 'svelte/elements';
	const classValue: ClassValue = 'text-text-primary-l dark:text-text-primary-d';

	$effect.pre(() => {
		document.documentElement.classList.toggle('dark', getTheme() === 'dark');
	});
</script>

<div class="dark:bg-main-d bg-main-l h-full w-[65px]">
	<div class="flex h-full w-full flex-col items-center justify-between p-3">
		<div class="flex w-full flex-col gap-5">
			<LucidIconWrapper>
				<MessageSquareText class={classValue} />
			</LucidIconWrapper>
			<LucidIconWrapper>
				<CircleDashed class={classValue} />
			</LucidIconWrapper>
			<LucidIconWrapper>
				<Rss class={classValue} />
			</LucidIconWrapper>
			<LucidIconWrapper>
				<Users class={classValue} />
			</LucidIconWrapper>
		</div>
		<div class="flex w-full flex-col gap-5">
			<LucidIconWrapper>
				<Settings class={classValue} />
			</LucidIconWrapper>
			<LucidIconWrapper onClick={toggleTheme}>
				{#if getTheme() === 'dark'}
					<Moon class={classValue} />
				{:else}
					<Sun class={classValue} />
				{/if}
			</LucidIconWrapper>
		</div>
	</div>
</div>
