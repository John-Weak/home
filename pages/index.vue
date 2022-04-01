<template>
    <div class="flex flex-col justify-center items-center w-full">
        <div class="w-full 2xl:w-10/12 2xl:max-w-screen-lg sm:px-6 px-2">
            <section class="mt-6">
                <intro />
            </section>
            <section class="flex justify-between items-center flex-col sm:flex-row sm:mt-10">
                <Horse class="w-full text-center -mt-10" />
                <WorkIntro />
            </section>

            <section
                class="flex justify-between sm:items-center flex-col sm:flex-row mt-6 max-w-full"
            >
                <Education />
                <client-only>
                    <Three class="hidden sm:block aspect-[1555/1080] w-64 mx-auto sm:w-1/2 h-auto" />
                </client-only>
            </section>

            <Experience class="mt-10" />

            <section class="flex justify-center items-center mt-10 max-w-full">
                <Catholic class="sm:max-w-[50%]" />
                <Catholic class="hidden sm:block max-w-[50%]" />
            </section>

            <section class="mt-10 justify-center items-center">
                <Skills />
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    //Easter Egg
    console.log("**Easter Egg**");
    console.log("https://dmg.johnweak.dev");
})
</script>