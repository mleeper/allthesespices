<script>
export default {
  name: `SiteNav`,
  props: {
    color: {
      type: String,
    },
    orientation: {
      type: String,
      default: 'horizontal'
    },
  },
  data: function() {
    return {
      items: [
        {name: 'Home', path: '/'},
        {name: 'Recipes', path: '/recipes'},
        {name: 'Articles', path: '/articles'},
        {name: 'Who We Are', path: '/aboutus'},
      ]
    }
  },
  render(h) {
    const color = this.color ? `color: ${this.color}` : undefined;
    return (
      <nav class={`site-nav ${this.orientation}`}>
        <ul>
          {this.items.map(el => (
            <li key={el.name + el.path}>
              <a href={el.path} style={color}>{el.name}</a>
            </li>
          ))}
        </ul>        
      </nav>
    )
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.site-nav {
  @media(min-width: 768px) {
    font-size: 1.25rem;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      margin-left: 0.5rem;
    }
  }

  &.vertical {
    ul {
      display: block;
    }
  }
}
</style>
