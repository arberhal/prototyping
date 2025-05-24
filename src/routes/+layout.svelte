<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<Header />

<NavBar />
<main class="ml-[25%] p-4 pt-16">
	{@render children()}
</main>
