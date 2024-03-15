<template>
    <div class="effect-light" :class="[{'highlight': highlight}]">
        <div class="effect-light-el"></div>
        <div class="effect-light-el effect-light-el2"></div>
    </div>
</template>    

<script setup lang="ts">
defineProps({
    highlight: Boolean
})
</script>

<style>
.effect-light {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    pointer-events: none;
    filter: blur(80px);
}

.effect-light.highlight .effect-light-el::after {
    opacity: 0.05;
}

.effect-light-el {
    position: relative;
    flex: 1;
}

.effect-light-el::after,
.effect-light-el::before {
    position: absolute;
    content: '';
    width: 100px;
    height: 120%;
    top: -20%;
    right: 20%;
    background: linear-gradient(to bottom, #FFFFFF35, #FFFFFF00);
    transform: rotate(-45deg);
    transition: opacity 0.8s;
}

.effect-light-el2::after,
.effect-light-el2::before {
    transform: rotate(45deg);
    right: auto;
    left: 20%;
}

.effect-light-el::after {
    opacity: 0;
    width: 200px;
    background: linear-gradient(to bottom, var(--primary-g-1), var(--primary-g-2));
}
</style>