<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="featured">
                <div class="articles">
                    <Heading level="2">Articles</Heading>
                    <div v-if="articles.length > 0" class="list">
                        <Excerpt
                          v-for="article in articles"
                          :key="article.title"
                          :date="article.date"
                          :title="article.title"
                          :category="article.category"
                          :text="article.excerpt"
                          :image="article.image"
                        />
                    </div>
                    <div v-else>Stay tuned, coming soon</div>
                </div>
                <div class="recipes">
                    <Heading level="2">On the Menu Today</Heading>
                    <div class="recipe-box">
                        <b-tabs :model="activeTab">
                            <b-tab-item label="Breakfast">
                                <div class="menu">
                                    <div class="menu-item-container" v-for="recipe in recipes.breakfast" :key="recipe.id">
                                        <HomepageRecipe :recipe=recipe></HomepageRecipe>
                                    </div>     
                                </div>
                            </b-tab-item>
                            <b-tab-item label="Lunch">
                                <div class="menu">
                                    <div class="menu-item-container" v-for="recipe in recipes.lunch" :key="recipe.id">
                                        <HomepageRecipe :recipe=recipe></HomepageRecipe>
                                    </div>     
                                </div>
                            </b-tab-item>
                            <b-tab-item label="Dinner">
                                <div class="menu">
                                    <div class="menu-item-container" v-for="recipe in recipes.dinner" :key="recipe.id">
                                        <HomepageRecipe :recipe=recipe></HomepageRecipe>
                                    </div>     
                                </div>
                            </b-tab-item>
                            <b-tab-item label="Dessert">
                                <div class="menu">
                                    <div class="menu-item-container" v-for="recipe in recipes.dessert" :key="recipe.id">
                                        <HomepageRecipe :recipe=recipe></HomepageRecipe>
                                    </div>     
                                </div>
                            </b-tab-item>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </template>
    </PageLayout>
</template>
<script>
    import PageLayout from '../layouts/PageLayout';
    import Heading from '../components/Heading';
    import Excerpt from '../components/Excerpt';
    import HomepageRecipe from '../components/HomepageRecipe';
    import endpoints from '../api/endpoints';    
    import homepageData from '../api/homepage.json';
    export default {
        name: 'Home',
        components: {
            PageLayout,
            Heading,
            Excerpt,
            HomepageRecipe
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
                articles: data.testArticles
            }
        },
        mounted() {
            console.log(this);
        }
    };
</script>

<style lang="scss" scoped>
    .top {
        padding: 0 2rem;
        .featured {
            @media(min-width: 768px) {
                display: flex;
            }
            .recipes {
                @media(min-width: 768px) {
                    margin-left: 2rem;
                    width: 60%;
                }
                .heading {
                    margin-top: 0rem;
                }
                .recipe-box {
                    background: whitesmoke;
                
                    border-radius: 5px;
                    position: relative;
                    box-shadow: -4px 12px 7px #888888;
                    .tab-content {
                        padding: 1rem;
                    }                    
                    .vue-tabs {
                        .nav-tabs-navigation {
                            margin-bottom: 0;
                        }
                    }
                    .menu {
                        
                    }
                }
            }
        }
        .articles {
            .list {
                height: 60vh;
                overflow-y: scroll;
            }
            @media(min-width: 768px) {
                width: 40%;
            }
            .heading {
                    margin-top: 0rem;
                }
            .excerpt {
                width: 90%;
                margin-bottom: 1rem;
            }
        }
    }
</style>
