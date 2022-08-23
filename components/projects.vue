<template>
    <div>
        <div class="text-5xl sm:text-7xl dark:text-teal-300 font-medium sm:pb-2">Projects</div>
        <div v-for="item in data" :key="item.url" class="dark:text-gray-200 pt-6">
            <div class="text-xl sm:text-2xl font-medium font-mono dark:text-purple-200">{{ item.name }}</div>
            <div class="py-1">
                <a :href="item.code" target="_blank" rel="noopener noreferrer"
                    class="text-lg sm:text-xl font-normal underline underline-offset-2 dark:text-blue-200">Code</a>
                &nbsp;
                <a :href="item.url" target="_blank" rel="noopener noreferrer"
                    class="text-lg sm:text-xl font-normal underline underline-offset-2 dark:text-green-200">Live</a>
            </div>
            <div class="text-sm sm:text-base pt-1 ">{{ item.description }}</div>
            <div class="block pt-4 ">
                <img class="m-auto" :src="item.Image" :alt=item.name>
            </div>
        </div>
        <div class="text-lg sm:text-xl p-4 text-center dark:text-gray-200 mt-4">More projects on
            <a href="https://github.com/John-Weak" target="_blank" rel="noopener noreferrer"
                class="text-lg sm:text-xl font-normal underline underline-offset-2 dark:text-blue-200">
                Github</a>
        </div>
    </div>
</template>

<script setup lang="ts">

const data = [
    {
        name: 'RAIN',
        url: 'https://rain.johnweak.dev/',
        code: 'https://github.com/John-Weak/Rain',
        Image: '/images/projects/rain.gif',
        description: 'To record and display the timing and duration of power outage in my home'
    },
    {
        name: 'Three.js Particle Heart ❤️',
        url: 'https://heart.johnweak.dev/',
        code: 'https://github.com/John-Weak/threejs-particles-heart',
        Image: '/images/projects/heart.gif',
        description: '3D-Heart made up of smaller hearts that dance on sine wave'
    }
]
</script>