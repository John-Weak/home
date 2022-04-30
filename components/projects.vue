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
            <div class="flex justify-center sm:block pt-4 ">
                <iframe
                    class="aspect-auto sm:aspect-video h-56 xl:h-64 2xl:h-72 border-slate-700 border-2 border-dashed "
                    allowfullscreen="true" loading="lazy" :src="item.url" title="Particle Heart ❤️">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const data = [
    {
        name: 'Three.js Particle Heart ❤️',
        url: 'https://threejs-particles-heart.vercel.app/',
        code: 'https://github.com/John-Weak/threejs-particles-heart',
        Image: '/images/projects/heart.jpg',
        description: '3D-Heart made up of smaller hearts that dance on sine wave'
    },
]
</script>