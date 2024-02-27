<template>
    <header class="page-header">
        <div class="page-header-logo-wrapper">
            <NuxtLink to="/" class="page-header-logo">
                <img :src="`/${data.logo}`"/>
                <span>
                    {{ data.title }}
                </span>
            </NuxtLink>
        </div>
        <Menu :navigation="navigation"></Menu>
        <div  class="page-header-cta" v-if="data.buttons && data.buttons.length > 0">
            <Button v-for="button in data.buttons" :key="button.to" size="m" :mode="button.mode">
                {{button.title}}
            </Button>
        </div>
    </header>
</template>

<script lang="ts" setup>
import type { Navigation } from '@/types/content';
const { data: nav } = await useAsyncData<Navigation[]>('navigation', () => fetchContentNavigation())
const navigation = computed(() => {
    return nav.value?.filter((item: Navigation) => item._path !== '/')
})


const { data } = await useAsyncData('', () => queryContent('/_header').findOne())
</script>

<style>
.page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
}

.page-header > * {
    flex: 1;
}

.page-header-logo {
    height: 25px;
    display: flex;
    align-items: center;
    gap: var(--gap-m);
    font-size: 14px;
    font-weight: 600;
    flex: 1;
}

.page-header-logo img{
    max-height: 100%;
}

.page-header-cta {
    display: flex; 
    justify-content: flex-end;
}
</style>