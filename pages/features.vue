<template>
    <ContentDoc v-slot="{ doc }" >
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
        </section>
    </ContentDoc>
</template>

