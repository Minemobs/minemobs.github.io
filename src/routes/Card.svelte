<script lang="ts">
    export let imageSrc: string;
	export let title: string;
	export let description: string;
	export let projectURL: string;
</script>

<div class="max-w-xs rounded-md bg-[#24273a]">
	<img height="48" class="object-cover overflow-hidden rounded-md mt-3 w-full h-48" src={imageSrc} alt="Project" />
	<div class="px-6 py-4">
		<h4 class="mb-3 text-xl font-semibold tracking-tight text-sky-300">{title}</h4>
		<p class="mb-2 leading-normal text-white">{description}</p>
		<a href={projectURL}>
			<div class="m-5 p-3 bg-slate-700 rounded-md flex flex-1 justify-center">
				<button class="text-white">Github Repo</button>
			</div>
		</a>
	</div>
</div>
