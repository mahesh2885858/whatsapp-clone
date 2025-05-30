<script lang="ts">
	import { defTextClass } from '$lib';
</script>

<div class="bg-main-l dark:bg-main-d flex h-screen w-screen items-center justify-center">
	<section class="bg-secondary-l dark:bg-secondary-d rounded-2xl p-8">
		<h1 class={defTextClass + ' text-wgreen justify-self-center text-2xl font-bold'}>Register</h1>
		<form action="/" method="post" class="flex flex-col gap-2">
			<div class="flex flex-col gap-2">
				<label class={defTextClass} for="email">Email</label>
				<input
					class="bg-main-l dark:bg-main-d placeholder:text-text-secondary-l dark:placeholder:text-text-secondary-d text-text-primary-l dark:text-text-primary-d p-2 outline-none"
					placeholder="Enter your email"
					name="email"
					type="email"
					id="email"
					required
					aria-required="true"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label class={defTextClass} for="username">Username</label>
				<input
					class="bg-main-l dark:bg-main-d placeholder:text-text-secondary-l dark:placeholder:text-text-secondary-d text-text-primary-l dark:text-text-primary-d p-2 outline-none"
					placeholder="Choose your username"
					name="username"
					type="text"
					id="username"
					required
					aria-required="true"
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
					required
					aria-required="true"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label class={defTextClass} for="confirm-password">Confirm password</label>
				<input
					class="bg-main-l dark:bg-main-d placeholder:text-text-secondary-l dark:placeholder:text-text-secondary-d text-text-primary-l dark:text-text-primary-d p-2 outline-none"
					placeholder="Confirm your password "
					type="text"
					id="confirm-password"
					name="confirm-password"
					required
					aria-required="true"
				/>
			</div>
			<button
				class="bg-wgreen hover:bg-wgreen/90 inline-block cursor-pointer self-center rounded px-4 py-2"
			>
				Register
			</button>
		</form>
		<div class="mt-4">
			<a href="/login" class="text-wgreen italic">Login here</a>
		</div>
	</section>
</div>
