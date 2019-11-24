<script>
    import Excerpt from './Excerpt';
    export default {
        name: 'ExcerptList',
        components: {
            Excerpt
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
                    <Excerpt
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