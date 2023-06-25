<script lang="ts">
    export let imageSrc: string;
	export let title: string;
	export let description: string;
	export let projectURL: string;
</script>

<div class="max-w-xs rounded-md bg-[#24273a]">
	<div class="mt-3 pl-2 pr-2 md:flex-shrink-0 shadow">
		<img class="object-cover border-none w-full h-full rounded-lg rounded-b-none" src={imageSrc} alt="Project" />
	</div>
	<div class="max-sm:px-4 md:px-6 pt-3">
		<h4 class="mb-3 text-xl font-semibold tracking-tight text-sky-300">{title}</h4>
		<p class="mb-2 leading-normal text-white">{description}</p>
		<a href={projectURL}>
			<div class="max-sm:m-2 md:m-5 py-3 bg-slate-700 rounded-md flex flex-1 justify-center">
				<button class="text-white">Github Repo</button>
			</div>
		</a>
	</div>
</div>
