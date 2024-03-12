<template>
    <section class="page-heading">
        <div class="page-heading-inner">
            <Chip v-if="label">{{label}}</Chip>
            <PageHeadingTitle v-if="title">{{ title }}</PageHeadingTitle>
            <PageHeadingText v-if="subtitle">{{ subtitle }}</PageHeadingText>
            <Button mode="magic" size="xl" v-if="button">Free trial</Button>
        </div>
    </section>
</template>

<script lang="ts" setup>
interface Props {
    label: string,
    title: string,
    subtitle: string,
    button: boolean
}

const props = defineProps<Props>()
</script>

<style>
.page-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 142px
}

.page-heading-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    gap: var(--gap-xl);
}
</style>