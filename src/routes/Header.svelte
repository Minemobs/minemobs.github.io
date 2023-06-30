<script lang="ts">
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import moon from '$lib/images/moon.svg';
	import sun from '$lib/images/sun.svg';
	import { onMount } from 'svelte';
	export let dark: boolean;
	const switchTheme = () => (dark = !dark);
</script>

<header class="flex justify-between pl-2 pr-2 shadow-md shadow-[#BCC0CC] dark:shadow-[#939AB7] bg-[#DCE0E8] dark:bg-[#363a4f]">
	<div class="h-12 w-12">
		<a
			href="https://github.com/minemobs/minemobs.github.io"
			class="flex h-full w-full items-center justify-center dark:stroke-black">
			<img src={github} alt="GitHub" class="h-8 w-8 object-contain invert dark:invert-0" />
		</a>
	</div>

	<nav class="flex justify-center">
		<ul class="relative m-0 flex h-12 list-none items-center justify-center gap-2 p-0">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="relative h-full">
				<a href="/" class="text-black hover:text-red-600 dark:hover:text-red-600 dark:text-white">Home</a>
			</li>
			<li
				aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
				class="relative h-full">
				<a href="/projects" class="text-black hover:text-red-600 dark:hover:text-red-600 dark:text-white">My projects</a>
			</li>
		</ul>
	</nav>

	<div class="h-12 w-12">
		<button
			type="button"
			on:click={switchTheme}
			class="flex h-full w-full items-center justify-center">
			{#if dark}
				<img src={sun} class="h-8 w-8 invert dark:text-white" alt="Sun" width="32" height="32" />
			{:else}
				<img src={moon} class="h-8 w-8 dark:text-white" alt="Moon" width="32" height="32" />
			{/if}
		</button>
	</div>
</header>

<style>
	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
