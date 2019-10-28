<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="featured grid-x">
                <div class="articles medium-4 cell">
                    <Heading level="2">Articles</Heading>
                    <div class="list">
                        <Excerpt date='03/01/2019'
                                    title="Article Title"
                                    category="Saving Money"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    imageSrc="static/sample.jpg"
                        />
                        <Excerpt date='03/01/2019'
                                    title="Article Title"
                                    category="Saving Money"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    imageSrc="static/sample.jpg"
                        />
                        <Excerpt date='03/01/2019'
                                    title="Article Title"
                                    category="Saving Money"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    imageSrc="static/sample.jpg"
                        />
                        <Excerpt date='03/01/2019'
                                    title="Article Title"
                                    category="Saving Money"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    imageSrc="static/sample.jpg"
                        />
                    </div>
                </div>
                <div class="recipes medium-8 cell">
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
                recipes: data.recipes
            }
        },
        mounted() {
            console.log(this.recipes.breakfast);
        }
    };
</script>

<style lang="scss" scoped>
    .top {
        padding: 0 2rem;
        .featured {
            flex-flow: row wrap-reverse;
            
            @media(min-width: 768px) {
                flex-flow: row wrap;
            }
            .recipes {
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
