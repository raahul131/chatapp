<script>
	import { login } from '../../grpcRequests/SignIn';
	import { userDetails } from '../../store/tokenStore';
	import { goto } from '$app/navigation';

	// import { setDetails } from '../../store/tokenStore';

	let show_password = false;
	$: type1 = show_password ? 'text' : 'password';

	export let form;

	// $: console.log(logInDetails.username);
	let logInDetails = {
		username: '',
		password: ''
	};

	let { username, password } = logInDetails;

	let details;

	userDetails.subscribe((value) => {
		details = value;
	});

	function handleLogIn(e) {
		e?.preventDefault();
		let response = login(logInDetails.username, logInDetails.password);
		response
			.then((res) => {
				// sessionStorage.setItem(
				// 	'details',
				// 	JSON.stringify({
				// 		userName: res.userName,
				// 		token: res.accessToken
				// 	})
				// );
				// setDetails(res.userName, res.accessToken);
				userDetails.update(() => ({
					userName: res?.userName,
					accessToken: res?.accessToken
				}));

				// console.log('sign inside here');
				console.log('response', res);
				goto('/chatpage');
				console.log('values', details);
			})
			.catch((err) => {
				console.log('Error', err);
			});
	}
</script>

<main>
	<div class="h-screen flex items-center justify-center">
		<div class="h-[400px] w-[300px] mt-16">
			<div class="text-center font-semibold text-lg underline">Log-In</div>

			<form method="POST">
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
							type="password"
							placeholder="Password"
							class="border-b-2 border-black p-1 w-full outline-none pl-2"
							required
							name="password"
							id="password"
							bind:value={logInDetails.password}
						/>
						<!-- <button
							class="bg-red-500 hover:bg-red-600 rounded-lg text-white p-1 shadow-md shadow-red-500"
							on:click={() => (show_password = !show_password)}
							>{show_password ? 'Hide' : 'Show'}</button
						> -->
					</div>
					<button
						class="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-lg m-10 w-full text-center cursor-pointer"
						type="submit"
						on:click={handleLogIn}
					>
						LogIn
					</button>
				</div>
			</form>
		</div>
	</div>
</main>
