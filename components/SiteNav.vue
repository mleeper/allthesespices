<script>
export default {
  name: `SiteNav`,
  props: {
    color: {
      type: String,
      orientation: String,
    }
  },
  render(h) {
    return (
      <nav class="site-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/aboutus">Who We are</a></li>
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
}
</style>
