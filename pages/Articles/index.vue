<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="articles-list" :if="articles.length > 0">
                <ArticleExcerptList :list="articles" />
            </div>
        </template>
    </PageLayout>
</template>
<script>
    import PageLayout from '../../layouts/PageLayout';
    import Heading from '../../components/Heading';
    import ArticleExcerptList from '../../components/ArticleExcerptList';
    import endpoints from '../../api/endpoints';
    export default {
        name: 'Articles',
        components: {
            PageLayout,
            Heading,
            ArticleExcerptList
        },
        async asyncData( { $axios, params, req, res } ) {
            const articles = await $axios.get(endpoints.articles());
            return {
                articles: articles.data.articles
            }
        }
    }
</script>