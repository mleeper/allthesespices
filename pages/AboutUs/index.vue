<template>
    <PageLayout name="DefaultLayout">
        <template #default>
            <div class="about-us">
                <Heading level={2} v-html="aboutUs.first_name[0]"></Heading>
                <div class="bio-picture">
                    <div class="picture-border">
                        <img src="/about-us.jpg" />
                    </div>
                </div>
                <div class="bio">{{aboutUs.description[0]}}</div>
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
        .bio-picture {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;

            .picture-border {
                border: 3px solid #866517;

                img {
                    border: 6px solid goldenrod;
                }
            }
        }
        .bio {
             background: rgba(255, 255, 255, .9);
             padding: 1rem;
             line-height: 2;
             @media(min-width: 1024px) {
                width: 50%;
                margin: 0 auto;
             }
        }
    }
</style>