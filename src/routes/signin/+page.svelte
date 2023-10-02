<script>
	let show_password = false;
	$: type1 = show_password ? 'text' : 'password';

	export let form;

	$: console.log(logInDetails.username);

	let logInDetails = {
		username: '',
		password: ''
	};



	const handleSubmit = () => {
		console.log('Submitting');
	};
</script>

<main>
	<div class="h-screen flex items-center justify-center">
		<div class="h-[400px] w-[300px] mt-16">
			<div class="text-center font-semibold text-lg underline">Log-In</div>

			<form action="/login" method="GET">
				{#if form?.error}
					<div>{form.error}</div>
				{/if}
				<div class="items-center justify-center flex flex-col mt-4 mx-2">
					<input
						type="username"
						placeholder="Username"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 pl-2"
						required
						name="username"
						id="username"
						bind:value={logInDetails.username}
					/>

					<div class="flex w-full mt-6">
						<input
							{type1}
							placeholder="Password"
							class="border-b-2 border-black p-1 w-full outline-none pl-2"
							required
							name="password"
							id="password"
							bind:value={logInDetails.password}
						/>
						<button
							class="bg-red-500 hover:bg-red-600 rounded-lg text-white p-1 shadow-md shadow-red-500"
							on:click={() => (show_password = !show_password)}
							>{show_password ? 'Hide' : 'Show'}</button
						>
					</div>
					<button
						class="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-lg m-10 w-full text-center cursor-pointer"
						type="submit"
					>
						LogIn
					</button>
					<div>
						Don't have an account, <span class="underline text-red-500 cursor-pointer">
							<a href="/signup">SignUp</a>
						</span>
					</div>
				</div>
			</form>
		</div>
	</div>
</main>
