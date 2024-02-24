<script lang="ts" setup>
import type { Navigation } from '@/types/content';

interface Props {
    navigation: Navigation[],
}

const props = defineProps<Props>()
</script>

<template>
    <nav class="menu">
        <ol class="menu-list">
            <li v-for="item in navigation" :key="item._path" class="menu-item">
                <NuxtLink :to="item._path" class="menu-link">
                    <span>
                        {{ item.title }}
                    </span>
                </NuxtLink>
            </li>
        </ol>  
    </nav>
</template>

<style>
.menu-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap-xxl)
}

.menu-link {
    position: relative;
}

.menu-link::after {
    position: absolute;
    content: '';
    left: -15px;
    top: -10px; 
    width: calc(100% + 30px);
    height: calc(100% + 20px);
    border-radius: 4px;
    background: white;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.15s;
}

.menu-link:hover::after {
    opacity: 0.05;
}

.menu-link > span {
    position: relative;
    z-index: 2;
}
</style>