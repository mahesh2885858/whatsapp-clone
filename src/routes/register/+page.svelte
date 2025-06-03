<script lang="ts">
	import { enhance } from '$app/forms';
	import { defTextClass } from '$lib';
	import { ZodError } from 'zod';
	import type { PageProps } from './$types';
	let { data, form }: PageProps = $props();
	let isLoading = $state(false);
	const errors: { [key: string]: string } = $state({
		email: '',
		username: '',
		password: '',
		cPassword: ''
	});
	const verifyFormData = (formData: FormData) => {
		const data = Object.fromEntries(formData.entries());
		Object.keys(data).forEach((key) => {
			if (data[key].toString().trim().length <= 2) {
				if (key === 'confirm-password') {
					errors.cPassword = 'Required';
				} else {
					errors[key] = 'required';
				}
			}
		});
	};

	const onChange = (field: string) => {
		errors[field] = '';
	};

	$effect(() => {
		if (form?.error) {
			form.error.forEach((err) => {
				switch (err.field) {
					case 'username':
					case 'email':
					case 'password':
						errors[err.field] = err.message;
						break;

					default:
						break;
				}
			});
		}
	});
</script>

<div class="bg-main-l dark:bg-main-d flex h-screen w-screen items-center justify-center">
	<section class="bg-secondary-l dark:bg-secondary-d rounded-2xl p-8">
		<h1 class={defTextClass + ' text-wgreen justify-self-center text-2xl font-bold'}>Register</h1>
		<form
			use:enhance={({ cancel, formData }) => {
				isLoading = true;
				verifyFormData(formData);
				// cancel();
				return async ({ update }) => {
					update();
					isLoading = false;
				};
			}}
			method="post"
			class="flex flex-col gap-2"
			name="register"
		>
			<div class="flex flex-col">
				<div class="flex flex-col gap-2">
					<label class={defTextClass} for="email">Email</label>
					<input
						onchange={(e) => onChange('email')}
						class="bg-main-l dark:bg-main-d placeholder:text-text-secondary-l dark:placeholder:text-text-secondary-d text-text-primary-l dark:text-text-primary-d p-2 outline-none"
						placeholder="Enter your email"
						name="email"
						type="email"
						id="email"
						required
						aria-required="true"
					/>
				</div>
				<p class="text-[13px] text-red-500">{errors.email}</p>
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
					onchange={(e) => onChange('username')}
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
					onchange={(e) => onChange('password')}
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
					onchange={(e) => onChange('cPassword')}
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
		{#if form?.success}
			<p>it's done go to login page</p>
		{/if}
		{#if form?.error}
			<p>{typeof form?.error}</p>
		{/if}
		{#if isLoading}
			<p>Loading.....!</p>
		{/if}
	</section>
</div>
