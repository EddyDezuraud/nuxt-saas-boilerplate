<template>
    <div class="browser-card">
        <div class="browser-card-header">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="browser-card-image">
            <img :src="props.image" alt="Browser Card Image" />
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    image: string,
}

const props = defineProps<Props>()
</script>


<style scoped>
.browser-card {
    border-radius: 20px;
    border: solid 1px #1c1f1f;
    max-width: 1024px;
    margin: 0 auto;
    background: linear-gradient(#ffffff05, #ffffff00);
    overflow: hidden;
}

.browser-card-header {
    display: flex;
    gap: 7px;
    padding: 0 15px;
    border-bottom: solid 1px #1f2020;
    background-color: #ffffff05;
    height: 45px;
    align-items: center;
}

.browser-card-header div {
    width: 10px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: #ED6A5E;
}

.browser-card-header div:nth-child(2) {
    background-color: #F4C62B;
}

.browser-card-header div:nth-child(3) {
    background-color: #5ACD7E;
}

.image img {
    width: 100%;
}
</style>