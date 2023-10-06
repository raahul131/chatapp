<script>
	import Icon from '@iconify/svelte';
	import { Message } from '../../grpcRequests/MessageReq';
	import { userDetails } from '../../store/tokenStore';
	import Logo from '../../assets/hplogo.png';

	let details;

	let userInput;

	let messages = [];

	userDetails.subscribe((value) => {
		details = value;
	});

	var source = new EventSource('http://192.168.28.35:8080/live');
	source.onmessage = function (event) {
		var eventData = JSON.parse(event.data);

		const message = {
			message: eventData.message,
			userName: eventData.userEntity.userName
		};
		messages = [...messages, message];
	};

	function handleMessage() {
		let response = Message(userInput, details.userName, details.accessToken);
		response
			.then((res) => {
				console.log(res);
				userInput = '';
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleEnterPress(e) {
		if (e.keyCode === 13) {
			handleMessage();
		}
	}
</script>

<main>
	<div class="flex m-2 border-2 h-[97vh] border-zinc-500 rounded-lg">
		<!-- Side Bar -->
		<!-- <div class="w-[30%] border-r-2 border-zinc-500">
			<div class="flex justify-between px-4 py-2 shadow-md items-center">
				<div class="flex space-x-1 items-center">
					<div class="text-2xl cursor-pointer"><Icon icon="iconamoon:profile-circle-fill" /></div>
					<div class="cursor-pointer">Name</div>
				</div>
				<div class="text-2xl cursor-pointer"><Icon icon="material-symbols:edit-outline" /></div>
			</div>
		</div> -->

		<div class="w-full">
			<!-- Nav Bar -->
			<div>
				<div class="flex justify-between px-4 py-2 shadow-md items-center">
					<div class="flex space-x-5 items-center">
						<div class="text-2xl cursor-pointer"><img src={Logo} class="h-10" alt="" /></div>
						<div class="cursor-pointer font-bold">Hamro Chat</div>
					</div>
					<div class="text-2xl cursor-pointer"><Icon icon="charm:menu-kebab" /></div>
				</div>

				<!-- Messages Area -->
				<div
					class="h-[82vh] justify-start items-start flex-col p-5 w-full flex-wrap overflow-y-scroll"
				>
					{#if messages.length === 0}
						<div class="text-center text-2xl">No messages</div>
					{:else}
						{#each messages as message}
							<div class="mt-[12px]">
								<div class="bg-[#781f19] text-white rounded-md p-1">
									<p class=" whitespace-pre-wrap break-words break-all items-center">
										{message.message}
									</p>
								</div>
								<p class="text-xs font-light">
									{message.userName}
								</p>
							</div>
						{/each}
					{/if}
				</div>

				<!-- Create message area -->
				<div class="border-t-2 border-zinc-500">
					<div class="py-[1px] flex gap-2 mx-2">
						<button class="font-bold px-2 rounded-md my-1 text-center text-2xl"
							><Icon icon="mdi:emoji-outline" /></button
						>
						<input
							type="text"
							placeholder="Enter your messages"
							class="w-full p-2 outline-none"
							bind:value={userInput}
							on:keydown={handleEnterPress}
						/>
						<button
							class="bg-red-500 hover:bg-red-600 text-white font-bold px-2 rounded-md my-1 text-center text-lg"
							on:click={handleMessage}><Icon icon="bi:send-fill" /></button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
