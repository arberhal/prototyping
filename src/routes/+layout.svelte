<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Header from '$lib/components/Header.svelte';

	const { children, data } = $props<{
		children: any;
		data: {
			houseArtists: any[]; // oder besser: Array<{ name: string; ... }>
		};
	}>();
</script>

<Header />
<NavBar houseArtists={data.houseArtists} />

<main class="ml-[25%] p-4 pt-16">
	{@render children()}
</main>
