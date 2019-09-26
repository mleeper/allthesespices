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
                    <div class="categories">
                        {
                            this.categories.map(el => {
                                return(
                                    <div class="category">
                                        {el.icon && (
                                            <div class="category-icon">
                                                <Icon icon={el.icon.name} size={el.icon.size} />
                                            </div>
                                        )}
                                        <div class="category-title">{el.title}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div class="toolbar">
                        <div class="search-bar">
                            <input type="text" placeholder="Search for recipes by name or ingredient"/>
                            <button><Icon icon="fas fa-search" cssClass="search-icon"/></button>
                        </div>
                        <div class="controls">
                            <button><Icon icon="fas fa-sort" /></button>
                            <button><Icon icon="fas fa-filter" /></button>
                        </div>
                    </div>
                    <ol class="items">
                        {
                            this.items.map(el => {
                                return(
                                    <li>
                                        <figure>
                                            <img src={el.images.length ? el.images[0] : 'https://via.placeholder.com/250'} />
                                            <figcaption>
                                                <p>{el.title}</p>
                                                {el.description && <p>{el.description}</p>}
                                            </figcaption>
                                        </figure>                            
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
    }
</style>
