<template>
    <header class="page-header">
        <div class="page-header-logo-wrapper">
            <NuxtLink to="/" class="page-header-logo">
                <img src="/logo.png"/>
                <span>
                    Nuxt SaaS Boilerplate
                </span>
            </NuxtLink>
        </div>
        <Menu :navigation="navigation"></Menu>
        <div><button>Login</button></div>
    </header>
</template>

<script lang="ts" setup>
import type { Navigation } from '@/types/content';
const { data } = await useAsyncData<Navigation[]>('navigation', () => fetchContentNavigation())
const navigation = computed(() => {
    return data.value?.filter((item: Navigation) => item._path !== '/')
})
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
    flex: 1;
}

.page-header-logo img{
    max-height: 100%;
}
</style>