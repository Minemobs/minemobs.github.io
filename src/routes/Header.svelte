<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
</script>

<header class="flex justify-between pl-2 pr-2 shadow-md">
	<div class="h-12 w-12">
		<a
			href="https://github.com/minemobs/minemobs.github.io"
			class="flex h-full w-full items-center justify-center">
			<img src={github} alt="GitHub" class="h-8 w-8 object-contain" />
		</a>
	</div>

	<nav class="flex justify-center">
		<ul class="relative m-0 flex h-12 list-none items-center justify-center gap-2 p-0">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="relative h-full">
				<a href="/">Home</a>
			</li>
			<li
				aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
				class="relative h-full">
				<a href="/projects">My projects</a>
			</li>
		</ul>
	</nav>

	<div class="h-12 w-12">
		<a
			href="https://github.com/minemobs/minemobs.github.io"
			class="flex h-full w-full items-center justify-center">
			<img src={github} alt="GitHub" class="h-8 w-8 object-contain" />
		</a>
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
		color: whitesmoke;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
