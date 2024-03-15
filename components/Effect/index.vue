<template>
    <div>
        <EffectLights :highlight="highlight" />
    </div>
</template>

<script setup>
defineProps({
    highlight: Boolean
})
</script>

<style>
.effect {
    position: absolute;
    z-index: 0;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
}
</style>