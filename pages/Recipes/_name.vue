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
                    <IngredientList v-for="list in recipe.ingredients" :title="list.label" :list="list.ingredients" :key="list.label" />
                </div>
            </div>
        </template>
    </PageLayout>
</template>

<script>
    import recipe from '../../api/recipe.json'
    import PageLayout from '../../layouts/PageLayout';
    import Heading from '../../components/Heading';
    import NameValuePair from '../../components/NameValuePair';
    import IngredientList from '../../components/IngredientList';
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
        async asyncData( { axios, params, req, res }) {
            const data = await recipe;
            return {
                recipe: recipe,
                params: params
            }
        },
        mounted() {
            console.log(this);
        },
        render(h) {
            
        }
    }
</script>

<style lang="scss" scoped>
    .recipe-card {
        border: 1px solid lightgray;
        background: lightgray;

        .heading {
            margin: 0 4rem;
        }

        .recipe-content {
            background: #FFF;
            margin: 2rem;
        }
        @media(min-width: 768px) {
            .heading {
                text-align: center;
                margin: 0;
            }

            .basic-details {
                display: flex;
                justify-content: space-evenly;
            }
        }
    }
</style>