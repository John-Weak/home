<template>
    <div class="sticky flex justify-between items-center py-3 px-4 bg-black">
        <button class="text-2xl text-center font-mono md:text-3xl dark:text-lime-400">Resume</button>
        <ul class="flex">
            <li v-for="item in headerItems" :key="item.name">
                <a :href="item.url" class="flex items-center justify-center">
                    <img
                        :src="cookie === 'dark' ? item.darkIcon : item.lightIcon"
                        class="max-h-6 w-auto mr-2"
                    />
                    <div class="dark:text-gray-300 mr-7 sm:mr-5 hidden sm:block">{{ item.name }}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const cookie = useCookie('theme', { default: () => 'dark' });
const headerItems = [
    {
        name: 'Github',
        url: "https://github.com/John-Weak",
        darkIcon: "/images/social/github/github-dark.png",
        lightIcon: "/images/social/github/github-light.png"
    },
    {
        name: 'LinkedIn',
        url: "https://www.linkedin.com/in/john-weak/",
        darkIcon: "/images/social/linkedin/linkedin.png",
        lightIcon: "/images/social/linkedin/linkedin.png"
    },
    {
        name: 'Twitter',
        url: "https://twitter.com/TusharBali",
        darkIcon: "/images/social/twitter/twitter-dark.png",
        lightIcon: "/images/social/twitter/twitter-light.png"
    }
];

</script>