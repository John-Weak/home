<template>
    <div>
        <div class="text-5xl sm:text-7xl dark:text-teal-300 font-medium sm:pb-2">Experience</div>
        <div v-for="item in data" :key="item.url" class="dark:text-gray-200 pt-6">
            <div class="text-xl sm:text-2xl font-medium dark:text-purple-200">{{ item.position }}</div>
            <a
                :href="item.url"
                class="text-lg sm:text-xl font-normal underline underline-offset-2 dark:text-blue-200"
            >{{ item.company }}</a>
            <div class="text-sm sm:text-base font-light dark:text-gray-400 pb-1">{{ item.time }}</div>
            <ul
                class="text-sm sm:text-base list-disc list-inside"
                v-for="point in item.points"
                :key="point"
            >
                <li class="py-1">{{ point }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const data = [
    {
        position: 'Full Stack Developer',
        company: 'Mister Policy',
        url: 'https://misterpolicy.com',
        time: '14 June 2021 - 20 Dec 2021',
        points: [
            "Developed location based Insurance Policy Graphql API in NEST.js,which shows different Insurance policies based on the location with different discounts/prices varying according to insured members and their age.",
            "Built admin panel with Nuxt(Vue.js) and proper state management with Vuex,integrated the GraphQL API.",
            "Worked on Excel parsing with streams to import bulk data.",
            "Created Custom HTML Email template for order confirmation and sharing of policies.",
        ]
    },
    {
        position: 'Lead Developer',
        company: 'Attendit',
        url: 'https://www.linkedin.com/company/attendit1',
        time: '15 June 2020 - 1 June 2021',
        points: [
            "Ported the whole backend architecture to microservices in NEST.js",
            "Added logging and statistics to the backend.",
            "Built admin panel with Angular and integrated the GraphQL API.",
            "Improved the Flutter App UX and UI by standardizing the margin,padding and color scheme,effectively making a design system.",
        ]
    },

]
</script>