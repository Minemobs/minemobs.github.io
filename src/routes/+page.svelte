<script>
	import icon from '../lib/images/minemobs.gif'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="about-me">
	<img src={icon} width="256" height="256" alt="my logo" class="max-w-[256px] md:h-[128px] md:w-[128px] xl:w-[256px] xl:h-[256px] mb-4 rounded-3xl shadow-md shadow-gray-500 dark:shadow-gray-800" style="object-fit: cover;"/>
	<h1>minemobs</h1>
	<h4>Dev and Sys admin</h4>
</section>

<style>
	@import '@fontsource/roboto';
	h1, h4 {
		text-align: center;
		font-size: x-large;
		font-family: 'Roboto', monospace;
		font-weight: 700;
	}
	h4 {
		color: #B3BCDF;
	}
	h1 {
		color: #C6D0F5;
	}
</style>