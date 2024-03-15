<template>
    <ContentDoc v-slot="{ doc }" >
        <Effect :highlight="isButtonHovered" />
        <EffectParticles />
        <PageHeader />
        <section>
            <PageHeading 
                v-if="doc.heading"
                :label="doc.heading.label" 
                :title="doc.heading.title" 
                :subtitle="doc.heading.description" 
                :buttons="doc.heading.buttons"
                @buttonHover="onButtonHover"
                @buttonOut="onButtonOut"
            />
        </section>
        <section>
            <PageCardBrowser :image="doc.mainFeature.src" />
        </section>
    </ContentDoc>
</template>    

<script lang="ts" setup>
const isButtonHovered = ref(false);

const onButtonHover = () => {
    isButtonHovered.value = true;
}

const onButtonOut = () => {
    isButtonHovered.value = false;
}
</script>