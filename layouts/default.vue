<template>
    <div :class="theme ? 'dark' : ''" class="bg-neutral-900">
        <SplashTerminal v-if="showTerminalAnimation" />

        <div :class="showTerminalAnimation ? 'hidden' : 'block '">
            <Header />
            <slot />
        </div>
    </div>
</template>


<script lang="ts" setup>
const showTerminalAnimation = ref(true);
function splashAnimationTimer() {
    setTimeout(() => {
        showTerminalAnimation.value = false;
    }, 1000 * 0);
}

const theme = useCookie('theme', { default: () => 'dark' });
onMounted(() => {
    splashAnimationTimer();
    theme.value = 'dark';
    console.log(theme.value);
})

</script>