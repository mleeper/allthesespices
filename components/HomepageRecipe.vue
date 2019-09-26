<script>
    export default {
        name: 'HomepageRecipe',
        props: {
            recipe: {
                type: Object,
                default: {}
            }
        },
        render(h) {
            return (
                <div class="menu-item grid-x">
                    <div class="cell medium-auto large-shrink menu-image">
                        <img src={this.recipe.image || `https://via.placeholder.com/250`} />
                    </div>
                    <div class="cell auto text">
                        <div class="title">{this.recipe.title}</div>
                        <div class="description">{this.recipe.description}</div>
                    </div>                                                                                    
                </div>
            );
        }
    }
</script>
<style lang="scss" scoped>
    .menu-item {
        margin-bottom: 2rem;
        .menu-image {
            @media screen and (max-width: 1023px) {
                text-align: center;
            }
            @media screen and (max-width: 767px) {
                order: 2;
            }
        }
        .text {
            @media screen and (max-width: 767px) {
                order: 1;
            }
            margin-left: 1rem;
            .title {
                font-family: 'Londrina Shadow';
                font-size: 40px;
                color:#69091d;
            }
        }
    }
</style>