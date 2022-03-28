<template>
    <div>
        <div class="🐎">🐎</div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: Muybridge;
    src: url(https://www.lorp.org/fonts/MuybridgeGX.woff2);
}

@keyframes Gallop {
    from {
        font-variation-settings: "TIME" 0;
    }
    to {
        font-variation-settings: "TIME" 15;
    }
}

.🐎 {
    display: inline-block;
    font-size: 200px;
    font-family: Muybridge;
    animation: 0.6s linear infinite Gallop;
}

.🐎:hover {
    animation-duration: 6s;
}
</style>