<script>
	import Bg from '../assets/hplogo.png';
</script>

<main>
	<div class="justify-center items-center flex flex-col h-screen">
		<img src={Bg} alt="" class="cursor-pointer" />
		<div class="font-extrabold tracking-widest text-2xl">Hamro Chat</div>

		<button class="mt-10 hover:scale-110 transition-all duration-300">
			<a
				href="/signin"
				class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold">LogIn</a
			>
		</button>
		<button class="m-5 hover:scale-110 transition-all duration-300">
			<a
				href="/signup"
				class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold">SignUp</a
			>
		</button>
	</div>
</main>
