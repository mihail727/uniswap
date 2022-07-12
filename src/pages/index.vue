<script setup lang="ts">
	import { CogIcon } from '@heroicons/vue/outline/index.js';

	definePageMeta({
		pageTransition: {
			mode: 'out-in',
		},
	});
</script>

<template>
	<div class="w-full h-full flex justify-center mt-16">
		<div class="flex flex-col bg-white p-6 rounded-2xl shadow-md">
			<span class="flex justify-between items-center flex-nowrap">
				<span class="text-lg">Обменять</span>
				<CogIcon
					class="w-7 text-gray-600 hover:rotate-90 transition-all cursor-pointer active:scale-75"
				/>
			</span>

			<div class="flex flex-col mt-5 space-y-2">
				<input
					type="number"
					placeholder="0.0"
					class="p-6 text-2xl bg-gray-200 rounded-2xl outline-gray-400"
				/>
				<input
					type="number"
					placeholder="0.0"
					class="p-6 text-2xl bg-gray-200 rounded-2xl outline-gray-400"
				/>

				<VAddWallet class="h-16 text-xl active:text-base transition-all" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.v-enter-active,
	.v-leave-active,
	.v-move {
		transition: all 0.2s;
	}
	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
