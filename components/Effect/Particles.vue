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
