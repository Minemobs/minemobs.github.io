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

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 md:gap-20 mx-5">
	<Card
		imageSrc={japDictImg}
		title="JapDict"
		description="A japanese dictionary made in Vala with GTK 4 and LibAdwaita"
		projectURL="https://github.com/minemobs/japdict"
	/>
	<Card
		imageSrc={websiteImg}
		title="This website"
		description="A small portfolio of my current projects"
		projectURL="https://github.com/minemobs/minemobs.github.io"
	/>
	<Card
		imageSrc={citraCloudSavesImg}
		title="Citra CloudSaves"
		description="A small application for managing Citra saves (not endorsed by the Citra team)"
		projectURL="https://github.com/minemobs/citra-cloudsaves"
	/>
</div>
