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
  margin-bottom: 2rem;
  height: 130px;
  padding: 2rem;
}
main {
  height: calc(100vh - 282px);
  overflow-y: scroll;
  padding: 2rem;
}
footer {
  height: 150px;
}
.site-subtitle {
  font-size: 36px;
}
.background {
  background: url('/spiceboard.jpg');
  background-size: cover;
  background-attachment: fixed;
}
</style>
