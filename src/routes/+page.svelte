<script>
	import icon from '../lib/images/minemobs.webm';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="about-me">
	<video
		muted
		autoplay
		loop
		width="256"
		height="256"
		class="mb-4 max-w-[256px] rounded-3xl shadow-md shadow-gray-500 dark:shadow-gray-800 md:h-[128px] md:w-[128px] xl:h-[256px] xl:w-[256px]"
		style="object-fit: cover;">
		<source src={icon} type="video/webm" />
	</video>
	<h1 class="text-center font-['Roboto'] text-xl font-bold text-[#C6D0F5]">minemobs</h1>
	<h2 class="text-md text-center font-['Roboto'] font-bold text-[#B3BCDF]">Dev and Sys admin</h2>
</section>
