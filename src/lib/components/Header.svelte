<script>
	function reloadPage() {
		location.reload();
	}
</script>

<header
	class="fixed z-50 flex h-16 w-full items-center bg-black px-4 text-white"
>
	<a href="/"><h1 class="md:text-xl tex-base font-bold">My Techno & House Website</h1></a>

	<nav class="hidden gap-4 md:flex ml-16">
		<a href="/songs"><h1 class="text-sm">Songs</h1></a>
		<a href="/artists"><h1 class="text-sm">Artists</h1></a>
		<a href="/songs/create"><h1 class="text-sm">Create Song</h1></a>
		<a href="/artists/create"><h1 class="text-sm">Create Artists</h1></a>
	</nav>
	
	<button
		on:click={reloadPage}
		class="ml-auto rounded bg-white px-3 py-1 text-black hover:bg-gray-100 md:flex"
	>
		Shuffle
	</button>

	
</header>
