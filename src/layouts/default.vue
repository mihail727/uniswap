<script setup lang="ts">
	import {
		HomeIcon,
		DotsHorizontalIcon,
		XIcon,
		ChevronDownIcon,
	} from '@heroicons/vue/outline/index.js';

	const isAdditionalMenuOpened = ref(false);
	const isCurrencyMenuOpened = ref(false);

	const CurrencyMenuEl = ref<HTMLButtonElement>(null);
	const AdditionalMenuEl = ref<HTMLButtonElement>(null);

	onClickOutside(CurrencyMenuEl, () => (isCurrencyMenuOpened.value = false));
	onClickOutside(AdditionalMenuEl, () => (isAdditionalMenuOpened.value = false));
</script>

<template>
	<div class="min-h-screen max-w-screen flex flex-col">
		<nav class="flex justify-between items-center p-[8px] text-lg">
			<NuxtLink
				to="/"
				class="rounded-full shadow-md p-1 backdrop-blur-xl hover:-rotate-6 active:scale-75 transition-all"
			>
				<HomeIcon
					class="w-9 stroke-[1.5] bg-white/40 rounded-full p-1 hover:bg-white/70 transition-all"
				/>
			</NuxtLink>
			<div class="flex ml-[16%] justify-center items-center shadow-md rounded-full">
				<div
					class="flex bg-white justify-center items-center space-x-1 rounded-full p-[4px]"
				>
					<NuxtLink
						to="/"
						class="rounded-full p-[6px_10px] text-gray-600 hover:text-black transition-all"
					>
						Обменять
					</NuxtLink>
					<NuxtLink
						to="pools"
						class="rounded-full p-[6px_10px] text-gray-600 hover:text-black transition-all"
					>
						Пулы
					</NuxtLink>
					<NuxtLink
						to="vote"
						class="rounded-full p-[6px_10px] text-gray-600 hover:text-black transition-all"
					>
						Голосования
					</NuxtLink>
					<NuxtLink
						to="graphics"
						class="rounded-full p-[6px_10px] text-gray-600 hover:text-black transition-all"
					>
						Графики
					</NuxtLink>
				</div>
			</div>
			<div class="flex space-x-2">
				<button
					ref="CurrencyMenuEl"
					@click="isCurrencyMenuOpened = !isCurrencyMenuOpened"
					class="flex items-center flex-nowrap space-x-1 rounded-full shadow-md bg-white p-[6px_10px] text-gray-600 border-gray-300 hover:text-black transition-all"
				>
					<span>Ethereum</span>
					<ChevronDownIcon
						class="w-5 mt-1 transition-all"
						:class="{ 'rotate-180': isCurrencyMenuOpened }"
					/>
				</button>
				<button
					class="rounded-full shadow-md border border-white bg-green-300 p-[6px_10px] text-gray-600 hover:text-black transition-all"
				>
					Подключить кошелёк
				</button>
				<button
					ref="AdditionalMenuEl"
					@click="isAdditionalMenuOpened = !isAdditionalMenuOpened"
					class="relative rounded-full shadow-md p-[6px_10px] border bg-white text-gray-600 border-gray-300 hover:text-black active:scale-75 transition-all"
				>
					<DotsHorizontalIcon v-if="!isAdditionalMenuOpened" class="w-6" />
					<XIcon v-if="isAdditionalMenuOpened" class="w-6" />
				</button>
			</div>
		</nav>
		<slot />
	</div>
</template>

<style scoped>
	.router-link-active {
		color: black;
		font-weight: 600;
		background-color: rgba(238, 238, 238, 0.671);
	}
</style>
