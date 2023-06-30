<script lang="ts">
	export let imageSrc: string;
	export let title: string;
	export let description: string;
	export let projectURL: string;
	function isImage() {
		return imageSrc.endsWith('.png') || imageSrc.endsWith('.jpg') || imageSrc.endsWith('.jpeg');
	}
</script>

<div class="max-w-xs rounded-md bg-[#24273a] shadow-md shadow-indigo-950">
	<div class="mt-3 pl-2 pr-2 shadow md:flex-shrink-0">
		{#if isImage()}
			<img
				class="h-full w-full rounded-lg rounded-b-none border-none object-cover"
				src={imageSrc}
				alt="Project" />
		{:else}
			<video
				width="320"
				height="240"
				autoplay
				loop
				muted
				class="h-full w-full rounded-lg rounded-b-none border-none object-cover">
				<source src={imageSrc} />
			</video>
		{/if}
	</div>
	<div class="mb-2 px-4 pt-3 md:px-6">
		<h4 class="mb-3 text-xl font-semibold tracking-tight text-sky-300">{title}</h4>
		<p class="mb-2 leading-normal text-white">{description}</p>
		<a href={projectURL}>
			<div class="m-2 flex flex-1 justify-center rounded-md bg-slate-700 py-3 md:m-5">
				<button class="text-white">Github Repo</button>
			</div>
		</a>
	</div>
</div>
