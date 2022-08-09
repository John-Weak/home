<template>
    <div :class="theme ? 'dark' : ''" class="bg-gradient-to-r from-black via-neutral-900 to-black">
        <SplashTerminal v-if="showTerminalAnimation" />
        <div :class="showTerminalAnimation ? 'hidden' : 'block '" class="flex flex-col">
            <Header />
            <slot />
            <Footer class="mt-auto" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const showTerminalAnimation = ref(true);
function splashAnimationTimer() {
    setTimeout(() => {
        showTerminalAnimation.value = false;
    }, 1000 * 4);
}

const theme = useCookie('theme', { default: () => 'dark' });
onMounted(() => {
    splashAnimationTimer();
    theme.value = 'dark';
})
</script>