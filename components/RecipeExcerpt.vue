<script>
    export default {
        name: 'RecipeExcerpt',
        props: {
            recipe: {
                type: Object,
                default: {}
            }
        },
        render(h) {
            return (
                <div class="menu-item">
                    <div class="title"><a href={`/recipes/${this.recipe.name}`}>{this.recipe.title}</a></div>
                    <div class="cell medium-auto large-shrink menu-image">
                        <a href={`/recipes/${this.recipe.name}`}><img src={(this.recipe.image || {}).medium || `http://api.allthesespices.com/wp-content/uploads/2019/11/anise-aroma-aromatic-301669.jpg`} /></a>
                    </div>
                    <div class="description">{this.recipe.description}</div>                                                                                    
                </div>
            );
        }
    }
</script>
<style lang="scss" scoped>
    .menu-item {
        text-align: center;
        margin-bottom: 2rem;
        
        .title {
            text-align: left;
            font-family: 'Londrina Shadow';
            font-size: 40px;
            color:#69091d;

            a {
                cursor: pointer;
            }
        }
    }
</style>