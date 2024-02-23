<template>
    <div class="chip">
        {{ content }}
    </div>
</template>

<script lang="ts" setup>
interface Props {
  content: string
}

const props = defineProps<Props>()
</script>

<style>
.chip {
    padding: 24px 10px;
    background: linear-gradient(#ffffff05, #ffffff00);
    border-radius: 500px;
    position: relative;
}
</style>