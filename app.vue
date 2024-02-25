<template>
  <div
    :style="{
      '--primary-g-1': primaryG1,
      '--primary-g-2': primaryG2,
      '--primary-50': primary50,
    }"
  >
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import type { Theme } from "@/types/content";

const { data: theme } = await useAsyncData<Theme>(() =>
  queryContent("/_theme").findOne()
);

const primaryG1 = computed(() => {
  if (!theme.value?.color) return "";
  const color = theme.value?.color;
  return calculatePrimaryG1(color);
});

const primaryG2 = computed(() => {
  if (!theme.value?.color) return "";
  const color = theme.value?.color;
  return calculatePrimaryG2(color);
});

const primary50 = computed(() => {
  return theme.value?.color + "50";
});

function calculatePrimaryG1(color: string): string {
  const { h, s, l } = hexToHsl(color);

	console.log({h,s,l})

  const newHsl = {
    h: (h - 30 + 360) % 360,
    s: Math.max(0, s - 15),
    l: Math.min(100, l * 1.09),
  };

  return hslToHex(newHsl);
}

function calculatePrimaryG2(color: string): string {
  const { h, s, l } = hexToHsl(color);

	const newHsl = {
    h: (h + 20) % 360,
    s: Math.min(100, s + 25),
    l: Math.floor(Math.min(100, l * 0.94)),
  };

	console.log(newHsl)

  return hslToHex(newHsl);
}

interface HslColor {
  h: number;
  s: number;
  l: number;
}

// Fonctions utilitaires pour convertir entre hexa et HSL
function hexToHsl(H: string): HslColor {
	let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return { h, s, l };
}

function hslToHex(hsl: HslColor): string {
  // Convertir la teinte de degrés en radians
	let {h,s,l} = hsl;
	h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = function (p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = function (x) {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(r) + toHex(g) + toHex(b);
}
</script>
