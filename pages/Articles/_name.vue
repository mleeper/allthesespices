<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="recipe-card">
                <Heading level="3">{{article.title}}</Heading>
                <!-- <div>By: {{article.author}}</div>
                <div>{{new Date(article.date).toLocaleDateString()</div> -->
                <div class="recipe-content">
                    <WordPressHtml :content="article.content" />
                </div>
            </div>
        </template>
    </PageLayout>
</template>

<script>
    import mockRecipe from '../../api/recipe.json'
    import PageLayout from '../../layouts/PageLayout';
    import Heading from '../../components/Heading';
    import NameValuePair from '../../components/NameValuePair';
    import IngredientList from '../../components/IngredientList';
    import WordPressHtml from '../../components/WordPressHtml';
    import endpoints from '../../api/endpoints';
    export default {
        name: 'Recipe',
        components: {
            PageLayout,
            Heading,
            NameValuePair,
            WordPressHtml
        },
        data: function() {
            return {
                receipe: {}
            }
        },
        async asyncData( { $axios, params, req, res }) {
            const article = await $axios.get(endpoints.articles(params.name))
            return {
                article: article.data
            }
        },
        mounted() {},
        render(h) {}
    }
</script>

<style lang="scss" scoped>
    .recipe-card {
        .heading {
            text-align: center;
        }
        .recipe-content {
            background: #FFF;
            margin: 2rem auto;
            width: 85%;
        }
        .basic-details {
            width: 60vw;
            margin: 0 auto;
        }
        .image {
            text-align: center;
        }
        .recipe-procedure {
            height: 100%;
        }
        @media(min-width: 768px) {
            .recipe-content {
                width: 50%;
            }
            .basic-details {
                display: flex;
                justify-content: center;
                width: auto;
                margin: 0rem;

                .name-value-pair {
                    &:not(first-child) {
                        padding-left: 1rem;
                    }
                }
            }
        }
    }
</style>