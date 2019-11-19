<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="articles-list" :if="articles.length > 0">
                <ExcerptList :list="articles" />
            </div>
        </template>
    </PageLayout>
</template>
<script>
    import PageLayout from '../../layouts/PageLayout';
    import Heading from '../../components/Heading';
    import ExcerptList from '../../components/ExcerptList';
    import endpoints from '../../api/endpoints';
    export default {
        name: 'Articles',
        components: {
            PageLayout,
            Heading,
            ExcerptList
        },
        async asyncData( { $axios, params, req, res } ) {
            const articles = await $axios.get(endpoints.articles());
            return {
                articles: articles.data.articles
            }
        }
    }
</script>