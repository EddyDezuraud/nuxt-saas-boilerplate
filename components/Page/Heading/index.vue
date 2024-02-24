<template>
    <section class="page-heading">
        <div class="page-heading-inner">
            <Chip>{{label}}</Chip>
            <PageHeadingTitle>{{ title }}</PageHeadingTitle>
            <PageHeadingText>{{ subtitle }}</PageHeadingText>
        </div>
    </section>
</template>

<script lang="ts" setup>
interface Props {
    label: string,
    title: string,
    subtitle: string
}

const props = defineProps<Props>()
</script>

<style>
.page-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.page-heading-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    gap: var(--gap-xl);
}
</style>