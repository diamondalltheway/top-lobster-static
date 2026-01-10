<script>
	const positions = [
		// { name: 'Full-Time Positions' },
		// { name: 'Part-Time Positions' },
		{ name: 'Contract Positions' },
		{ name: 'Consulting Positions' },
	];
</script>

<div id="contact">
	<div class="pt-12 sm:pt-16 lg:pt-20">
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h2
					class="glow space-grotesk text-3xl font-extrabold leading-9 text-indigo-300 sm:text-4xl sm:leading-10 lg:text-4xl lg:leading-none"
				>
					Contact
				</h2>
				<p class="mt-4 text-xl leading-7 text-gray-500"></p>
			</div>
		</div>
	</div>

	<div class="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
		<div class="relative">
			<div class="absolute h-1/2 bg-indigo-200"></div>
			<div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div class="glow-box mx-auto max-w-lg rounded-lg">
					<div
						class=" lg:flex-shrink-1 rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-300 px-6 py-8 outline-offset-4 outline-indigo-400 hover:outline-dotted hover:outline-4 lg:p-12"
					>
						<h3
							class="text-center text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9"
						>
							Feel free to reach out!
						</h3>
						<p class="mt-6 text-center text-base font-bold leading-6 text-gray-600">
							hunter@toplobster.io <span class=" mx-2 font-semibold"></span>
						</p>
						<div class="mt-8">
							<div class="flex items-center">
								<h4
									class="flex-shrink-0 pr-4 text-sm font-semibold uppercase leading-5 tracking-wider text-indigo-600"
								>
									Available for:
								</h4>
								<div class="flex-1 border-t-2 border-slate-800"></div>
							</div>
							<ul class="col-gap-8 row-gap-5 mt-8 grid grid-cols-2 lg:gap-y-6">
								{#each positions as position}
									<li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
										<div class="flex-shrink-0">
											<svg class="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<p class="ml-3 text-sm leading-5 text-gray-700">{position.name}</p>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
