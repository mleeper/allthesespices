<template>
  <div class="site-layout">
    <div class="background">
      <header>
      <SiteTitle />
      <!-- <div class="site-subtitle">
        Which spices? All these spices:
      </div> -->
      <SiteNav />
      </header>
      <main class="wrapper main" id="content">
        <div class="top"><slot></slot></div>
        <div class="middle">
          <!-- <Topics /> -->
          <slot name="middle"></slot>
        </div>
      </main>
    </div>
    <footer class="bottom">
      <slot name="bottom"></slot>
      <SiteFooter />
    </footer>
  </div>
</template>
<script>
import SiteTitle from "../components/SiteTitle";
import SiteNav from "../components/SiteNav";
import SiteHeader from "../components/SiteHeader";
import Topics from "../components/Topics";
import SiteFooter from "../components/SiteFooter";
export default {
  name: `SiteLayout`,
  components: {
    SiteTitle,
    SiteNav,
    SiteHeader,
    Topics,
    SiteFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  display: flex;
  margin-bottom: 2rem;
}
.site-title {
  font-size: 64px;
}
.site-subtitle {
  font-size: 36px;
}
.background {
  background: url('/spiceboard.jpg');
  background-size: cover;
}
.top {
  padding: 0 1rem;
  height: 500px;
}
.middle {
  padding: 2rem 1rem 0 1rem;
  background: #f6f5f7;
}
</style>
