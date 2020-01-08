<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="recipes">
                <RecipeExcerptList :categories="categories" :items="items" />
            </div>
        </template>
    </PageLayout>
</template>
<script>
    import PageLayout from '../../layouts/PageLayout';
    import Heading from '../../components/Heading';
    import Icon from '../../components/Icon';
    import RecipeExcerptList from '../../components/RecipeExcerptList';
    import endpoints from '../../api/endpoints';
    export default {
        name: 'Recipes',
        data: function() {
            return {
                categories: [],
                items: [],
                filters: [],
            }
        },
        components: {
            PageLayout,
            Heading,
            Icon,
            RecipeExcerptList
        },
        async asyncData( { $axios, params, req, res } ) {
            const recipes = await $axios.get(endpoints.recipes());
            return {
                items: recipes.data.recipes,
                categories: [
                    { 
                        icon: {name: 'icon-pancake'},
                        title: 'Breakfast'
                    },
                    { 
                        icon: {name: 'icon-food-plate'},
                        title: 'Lunch'
                    },
                    { 
                        icon: {name: 'icon-rice-bowl'},
                        title: 'Dinner'
                    },
                    { 
                        icon: {name: 'icon-pie'},
                        title: 'Dessert'
                    }
                ]
            }
        }
    };
</script>
<style lang="scss" scoped>
    .recipes {
        background: rgba(255, 255, 255, 0.65);
    }
</style>