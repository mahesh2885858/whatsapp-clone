<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import MainSideBar from '../components/MainSideBar.svelte';
	import { enhance } from '$app/forms';
	import { defTextClass } from '$lib';
	import LucidIconWrapper from '../components/LucidIconWrapper.svelte';
	import { X } from '@lucide/svelte';
	import { setRenderNewContactForm, shouldRenderNewContactForm } from '../states/misc.svelte';
	let { children } = $props();

	const hideMailSideBar =
		page.url.pathname.includes('login') || page.url.pathname.includes('register');
</script>

<div class="flex h-screen w-screen flex-row bg-red-500">
	{#if !hideMailSideBar}
		<MainSideBar />
	{/if}
	{@render children()}
	{#if shouldRenderNewContactForm()}
		<section class="absolute flex h-screen w-screen items-center justify-center bg-red-300">
			<div class="dark:bg-secondary-d bg-secondary-l relative rounded-2xl p-10">
				<div class="absolute top-1 right-1">
					<LucidIconWrapper
						onClick={() => {
							setRenderNewContactForm(false);
						}}
					>
						<X />
					</LucidIconWrapper>
				</div>
				<h2
					class="text-text-primary-l dark:text-text-primary-d mb-4 self-center text-center text-2xl font-semibold"
				>
					New contact
				</h2>
				<form action="/" method="post" use:enhance class="flex flex-col gap-3">
					<div class="flex flex-col">
						<label class={defTextClass} for="name">Name</label>
						<input
							class="bg-main-l dark:bg-main-d placeholder:text-text-secondary-l dark:placeholder:text-text-secondary-d text-text-primary-l dark:text-text-primary-d p-2 outline-none"
							placeholder="Enter contact name here"
							type="text"
							id="name"
							name="name"
						/>
					</div>
					<div class="flex flex-col">
						<label class={defTextClass} for="mobile">Mobile</label>
						<input
							class="bg-main-l dark:bg-main-d placeholder:text-text-secondary-l dark:placeholder:text-text-secondary-d text-text-primary-l dark:text-text-primary-d p-2 outline-none"
							placeholder="Enter mobile number here"
							type="number"
							id="mobile"
							name="mobile"
						/>
					</div>
					<button
						class="bg-wgreen hover:bg-wgreen/90 inline-block cursor-pointer self-center rounded px-4 py-2"
						>Save</button
					>
				</form>
			</div>
		</section>
	{/if}
</div>
