<template>
    <div class="flex flex-col justify-center items-center w-full">
        <div class="w-full 2xl:max-w-screen-lg sm:px-6 px-2">
            <section class="mt-6">
                <intro />
            </section>
            <section class="flex justify-between items-center flex-col sm:flex-row sm:mt-10">
                <Horse class="w-full text-center -mt-10" />
                <WorkIntro />
            </section>

            <section class="flex justify-between sm:items-center flex-col sm:flex-row mt-6 max-w-full">
                <Education />
                <client-only>
                    <Three class="hidden sm:block h-96" />
                </client-only>
            </section>

            <section>
                <Experience class="mt-10" />
            </section>

            <section>
                <Projects class="mt-10" />
            </section>

            <section class="flex justify-center items-center  max-w-full">
                <Catholic class="sm:max-w-[50%]" />
                <Catholic class="hidden sm:block max-w-[50%]" />
            </section>

            <section class="my-10 justify-center items-center">
                <Contact />
            </section>

        </div>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    //Easter Egg
    const easterStyle =
        "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";
    console.log("%cEaster Egg", easterStyle);
    console.log("https://dmg.johnweak.dev");
})
</script>