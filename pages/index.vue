<template>
    <ContentDoc v-slot="{ doc }" >
        <Effect />
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