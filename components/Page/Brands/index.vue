<template>
    <div class="brands-carousel" :style="{ '--nb-brands': brands.length }">
        <h2 class="brands-label">{{label}}</h2>
        <div class="carousel-container">
            <ul class="carousel-track">
                <li v-for="brand in duplicateBrands" :key="brand.label" class="carousel-item">
                    <img :src="brand.src" :alt="brand.label" class="brand-logo" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Brand {
    label: string;
    src: string;
};

const props = defineProps<{
    label: string;
    brands: Brand[];
}>();

const duplicateBrands = props.brands.concat(props.brands);

</script>

<style scoped>
.brands-carousel {
    width: 1180px;
    max-width: 100%;
    margin: 100px auto;

    --nb-brands: 6;
}

.brands-label {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
    color: var(--color-text);
}

.carousel-container {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    place-items: center;
    margin: 0px;
    padding: 10px;
    list-style-type: none;
    opacity: 1;
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%);
    overflow: hidden;
}

.carousel-track {
    display: flex;
    align-items: center;
    gap: 80px;
    animation: carouselAnimation 20s infinite linear;
}

.brand-logo {
    aspect-ratio: 3.8461538461538463 / 1;
    height: 31px;
    position: relative;
    width: 120px;
    opacity: 0.5;
    max-width: none;
}

@keyframes carouselAnimation {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(var(--nb-brands) * 200px * -1));
    }
}

</style>

