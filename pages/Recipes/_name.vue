<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="recipe-card">
                <Heading level="3">{{recipe.title}}</Heading>
                <div class="basic-details">
                    <NameValuePair name="Prep & Cook Time" :value="recipe.time" />
                    <NameValuePair name="Yield" :value="recipe.yield" />
                    <NameValuePair name="Equipment" :value="recipe.equipment" />
                </div>
                <div class="recipe-content">
                    <b-tabs :model="activeTab">
                        <b-tab-item label="Ingredients">
                            <div class="ingredients">
                                <IngredientList v-for="list in recipe.ingredients" 
                                                :title="list.label" 
                                                :list="list.ingredients" 
                                                :key="list.label" 
                                />
                            </div>
                        </b-tab-item>
                        <b-tab-item label="Procedure">
                            <div class="recipe-procedure">
                                {{recipe.procedure}}
                            </div>
                        </b-tab-item>
                    </b-tabs>
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
    import endpoints from '../../api/endpoints';
    export default {
        name: 'Recipe',
        components: {
            PageLayout,
            Heading,
            NameValuePair,
            IngredientList
        },
        data: function() {
            return {
                receipe: {}
            }
        },
        async asyncData( { $axios, params, req, res }) {
            const recipe = await $axios.get(endpoints.recipes(params.name))
            // const data = await mockRecipe;
            return {
                recipe: recipe.data
            }
        },
        mounted() {
            console.log(this.recipe);
        },
        render(h) {
            
        }
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
            width: 75%;
        }
        .basic-details {
            width: 60vw;
            margin: 0 auto;
        }
        .ingredient-list {
            margin-bottom: 1rem;
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
    .recipe-procedure {
        height: 100%;
    }
</style>