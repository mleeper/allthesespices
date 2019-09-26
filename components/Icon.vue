<script>
    export default {
        name: 'Icon',
        props: {
            icon: {
                type: String,
                required: true
            },
            cssClass: {
                type: String,
                required: false,
                default: ''
            },
            size: {
                type: String,
                required: false,
                default: 'icon-s'
            }
        },
        render(h) {
            return this.icon.indexOf('fa-') >=0 ? 
                <span class={`${this.icon} ${this.cssClass}`}></span> :
                <svg class={`custom-icon ${this.icon} ${this.size} ${this.cssClass}`}>
                    <use href={`/custom-icons.svg#${this.icon}`}></use>
                </svg>
        }
    }
</script>

<style lang="scss" scoped>
    .custom-icon {
        &.icon-xs {
            width: 2rem;
            height: 2rem;
        }
        &.icon-s {
            width: 3rem;
            height: 3rem;
        }
        &.icon-m {
            width: 4rem;
            height: 4rem;
        }
        &.icon-l {
            width: 5rem;
            height: 5rem;
        }
        &.icon-xl {
            width: 6rem;
            height: 6rem;
        }
    }
</style>
