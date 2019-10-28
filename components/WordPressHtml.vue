<template>
    <div class="wordpress-html-content" v-html="content"></div>
</template>
<script>
    export default {
        name: 'WordPressHtml',
        props: {
            content: {
                type: String,
                required: true
            }
        }
    };
</script>
<style lang="scss">
   .wordpress-html-content {
       ol, ul {
           padding-left: 1.5rem;
       }
   }
</style>