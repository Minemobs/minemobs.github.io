<script>
	import Card from '../Card.svelte';
	import japDictImg from '../../lib/images/japdict.png';
	import websiteImg from '../../lib/images/website.png';
	import citraCloudSavesImg from '../../lib/images/citraCloudSaves.webm';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div
	class="mx-5 my-5 grid grid-cols-1 items-center justify-center gap-10 gap-y-5 md:grid-cols-2 md:gap-20 md:gap-y-10 lg:grid-cols-3">
	<Card
		imageSrc={japDictImg}
		title="JapDict"
		description="A japanese dictionary made in Vala with GTK 4 and LibAdwaita"
		projectURL="https://github.com/minemobs/japdict" />
	<Card
		imageSrc={websiteImg}
		title="This website"
		description="A small portfolio of my current projects"
		projectURL="https://github.com/minemobs/minemobs.github.io" />
	<Card
		imageSrc={citraCloudSavesImg}
		title="Citra CloudSaves"
		description="A small application for managing Citra saves (not endorsed by the Citra team)"
		projectURL="https://github.com/minemobs/citra-cloudsaves" />
</div>
