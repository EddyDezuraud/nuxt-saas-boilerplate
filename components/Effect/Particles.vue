<template>
    <div class="effect-particles">
        <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script setup lang="ts">
import Confetti from 'canvas-confetti';

const width = ref(0);
const height = ref(0);
const canvas = ref<HTMLCanvasElement | null>(null);
const confetti = ref<Confetti | null>(null);
const points: Ref<Point[]> = ref([]);

const generatePoints = () => {
  for (let i = 0; i < 100; i++) {
    const radius = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    const opacity = Math.random();
    const speed = Math.floor(Math.random() * (15 - 4 + 1)) + 4;
    const x = Math.floor(Math.random() * width);
    const y = 0;

    points.value.push({
      radius,
      opacity,
      speed,
      x,
      y,
    });
  }

  animate();
};

const animate = () => {
  if (!confetti.value || !canvas.value) return;

  confetti.value.clear();

  for (const point of points.value) {
    point.y += point.speed;

    if (point.y > height) {
      point.y = 0;
    }

    confetti.value.addCircle({
      x: point.x,
      y: point.y,
      radius: point.radius,
      opacity: point.opacity,
    });
  }

  requestAnimationFrame(animate);
};

onMounted(() => {
  const handleResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  window.addEventListener('resize', handleResize);

  handleResize(); // Call initially to set dimensions

  canvas.value = document.querySelector('canvas') as HTMLCanvasElement;
  confetti.value = new Confetti(canvas.value);
  generatePoints();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  if (confetti.value) {
    confetti.value.reset();
  }
});
</script>

<style>
    .effect-particles {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>