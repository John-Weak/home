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

            <section class="sm:mt-6">
                <client-only>
                    <Three class="h-96" />
                </client-only>
            </section>

            <!--   <Catholic v-for="item in 3" class /> -->
        </div>
        <!--  <section>
                
            </section>
            <section>
                
        </section>-->
        <!--  <div class="flex justify-center items-center">
           
        </div>-->
        <!--   
        -->
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    //Easter Egg
    console.log("**Easter Egg**");
    console.log("https://dmg.johnweak.dev");
})
</script>