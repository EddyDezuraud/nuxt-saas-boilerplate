<template>
  <div class="effect-particles">
    <canvas ref="canvas" width="800" height="600"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const snow = ref<{ x: number; y: number; size: number; speed: number }[]>([]);

const snowMaxSize = 5;
const snowMinSize = 1;
const snowMaxSpeed = 5;
const snowMinSpeed = 1;
const snowMaxCount = 200;

onMounted(() => {
  ctx.value = canvas.value?.getContext("2d");
  if (ctx.value) {
    initSnow();
    animate();
  }
});

const initSnow = () => {
  for (let i = 0; i < snowMaxCount; i++) {
    snow.value.push({
      x: Math.random() * canvas.value!.width,
      y: Math.random() * canvas.value!.height,
      size: Math.random() * (snowMaxSize - snowMinSize) + snowMinSize,
      speed: Math.random() * (snowMaxSpeed - snowMinSpeed) + snowMinSpeed,
    });
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.value?.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  for (let i = 0; i < snow.value.length; i++) {
    const snowflake = snow.value[i];
    snowflake.y += snowflake.speed;
    if (snowflake.y > canvas.value!.height) {
      snowflake.y = 0;
      snowflake.x = Math.random() * canvas.value!.width;
    }
    ctx.value?.beginPath();
    ctx.value?.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
    ctx.value?.fillStyle = "white";
    ctx.value?.fill();
  }
};
</script>

<style>
.effect-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
