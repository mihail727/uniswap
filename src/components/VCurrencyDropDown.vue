<script setup lang="ts">
	import { ChevronDownIcon, BeakerIcon } from '@heroicons/vue/outline/index.js';

	type Currency = 'Ethereum' | 'Polygon' | 'Optimism' | 'Arbitrum';

	const emit = defineEmits<{
		(e: 'select', currency: Currency);
	}>();

	const isCurrencyMenuOpened = ref(false);
	const CurrencyMenuEl = ref<HTMLButtonElement>(null);

	const selectedCurrency = ref<Currency>('Ethereum');

	onClickOutside(CurrencyMenuEl, () => (isCurrencyMenuOpened.value = false));
	const onSelect = (currency: Currency) => {
		selectedCurrency.value = currency;
		emit('select', currency);
	};
</script>

<template>
	<div class="relative shadow-md rounded-full">
		<button
			ref="CurrencyMenuEl"
			@click="isCurrencyMenuOpened = !isCurrencyMenuOpened"
			class="flex items-center flex-nowrap space-x-1 rounded-full bg-white p-[6px_10px] text-gray-600 border-gray-300 hover:text-black transition-all"
		>
			<span>{{ selectedCurrency }}</span>
			<ChevronDownIcon
				class="w-5 mt-1 transition-all"
				:class="{ 'rotate-180': isCurrencyMenuOpened }"
			/>
		</button>

		<Transition>
			<div
				v-if="isCurrencyMenuOpened"
				class="absolute top-[50px] bg-white p-1 flex flex-col rounded-xl whitespace-nowrap space-y-1"
			>
				<span class="text-gray-500 text-base mb-[1px] p-[5px_14px]">Выберите сеть</span>
				<button
					@click="onSelect('Ethereum')"
					class="flex flex-nowrap items-center space-x-1 border-b-[2px] border-white p-[5px_14px] w-[200px] hover:text-green-500 hover:border-green-500 transition-all"
					:class="{ 'border-green-300': selectedCurrency == 'Ethereum' }"
				>
					<BeakerIcon class="h-5" />
					<span>Ethereum</span>
				</button>
				<button
					@click="onSelect('Polygon')"
					class="flex flex-nowrap items-center space-x-1 border-b-[2px] border-white p-[5px_14px] w-[200px] hover:text-green-500 hover:border-green-500 transition-all"
					:class="{ 'border-green-300': selectedCurrency == 'Polygon' }"
				>
					<BeakerIcon class="h-5" />
					<span>Polygon</span>
				</button>
				<button
					@click="onSelect('Optimism')"
					class="flex flex-nowrap items-center space-x-1 border-b-[2px] border-white p-[5px_14px] w-[200px] hover:text-green-500 hover:border-green-500 transition-all"
					:class="{ 'border-green-300': selectedCurrency == 'Optimism' }"
				>
					<BeakerIcon class="h-5" />
					<span>Optimism</span>
				</button>
				<button
					@click="onSelect('Arbitrum')"
					class="flex flex-nowrap items-center space-x-1 border-b-[2px] border-white p-[5px_14px] w-[200px] hover:text-green-500 hover:border-green-500 transition-all"
					:class="{ 'border-green-300': selectedCurrency == 'Arbitrum' }"
				>
					<BeakerIcon class="h-5" />
					<span>Arbitrum</span>
				</button>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
	.v-enter-active,
	.v-leave-active {
		transition: all 0.6s;
	}
	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
