<script>
    export default {
        name: 'IngredientList',
        props: {
            title: {
                type: String
            },
            list: {
                type: Array
            }            
        },
        render(h) {
            return <div class="ingredient-list">
                <div class="header">{this.title}</div>
                <ul class={`ingredients custom-list${this.title ? ' has-header' : ''}`}>
                    {this.list.map(el => {
                        return <li>{el}</li>
                    })}
                </ul>
            </div>
        }
    }
</script>
<style lang="scss" scoped>
    $ingredient-color: blue;
    .ingredient-list {
        .header {
            font-weight: bold;
            font-size: 1.25rem;
        }
        .ingredients {
            color: $ingredient-color;
            &.has-header {
                margin-left: 2rem;
            }
        }
    }
</style>