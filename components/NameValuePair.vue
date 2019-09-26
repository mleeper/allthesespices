<script>
    export default {
        name: 'NameValuePair',
        props: {
            name: {
                type: String
            },
            value: {
                type: String
            }            
        },
        render(h) {
            return <div class="name-value-pair">
                <div class="name">{this.name}</div>
                <div class="value">{this.value}</div>
            </div>
        }
    }
</script>
<style lang="scss" scoped>
    .name-value-pair {
        display: flex;

        .name {
            font-weight: bold;
            font-size: 1rem;

            &:after {
                content: ':';
                margin-right: .25rem;
            }
        }

        .value {
            font-size: 1rem;
        }

        @media(min-width: 768px) {
            display: block;

            .name {
                &:after {
                    content: '';
                    margin-right: 0;
                }
            }
        }
        
    }
</style>

