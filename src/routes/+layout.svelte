<script lang="ts">
	import '../app.css';
	import NavBar from "$lib/components/NavBar.svelte"
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<Header/>

<main class="bg-gray-400">

<NavBar />
</main>



