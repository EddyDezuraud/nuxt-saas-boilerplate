<template>
    <ContentDoc v-slot="{ doc }" >
        <Effect />
        <effect-particles />    
        <PageHeader />
        <section>
            <PageHeading 
                v-if="doc.heading"
                :label="doc.heading.label" 
                :title="doc.heading.title" 
                :subtitle="doc.heading.description" 
            />
        </section>
    </ContentDoc>
</template>    