<script setup lang="ts">
	definePageMeta({
		pageTransition: {
			mode: 'out-in',
		},
	});
</script>

<template>
	<div class="flex w-full justify-center mt-16">
		<div class="flex flex-col space-y-2">
			<div class="flex flex-nowrap justify-between items-center">
				<span class="text-xl">Обзор пулов</span>
				<div class="flex flex-nowrap space-x-2">
					<button class="bg-white p-2 rounded-2xl hover:bg-gray-200 transition-all">
						Ещё
					</button>
					<button
						class="bg-green-300 border border-white rounded-2xl p-2 hover:bg-green-400 active:scale-75 transition-all"
					>
						+ Новая позиция
					</button>
				</div>
			</div>

			<div class="h-[400px] w-[800px] bg-white rounded-2xl shadow-md"></div>
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
