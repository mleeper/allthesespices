<script>
    import ArticleExcerpt from './ArticleExcerpt';
    export default {
        name: 'ExcerptList',
        components: {
            ArticleExcerpt
        },
        props: {
            list: {
                type: Array,
                required: false
            }
        },
        render(h) {
            return (
                this.list.map(article => (
                    <ArticleExcerpt
                        key={article.title}
                        name={article.name}
                        date={article.date}
                        title={article.title}
                        category={article.category}
                        text={article.excerpt}
                        image={article.image}
                    />
                ))
            );
        }
    }
</script>