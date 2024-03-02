<template>
  <div class="effect-particles">
    <canvas ref="canvas" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const snow = ref<{ x: number; y: number; size: number; speed: number }[]>([]);
const creatingSnow = ref(true);

const snowMaxSize = 2;
const snowMinSize = 0.4;
const snowMaxSpeed = 3;
const snowMinSpeed = 0.5;
const snowMaxCount = 100;


function initSnow() {
  snow.value = [];
  for (let i = 0; i < snowMaxCount; i++) {
    if (creatingSnow.value) {
      snow.value.push({
        x: Math.random() * canvas.value!.width,
        y: Math.random() * canvas.value!.height,
        size: Math.random() * (snowMaxSize - snowMinSize) + snowMinSize,
        speed: Math.random() * (snowMaxSpeed - snowMinSpeed) + snowMinSpeed,
      });
    }
  }
}
function animate() {
  ctx.value!.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  for (let i = 0; i < snowMaxCount; i++) {
    const s = snow.value[i];
    const opacity = 1 - s.y / canvas.value!.height; // Calculate opacity based on y position
    ctx.value!.beginPath();
    ctx.value!.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.value!.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.value!.fill();
    s.y -= s.speed;
    if (s.x < canvas.value!.width / 2) {
      s.x -= Math.random() * 1.5;
    } else {
      s.x += Math.random() * 1.5;
    }
    if (s.y < 0) {
      s.y = canvas.value!.height;
      s.x = Math.random() * canvas.value!.width;
    }
  }
  requestAnimationFrame(animate);
}
onMounted(() => {
  canvas.value!.width = window.innerWidth;
  canvas.value!.height = window.innerHeight;
  ctx.value = canvas.value!.getContext('2d')!;
  initSnow();
  animate();
  setTimeout(() => {
    creatingSnow.value = false;
  }, 4000);
});


onUnmounted(() => {
  cancelAnimationFrame(animate);
});
</script>

<style>
.effect-particles {
  pointer-events: none;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  mix-blend-mode: soft-light;
}
</style>
