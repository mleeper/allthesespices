<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="about-us">
                <Heading level={2} v-html="aboutUs.first_name[0]"></Heading>
                <div class="description">{{aboutUs.description[0]}}</div>
            </div>
        </template>
    </PageLayout>
</template>
<script>
    import PageLayout from '../../layouts/PageLayout';
    import Heading from '../../components/Heading';
    import endpoints from '../../api/endpoints';
    export default {
        name: 'Recipe',
        components: {
            PageLayout,
            Heading
        },
        data: function() {
            return {
                receipe: {}
            }
        },
        async asyncData( { $axios, params, req, res }) {
            const about = await $axios.get(endpoints.about())
            return {
                aboutUs: about.data
            }
        },
        mounted() {},
        render(h) {}
    }
</script>

<style lang="scss" scoped>
    .about-us {
        height: 100%;
        .heading {
            text-align: center;
            font-size: 21px;

            @media(min-width: 768px) {
                font-size: 40px;
            }
        }
        .description {
             background: rgba(255, 255, 255, .9);
             padding: 1rem;
             @media(min-width: 1024px) {
                width: 50%;
                margin: 0 auto;
             }
        }
    }
</style>