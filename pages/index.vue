<template>
    <ContentDoc v-slot="{ doc }" >
        <Effect />
        <EffectParticles />
        <PageHeader />
        <section>
            <PageHeading 
                v-if="doc.heading"
                :label="doc.heading.label" 
                :title="doc.heading.title" 
                :subtitle="doc.heading.description" 
                button
            />
        </section>
        <section>
            <PageCardMain :image="doc.mainFeature.src" />
        </section>
    </ContentDoc>
</template>    