<template>
  <div class="site-title"><a href="/">All These Spices</a></div>
</template>
<script>
export default {
  name: `SiteTitle`,
  props: []
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.site-title {
  font-family: "Fredericka the Great";
  font-size: 30px;

  @media(min-width: 768px) {
    font-size: 50px;
  }

  a {
    color: #000;
  }
}
</style>
