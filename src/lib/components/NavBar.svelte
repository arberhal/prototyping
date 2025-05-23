<script>
	const {
		links = [
			{
				href: '/songs/create',
				label: 'Add your first Song',
				buttonLabel: 'Create Song',
				subTitle: "It's easy—we'll help you",
			},
			{
				href: '/artists/create',
				label: 'Add your first Artist',
				buttonLabel: 'Create Artist',
				subTitle: 'The easiest first step',
			},
		],
	} = $props();
</script>

<nav class="fixed top-16 bottom-0 left-0 m-2 w-1/4 rounded-xl bg-[#121212] p-4 overflow-y-auto">
	<ul class="space-y-4">
		{#each links as { href, label, buttonLabel, subTitle }}
			<li class="flex flex-col justify-center gap-2 rounded-lg bg-[#202020] p-4 text-white">
				<p class="text-base">{label}</p>
				<p class="text-xs opacity-75">{subTitle}</p>
				<a href={href} class="mt-2 w-max rounded-full bg-white p-2 text-sm text-black">
					{buttonLabel}
				</a>
			</li>
		{/each}
	</ul>
</nav>
