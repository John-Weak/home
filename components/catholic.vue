<template>
    <img :src="catImage" class="w-auto h-56 xl:h-64 2xl:h-72" />
</template>

<script setup lang="ts">

const CatApi = 'https://api.thecatapi.com/v1/images/search?mime_types=gif';
let catImage = ref('');

onMounted(getImage);

async function getImage() {
    try {
        const response = await fetch(CatApi);
        const myJson = await response.json(); //extract JSON from the http response
        catImage.value = myJson[0].url;
    } catch (err) {
        console.log(err)
    }
}

</script>