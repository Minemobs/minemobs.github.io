<script>
	import Card from '../Card.svelte';
	import japDictImg from '../../lib/images/japdict.png';
	import websiteImg from '../../lib/images/website.png';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex flex-1 justify-center items-center max-sm:gap-10 md:gap-20 mx-5">
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
</div>
