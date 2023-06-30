<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app flex flex-1 justify-start bg-[#363a4f]">
	<Header />

	<main class="flex flex-1 items-center justify-center space-y-4 bg-[#1e2030]">
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
