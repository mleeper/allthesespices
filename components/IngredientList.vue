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
                <ul class="ingredients">
                    {this.list.map(el => {
                        return <li>{el}</li>
                    })}
                </ul>
            </div>
        }
    }
</script>
<style lang="scss" scoped>

</style>