<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="recipes">
                <ItemList :categories="categories" :items="items" />
            </div>
        </template>
    </PageLayout>
</template>
<script>
    import PageLayout from '../../layouts/PageLayout';
    import Heading from '../../components/Heading';
    import Icon from '../../components/Icon';
    import ItemList from '../../components/ItemList';
    import mockRecipes from '../../api/recipes.json';
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
            ItemList
        },
        async asyncData( { $axios, params, req, res } ) {
            const recipes = await $axios.get(endpoints.recipes());
            const data = await mockRecipes;
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
        },
        mounted() {
           console.log(this); 
        }
    };
</script>
<style lang="scss" scoped>
    .recipes {
    }
</style>