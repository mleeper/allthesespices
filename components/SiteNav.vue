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
          <li><a href="/about-us">Who We are</a></li>
        </ul>
      </nav>
    )
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.site-nav {
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 0.5rem;
    }
  }
}
</style>
