<template>
    <div>
        <div class="text-5xl sm:text-7xl dark:text-teal-300 font-medium mb-2">Education</div>
        <div v-for="(item, index) in data" :key="item.heading" class="dark:text-gray-200 mt-4">
            <div
                class="text-xl sm:text-2xl font-medium mb-1 dark:text-purple-200"
            >{{ item.heading }}</div>
            <div class="text-lg sm:text-xl font-normal mb-1">{{ item.school }}</div>
            <div class="text-sm sm:text-base font-light dark:text-gray-400">{{ item.time }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

const data = [
    {
        heading: 'Bachelor of Computer Applications',
        school: 'Maharaja Surajmal Institute (GGSIPU)',
        time: '2019 - 2022',
    },
    {
        heading: 'Techie',
        school: 'Self Learning from Internet',
        time: '2016 - 2090',
    }
]

</script>