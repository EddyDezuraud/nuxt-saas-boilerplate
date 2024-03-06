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
            />
        </section>
        <section>
            <PageCardMain />
        </section>
    </ContentDoc>
</template>    