<script>
	import Icon from '@iconify/svelte';
</script>

<main>
	<div class="flex m-2 border-2 h-[97vh] border-zinc-500 rounded-lg">
		<!-- Side Bar -->
		<div class="w-[30%] border-r-2 border-zinc-500">
			<div class="flex justify-between px-4 py-2 shadow-md items-center">
				<div class="flex space-x-1 items-center">
					<div class="text-2xl cursor-pointer"><Icon icon="iconamoon:profile-circle-fill" /></div>
					<div class="cursor-pointer">Name</div>
				</div>
				<div class="text-2xl cursor-pointer"><Icon icon="material-symbols:edit-outline" /></div>
			</div>

			<!-- <div>
				<ul class="items-center justify-center flex flex-col pt-5">
					<li>Person 1</li>
					<li>Person 2</li>
					<li>Person 3</li>
					<li>Person 4</li>
					<li>Person 5</li>
				</ul>
			</div> -->
		</div>

		<div class=" w-[70%]">
			<!-- Nav Bar -->
			<div>
				<div class="flex justify-between px-4 py-2 shadow-md items-center">
					<div class="flex space-x-5 items-center">
						<div class="text-2xl cursor-pointer"><Icon icon="iconamoon:profile-circle-fill" /></div>
						<div class="cursor-pointer">Name</div>
					</div>
					<div class="text-2xl cursor-pointer"><Icon icon="charm:menu-kebab" /></div>
				</div>

				<!-- Messages Area -->
				<div class="w-full h-[82vh] justify-center items-center flex">message area</div>

				<!-- Create message area -->
				<div class="border-t-2 border-zinc-500">
					<div class="py-[1px] flex gap-2 mx-2">
						<button class="font-bold px-2 rounded-md my-1 text-center text-2xl"
							><Icon icon="mdi:emoji-outline" /></button
						>
						<input type="text" placeholder="Enter your messages" class="w-full p-2 outline-none" />
						<button
							class="bg-red-500 hover:bg-red-600 text-white font-bold px-2 rounded-md my-1 text-center text-lg"
							><Icon icon="bi:send-fill" /></button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
