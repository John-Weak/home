<!-- <script setup lang="ts">
import {
    lerp, BufferGeometry, Camera, EffectComposer, Points, Renderer,
    RenderPass, Scene, ShaderMaterial, Texture, UnrealBloomPass, ZoomBlurPass, RendererPublicInterface
} from 'troisjs';
import { Clock, Color, MathUtils, Vector3 } from 'three';

const { randFloat: rnd, randInt, randFloatSpread: rndFS } = MathUtils
const vertexShader = `
  uniform float uTime;
  attribute vec3 color;
  attribute float size;
  attribute float velocity;
  varying vec4 vColor;
  void main(){
    vColor = vec4(color, 1.0);
    vec3 p = vec3(position);
    p.z = -150. + mod(position.z + uTime, 300.);
    vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
    gl_PointSize = size * (-50.0 / mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`
const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec4 vColor;
  void main() {
    gl_FragColor = vColor * texture2D(uTexture, gl_PointCoord);
  }
`
let box = ref();
const POINTS_COUNT = 50000
const palette = ["#ffe181", "#eee9e5", "#fad3b2", "#ffba7f", "#ff9c97"];
const positions = new Float32Array(POINTS_COUNT * 3)
const colors = new Float32Array(POINTS_COUNT * 3)
const sizes = new Float32Array(POINTS_COUNT)
const v3 = new Vector3(), color = new Color()

const attributes = [
    { name: 'position', array: positions, itemSize: 3 },
    { name: 'color', array: colors, itemSize: 3 },
    { name: 'size', array: sizes, itemSize: 1 },
]

let uniforms = { uTime: { value: 0 } }
let clock = new Clock()
let timeCoef = 1, targetTimeCoef = 1
let zoomStrength = 0;

let renderer = ref<RendererPublicInterface>();
let positionN = renderer.three.pointer.positionN;
let points = ref();

onMounted(() => {
    for (let i = 0; i < POINTS_COUNT; i++) {
        v3.set(rndFS(200), rndFS(200), rndFS(300))
        v3.toArray(positions, i * 3)
        color.set(palette[Math.floor(rnd(0, palette.length))])
        color.toArray(colors, i * 3)
        sizes[i] = rnd(5, 20)
    }

    renderer.value.onBeforeRender(() => {
        timeCoef = lerp(timeCoef, targetTimeCoef, 0.02);
        uniforms.uTime.value += clock.getDelta() * timeCoef * 4;
        zoomStrength = timeCoef * 0.004;
        const da = 0.05
        const tiltX = lerp(points.rotation.x, positionN.y * da, 0.02)
        const tiltY = lerp(points.rotation.y, -positionN.x * da, 0.02)
        points.rotation.set(tiltX, tiltY, 0)
    })
})

</script>


<template>
    <div>
        <Renderer :ref="(renderer as any)" pointer resize="window">
            <Camera :position="{ z: 0 }" :fov="50" />
            <Scene>
                <Points :ref="points" :position="{ z: -150 }">
                    <BufferGeometry :attributes="attributes" />
                    <ShaderMaterial
                        :blending="2"
                        :depth-test="false"
                        :uniforms="uniforms"
                        :vertex-shader="vertexShader"
                        :fragment-shader="fragmentShader"
                    >
                        <Texture
                            src="https://assets.codepen.io/33787/sprite.png"
                            uniform="uTexture"
                        />
                    </ShaderMaterial>
                </Points>
            </Scene>
            <EffectComposer>
                <RenderPass />
                <UnrealBloomPass :strength="2" :radius="0" :threshold="0" />
                <ZoomBlurPass :strength="zoomStrength" />
            </EffectComposer>
        </Renderer>
    </div>
</template> -->