<script lang="ts">
    export let imageSrc: string;
	export let title: string;
	export let description: string;
	export let projectURL: string;
	function isImage() {
		return imageSrc.endsWith(".png") || imageSrc.endsWith(".jpg") || imageSrc.endsWith(".jpeg");
	}
</script>

<div class="max-w-xs rounded-md bg-[#24273a]">
	<div class="mt-3 pl-2 pr-2 md:flex-shrink-0 shadow">
		{#if isImage()}
			<img class="object-cover border-none w-full h-full rounded-lg rounded-b-none" src={imageSrc} alt="Project" />
		{:else}
			<video width="320" height="240" autoplay loop muted class="object-cover border-none w-full h-full rounded-lg rounded-b-none">
				<source src={imageSrc} />
			</video>
		{/if}
	</div>
	<div class="sm:px-4 md:px-6 pt-3 mb-2">
		<h4 class="mb-3 text-xl font-semibold tracking-tight text-sky-300">{title}</h4>
		<p class="mb-2 leading-normal text-white">{description}</p>
		<a href={projectURL}>
			<div class="max-sm:m-2 md:m-5 py-3 bg-slate-700 rounded-md flex flex-1 justify-center">
				<button class="text-white">Github Repo</button>
			</div>
		</a>
	</div>
</div>
