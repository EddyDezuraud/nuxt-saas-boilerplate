<template>
  <div :style="{'--primary-g-1': primaryG1, '--primary-g-2': primaryG2, '--primary-50': primary50}">
    <NuxtPage/>
  </div>
</template>

<script lang="ts" setup>
import type { Theme } from '@/types/content';

const { data: theme } = await useAsyncData<Theme>(() => queryContent('/_theme').findOne())

const primaryG1 = computed(() => {
  if(!theme.value?.color) return '';
  const color = theme.value?.color;
  const primaryColor = calculatePrimaryG1(color);
  return primaryColor;
});

const primaryG2 = computed(() => {
  if(!theme.value?.color) return '';
  const color = theme.value?.color;
  const primaryColor = calculatePrimaryG2(color);
  return primaryColor;
});

const primary50 = computed(() => {
  return theme.value?.color + '50';
})

function calculatePrimaryG1(color: string): string {
  // Conversion de la couleur hexadécimale en HSL
  const { h, s, l } = hexToHSL(color);

  // Ajustement des valeurs HSL pour obtenir la teinte désirée
  const newH = 266; // Nouvelle teinte
  const newS = 60;  // Nouvelle saturation
  const newL = 51;  // Nouvelle luminosité

  // Conversion de la nouvelle couleur HSL en hexadécimal
  return hslToHex(newH, newS, newL);
}

function calculatePrimaryG2(color: string): string {
  // Conversion de la couleur hexadécimale en HSL
  const { h, s, l } = hexToHSL(color);

  // Ajustement des valeurs HSL pour obtenir la teinte désirée
  const newH = 317; // Nouvelle teinte
  const newS = 100; // Nouvelle saturation
  const newL = 46;  // Nouvelle luminosité

  // Conversion de la nouvelle couleur HSL en hexadécimal
  return hslToHex(newH, newS, newL);
}

function hexToHSL(hex: string): { h: number, s: number, l: number } {
  // Conversion de la couleur hexadécimale en RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  // Trouver la valeur minimale et maximale des composantes RVB
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calcul de la luminosité
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }

  return { h, s: s * 100, l: l * 100 };
}

function hslToHex(h: number, s: number, l: number): string {
  // Conversion de HSL en RVB
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }

  // Conversion de RVB en hexadécimal
  const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
  const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
  const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`.toUpperCase();
}

</script>