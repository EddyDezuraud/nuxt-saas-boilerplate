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

</style>