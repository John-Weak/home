<template>
    <div
        class="flex justify-center bg-black sticky top-0 z-20 bg-opacity-40 backdrop-filter backdrop-saturate-150 backdrop-blur-xl firefox:bg-opacity-100">
        <div class="w-full 2xl:w-10/12 2xl:max-w-screen-2xl mx-4">
            <div class="flex justify-between items-center py-3 ">
                <a href="https://drive.google.com/file/d/1OiGQC0s-88eSG6syx-8_HXRVjk49691k/view?usp=sharing" target="_blank"
                    rel="noopener noreferrer"
                    class="text-2xl text-center font-mono md:text-3xl dark:text-lime-400 sm:mr-52 md:mr-60 lg:mr-80">Resume</a>
                <ul class="flex">
                    <li v-for="item in headerItems" :key="item.name">
                        <a :href="item.url" class="flex items-center justify-center" target="_blank"
                            rel="noopener noreferrer">
                            <img :src="cookie === 'dark' ? item.darkIcon : item.lightIcon"
                                class="max-h-6 w-auto mr-2" />
                            <div class="dark:text-gray-300 mr-7 sm:mr-5 hidden sm:block">{{ item.name }}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
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