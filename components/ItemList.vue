<script>
    import Icon from '../components/Icon'; 
    export default {
        name: 'ItemList',
        props: {
            categories: {
                type: Array,
                required: false,
                default: function() {
                    return []
                }
            },
            items: {
                type: Array,
                required: true
            },
            filters: {
                type: Array,
                required: false,
                default: function() {
                    return []
                }
            },
            searchable: {
                type: Boolean,
                required: false,
                default: true
            },
            sortable: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        components: {
            Icon
        },
        render(h) {
            return (
                <div class="item-list">
                    <ol class="items">
                        {
                            this.items.map(el => {
                                return(
                                    <li>
                                        <a href={`/recipes/${el.name}`}>
                                            <figure>
                                                <img src={el.image ? el.image.medium : 'http://api.allthesespices.com/wp-content/uploads/2019/11/anise-aroma-aromatic-301669.jpg'} />
                                                <figcaption>
                                                    <p>{el.title}</p>
                                                    {el.description && <p>{el.description}</p>}
                                                </figcaption>
                                            </figure>
                                        </a>                            
                                    </li>
                                );
                            })
                        }
                    </ol>
                </div>
            )
        }
    }
</script>
<style lang="scss" scoped>
    .categories {
        display: flex;
        flex-flow: row;
        justify-content: center;

        .category {
            margin: 0 1rem;

            .category-icon {
                display: flex;
                justify-content: center;

                .icon-pancake {
                    opacity: .75;
                }
            }
        }
    }
    .toolbar {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        input {
            border: none;
            border-bottom: 1px solid #000;
            outline-width: 0 0 1px 0;
            background: transparent;
            padding-right: 2rem;
            width: 45vw;
        }
        .search-bar {
            position: relative;
            button {
                position: absolute;
                right: 1px;
            }
        }
        .controls {
            margin-left: 2rem;
            button {
                margin-right: 1rem;
            }
        }
    }
    .item-grid {
        margin-top: 2rem;
    }
    .items {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            a {
                display: block;
            }
        }

        img {
            width: 250px;
            height: 250px;
        }
    }
</style>
