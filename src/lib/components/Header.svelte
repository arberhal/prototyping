<script>
	function alertFunction() {
		alert('Button clicked!');
	}
</script>

<header class="fixed top-0 left-0 z-50 flex h-16 w-full items-center px-4 text-white shadow">
	<h1 class="text-xl font-bold">My Music App</h1>
	<button
		on:click={alertFunction}
		class="ml-auto rounded bg-white px-3 py-1 text-blue-600 hover:bg-gray-100"
	>
		Shuffle
	</button>
</header>
