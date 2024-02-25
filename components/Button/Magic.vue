<template>
    <button class="button-magic">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts" setup>
interface Props {
    to?: string,
    href?: string,
    size?: 's' | 'm' | 'l'
}

const props = withDefaults(defineProps<Props>(), {
    size: 'm'
})
</script>

<style>
.button-magic {
    padding: 12px 24px;
    background: linear-gradient(45deg, var(--primary-g-1), var(--primary-g-2));
    border-radius: 50px;
    color: white;
    box-shadow: 0 0 30px 2px #FFFFFF20, 0 2px 100px 10px var(--primary-50), inset 0px -4px 4px 0 #C3C3C350, inset 0 4px 4px 0 #FFFFFF25;
}
</style>