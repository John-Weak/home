<template>
    <div class="w-full pt-10 md:w-1/2 md:pt-0">
        <div class="flex flex-col">
            <div class="flex items-end w-full h-10 bg-neutral-900 rounded-t-md">
                <div class="flex items-center space-x-1.5 h-full pl-4">
                    <button class="w-2 h-2 bg-red-500 rounded-full"></button>
                    <button class="w-2 h-2 bg-yellow-400 rounded-full"></button>
                    <button class="w-2 h-2 rounded-full bg-green-500"></button>
                </div>
                <div class="pl-6">
                    <div
                        class="h-8 px-4 py-2 text-xs text-white bg-neutral-800 w-28 rounded-t-md"
                    >{{ title }}</div>
                </div>
            </div>
            <div class="relative flex w-full overflow-x-scroll bg-neutral-800 rounded-b-md">
                <div
                    :key="lineNumbers"
                    class="sticky top-0 bottom-0 left-0 flex flex-col w-10 px-3 py-2 text-xs sm:text-base leading-loose text-right text-gray-600 select-none bg-zinc-900"
                >{{ lineNumbers }}</div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
const props = defineProps({
    title: {
        default: "Todo.jsx",
        type: String,
        required: false,
    },
    linesCount: {
        default: 13,
        type: Number,
        required: false,
    }
})
let lineNumbers = ref("");
onMounted(() => {
    for (let i = 1; i <= props.linesCount; i++) {
        lineNumbers.value += `${i} `;
    }
})

</script>