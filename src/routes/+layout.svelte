<script>
	import Header from './Header.svelte';
	import './styles.css';
	let dark = true;
</script>

<div class="flex min-h-[100dvh] flex-1 flex-col justify-start transition-colors" class:dark>
	<Header bind:dark />

	<main
		class="my-auto box-border flex w-full flex-1 items-center justify-center space-y-4 bg-[#d0d3da] dark:bg-[#1e2030] p-4">
		<slot />
	</main>

	<footer class="flex items-center justify-center bg-[#DCE0E8] p-3 dark:bg-[#363a4f] shadow-[#9CA0B0] dark:shadow-[#939AB7]">
		<a href="https://github.com/minemobs" class="font-bold text-black dark:text-white"
			>© 2023 minemobs.</a>
	</footer>
</div>
