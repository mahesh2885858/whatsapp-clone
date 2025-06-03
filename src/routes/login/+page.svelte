<script lang="ts">
	import { enhance } from '$app/forms';
	import { defTextClass } from '$lib';
	let { form } = $props();
</script>

<div class="bg-main-l dark:bg-main-d flex h-screen w-screen items-center justify-center">
	<section class="bg-secondary-l dark:bg-secondary-d rounded-2xl p-8">
		<h1 class={defTextClass + ' text-wgreen justify-self-center text-2xl font-bold'}>Login</h1>
		<form use:enhance method="post" class="flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<label class={defTextClass} for="username">Username</label>
				<input
					class="bg-main-l dark:bg-main-d placeholder:text-text-secondary-l dark:placeholder:text-text-secondary-d text-text-primary-l dark:text-text-primary-d p-2 outline-none"
					placeholder="Enter your username"
					name="username"
					type="text"
					id="username"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label class={defTextClass} for="password">Password</label>
				<input
					class="bg-main-l dark:bg-main-d placeholder:text-text-secondary-l dark:placeholder:text-text-secondary-d text-text-primary-l dark:text-text-primary-d p-2 outline-none"
					placeholder="Enter your password here"
					type="text"
					id="password"
					name="password"
				/>
			</div>
			<button
				class="bg-wgreen hover:bg-wgreen/90 inline-block cursor-pointer self-center rounded px-4 py-2"
			>
				Login
			</button>
		</form>
		<div class="mt-4">
			<a href="/register" class="text-wgreen italic">Register here</a>
		</div>
		{#if form?.error}
			<p>{form.error}</p>
		{/if}
	</section>
</div>
