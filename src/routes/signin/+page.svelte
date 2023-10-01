<script></script>

<main>
	<div class="h-screen flex items-center justify-center">
		<div class="h-[400px] w-[300px] mt-16">
			<div class="text-center font-semibold text-lg underline">Sign-In</div>
			<div class="items-center justify-center flex flex-col mt-4 mx-2">
				<input
					type="email"
					placeholder="Email/Username"
					class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
				/>

				<input
					type="password"
					placeholder="Password"
					class="border-b-2 border-black p-1 w-full outline-none mt-3 px-2"
				/>
				<button class="border-2 p-1">Show</button>
				<button
					class="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-lg m-10 w-full text-center cursor-pointer"
				>
					SignIn
				</button>
				<div>
					Don't have an account, <span class="underline text-red-500 cursor-pointer">
						<a href="/signup">SignUp</a>
					</span>
				</div>
			</div>
		</div>
	</div>
</main>
