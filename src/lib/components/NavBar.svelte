<script>
const links = [
{href: "/songs", label: "Songs"},
{href: "/artists", label: "Artists"}
]
</script>

<nav class="w-[250px] h-[100vh] p-2 bg-[#121212] fixed">
    <ul>

        {#each links as {href, label}}
        <li class="text-[#FFF]"><a href={href}>{label}</a></li>
        {/each}

    </ul>
</nav>