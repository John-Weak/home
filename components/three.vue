<script lang="ts" setup>
import {
    PointLight,
    Box,
    Camera,
    Renderer,
    Scene,
    LambertMaterial,
    RendererPublicInterface,
    MeshPublicInterface,
} from 'troisjs';

const rendererC = ref<RendererPublicInterface>()
const box = ref<MeshPublicInterface>()

onMounted(() => {
    rendererC.value!.onBeforeRender(() => {
        box.value!.mesh.rotation.x += 0.01;
        box.value!.mesh.rotation.y += 0.01;
        box.value!.mesh.rotation.z += 0.01;
    })
})
</script>

<template>
    <Renderer resize="window" orbit-ctrl ref="rendererC">
        <Camera :position="{ z: 10 }" />
        <Scene background="#161616">
            <PointLight :position="{ y: 50, z: 50 }" />
            <Box :size="1" ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial />
            </Box>
        </Scene>
    </Renderer>
</template>





