<script>
	import icon from '../lib/images/minemobs.webm'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="about-me">
	<video muted autoplay loop width="256" height="256" class="max-w-[256px] md:h-[128px] md:w-[128px] xl:w-[256px] xl:h-[256px] mb-4 rounded-3xl shadow-md shadow-gray-500 dark:shadow-gray-800" style="object-fit: cover;">
		<source src={icon} type="video/webm" />
	</video>
	<h1 class="text-[#C6D0F5] text-center text-xl font-['Roboto'] font-bold">minemobs</h1>
	<h2 class="text-[#B3BCDF] text-center text-md font-['Roboto'] font-bold">Dev and Sys admin</h2>
</section>