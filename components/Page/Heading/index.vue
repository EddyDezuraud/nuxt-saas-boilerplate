<template>
    <section class="page-heading">
        <div class="page-heading-inner">
            <Chip v-if="label">{{label}}</Chip>
            <PageHeadingTitle v-if="title">{{ title }}</PageHeadingTitle>
            <PageHeadingText v-if="subtitle">{{ subtitle }}</PageHeadingText>
            <div class="page-heading-buttons" v-if="buttons">
                <Button v-for="button in buttons" :key="button.link" mode="magic" size="xl" :to="button.link">{{button.label}}</Button>
            </div> 

        </div>
    </section>
</template>

<script lang="ts" setup>
interface Button {
    label: string,
    link: string
}

interface Props {
    label: string,
    title: string,
    subtitle: string,
    buttons: Button[]
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

.page-heading-buttons {
    display: flex;
    gap: var(--gap-xl);
    flex-wrap: wrap;
    justify-content: center;
}
</style>