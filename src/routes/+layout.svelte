<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app bg-[#363a4f] flex flex-1 justify-start">
	<Header />

	<main class="bg-[#1e2030] space-y-4 flex flex-1 justify-center items-center">
		<slot />
	</main>

	<footer>
		<a href="https://github.com/minemobs" class="text-white">© 2023 minemobs.</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
