<template>
    <div>
        <div>
            <intro />
        </div>
        <section>
            <FakeIDE title="Routine.js" :lines-count='7'>
                <Motto />
            </FakeIDE>
        </section>
           <div class="flex justify-center items-center">
            <Catholic v-for="item in 3" class />
        </div>
      <!--   <client-only>
            <Three class="h-96" />
        </client-only>
        <Horse /> -->
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    //Easter Egg
    console.log("**Easter Egg**");
    console.log("https://dmg.johnweak.dev");
})
</script>