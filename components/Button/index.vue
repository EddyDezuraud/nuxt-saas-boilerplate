<template>
    <button class="button" :class="[size, mode]">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts" setup>
interface Props {
    to?: string,
    href?: string,
    size?: 's' | 'm' | 'l',
    mode?: 'glass' | 'primary' | 'magic'
}

const props = withDefaults(defineProps<Props>(), {
    size: 'm'
})
</script>

<style>
.button {
    background: linear-gradient(45deg, var(--primary-g-1), var(--primary-g-2));
    border-radius: 50px;
    color: white;
    box-shadow: 0 0 30px 2px #FFFFFF20, 0 2px 100px 10px var(--primary-50), inset 0px -4px 4px 0 #C3C3C350, inset 0 4px 4px 0 #FFFFFF25, inset 0 3px 0 #FFFFFF40;
    padding: 10px 20px;
    font: var(--text-button-m);
    cursor: pointer;
    transition: box-shadow 0.3s;
}

.button.glass {
    background: linear-gradient(#ffffff05, #ffffff10);
    border: solid 1px #ffffff10;
    box-shadow: none;
}

.button.magic {
    background: linear-gradient(45deg, var(--primary-g-1), var(--primary-g-2));
    border-radius: 50px;
    color: white;
    font: var(--text-button-l);
}

.button.s {
    padding: 8px 16px;
    font: var(--text-button-s);
}

.button.l {
    padding: 12px 24px;
    font: var(--text-button-l);
}

.button.xl {
    padding: 16px 32px;
    font: var(--text-button-l);
}

.button:not(.glass):hover {
    box-shadow: 0 5px 50px 10px #FFFFFF30, 0 2px 100px 10px var(--primary-50), inset 0px -4px 4px 0 #C3C3C350, inset 0 4px 10px 0 #FFFFFF50, inset 0 3px 10px 0 #FFFFFF90;
}
</style>