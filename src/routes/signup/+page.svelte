<script>
</script>

<main>
	<div>
		<div class="h-screen flex items-center justify-center">
			<div class="h-[400px] w-[300px]">
				<div class="text-center font-semibold text-lg underline">Create an account</div>
				<div class="items-center justify-center flex flex-col mt-4 mx-2">
					<input
						type="text"
						placeholder="First Name"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
					/>
					<input
						type="text"
						placeholder="Last name"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
					/>

					<input
						type="email"
						placeholder="Email"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
					/>

					<input
						type="password"
						placeholder="Password"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
					/>
					<input
						type="password"
						placeholder="confirm password"
						class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
					/>
					<button
						class="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-lg m-10 w-full text-center cursor-pointer"
					>
						SignUp
					</button>
					<div>
						Already have an account, please <span class="underline text-red-500 cursor-pointer">
							<a href="/signin">SignIn</a></span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
