<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="recipe-link feature-text">
                <a href="/recipes">Try our recipes</a>
            </div>
            <div class="articles-link feature-text">
                <a href="/articles">Read Our Articles</a>
            </div>
            <div class="live-vegan feature-text">
                Live Vegan
            </div>
        </template>
    </PageLayout>
</template>
<script>
    import PageLayout from '../layouts/PageLayout';
    import Heading from '../components/Heading';
    import ArticleExcerpt from '../components/ArticleExcerpt';
    import RecipeExcerpt from '../components/RecipeExcerpt';
    import endpoints from '../api/endpoints';    
    import homepageData from '../api/homepage.json';
    export default {
        name: 'Home',
        components: {
            PageLayout,
            Heading,
            ArticleExcerpt,
            RecipeExcerpt
        },
        data() {
            return {
                activeTab: 0
            }
        },
        async asyncData( { $axios } ) {
            const { data } = await $axios.get(endpoints.homepage);
            //const data = await homepageData;
            return {
                recipes: data.recipes,
                articles: data.articles
            }
        },
        mounted() {
            console.log(this);
        }
    };
</script>

<style lang="scss" scoped>
    .feature-text {
        font-family: "Bungee Inline";
        font-size: 43px;
        margin-bottom: 10rem;

        a {
            color: #000;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .recipe-link {
        text-align: center;
    }
    .articles-link {
        text-align: left;
    }
    .live-vegan {
        text-align: right;
    }
</style>
