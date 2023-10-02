<script>
	import { enhance } from '$app/forms';
	// To show & hide password
	let show_password = false;
	$: type1 = show_password ? 'text' : 'password';

	export let form;
	// $: console.log(form);

	$: console.log(details.email);

	let details = {
		name: '',
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const handleSubmit = () => {
		console.log('Submitting');
	};


</script>

<main>
	<div>
		<div class="h-screen flex flex-col items-center justify-center">
			<div class="text-center font-bold text-3xl">Create an account</div>
			<form method="POST" use:enhance >
				{#if form?.error}
					<div class="bg-red-100 border border-red-400 text-red-500 rounded-lg relative">
						<strong class="font-bold">Error</strong>
						<span class="sm:inline block">{form.error}</span>
					</div>
				{/if}

				<div class="items-center justify-center flex flex-col mt-4 mx-2">
					<input
						type="text"
						placeholder="Enter your name"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
						required
						name="name"
						id="name"
						bind:value={details.name}
					/>

					<input
						type="text"
						placeholder="Username"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
						required
						name="username"
						id="username"
						bind:value={details.username}
					/>

					<input
						type="email"
						placeholder="Email"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
						required
						name="email"
						id="email"
						bind:value={details.email}
					/>

					<div class="flex w-full mt-2">
						<input
							{type1}
							placeholder="Password"
							class="border-b-2 border-black p-1 w-full outline-none pl-2"
							required
							name="password"
							id="password"
							minlength="8"
							bind:value={details.password}
						/>
						<button
							class="bg-red-500 rounded-lg text-white p-1 shadow-md shadow-red-500 hover:bg-red-600"
							on:click={() => (show_password = !show_password)}
							>{show_password ? 'Hide' : 'Show'}</button
						>
					</div>
					<input
						type="password"
						placeholder="confirm password"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
						required
						name="confirmPassword"
						id="password2"
						bind:value={details.confirmPassword}
					/>
					<button
						class="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-lg m-10 w-full text-center cursor-pointer"
						type="submit"
					>
						SignUp
					</button>
					<div>
						Already have an account, please <span class="underline text-red-500 cursor-pointer">
							<a href="/signin">LogIn</a></span
						>
					</div>
				</div>
			</form>
		</div>
	</div>
</main>
