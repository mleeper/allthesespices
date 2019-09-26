<template>
  <div class="site-footer">
    <SiteTitle />
    <SiteNav />
    <div class="disclaimer">
      The information on this site is for informational purposes only and does
      not constitute professional advice.
    </div>
    <div class="copyright">
      Copyright &copy; allthesespices.com. All Rights Reserved
    </div>
  </div>
</template>
<script>
import SiteNav from "./SiteNav";
import SiteTitle from "./SiteTitle";
export default {
  name: `SiteFooter`,
  props: [],
  components: {
    SiteNav,
    SiteTitle
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.site-footer {
  text-align: center;
  background: #fff;
  .site-title {
    font-size: 30px;
  }
}
</style>
