<script>
	import Card from '../Card.svelte';
	import japDict from '../../lib/images/japdict.png';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex flex-1 justify-center items-center gap-20">
	<Card
		imageSrc={japDict}
		title="JapDict"
		description="A japanese dictionary made in Vala with GTK 4 and Libadwaita"
		projectURL="https://github.com/minemobs/japdict"
	/>
	<Card
		imageSrc={japDict}
		title="This website"
		description="A small portfolio of my current projects"
		projectURL="https://github.com/minemobs/minemobs.github.io"
	/>
</div>
