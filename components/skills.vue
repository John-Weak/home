<template>
    <div>
        <div class="text-5xl sm:text-7xl dark:text-teal-300 font-medium pb-2">Skills</div>
        <div class="flex flex-wrap">
            <img v-for="item in data" :src="item" class="h-16 w-16 p-2" />
        </div>
    </div>
</template>


<script setup lang="ts">
//generated with https://github.com/get-icon/geticon
const data = [
    'https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/javascript.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/react.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/redux.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/vue.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/angular-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/svelte-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/reactivex.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/webrtc.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/css-3.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/tailwindcss-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/html-5.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/graphql.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/apollostack.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/cypress.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/aws.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/azure-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/firebase.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/cloudflare.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/docker-icon.svg',
    'https://github.com/get-icon/geticon/raw/master/icons/c-plusplus.svg',
];
</script>