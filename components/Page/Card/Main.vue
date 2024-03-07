<template>
    <div class="page-card-main">
        <img :src="image" alt="Main Feature Image" />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    image: string,
}

const props = defineProps<Props>()
</script>


<style>
.page-card-main {
    width: 880px;
    max-width: 100%;
    border-radius: 10px;
    background: linear-gradient(#ffffff05, #ffffff02);
    aspect-ratio: 8 / 4;
    margin: 0 auto 40px;
    position: relative;
}

.page-card-main img{
    position: absolute;
    top: 40px;
    left: 40px;
    width: calc(100% - 80px);
    max-height: calc(100% - 80px);
}
</style>