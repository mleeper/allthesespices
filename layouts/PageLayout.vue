<template>
  <div class="site-layout">
    <div class="background">
      <header>
        <SiteTitle />
        <MainMenu />
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
      <SiteTitle />
      <SiteNav />
      <Disclaimer />
      <Copyright />
    </footer>
  </div>
</template>
<script>
import SiteTitle from "../components/SiteTitle";
import SiteNav from "../components/SiteNav";
import SiteHeader from "../components/SiteHeader";
import Topics from "../components/Topics";
import MainMenu from '../components/MainMenu';
import Copyright from '../components/Copyright';
import Disclaimer from '../components/Disclaimer';
export default {
  name: `SiteLayout`,
  components: {
    SiteTitle,
    SiteNav,
    MainMenu,
    SiteHeader,
    Topics,
    Copyright,
    Disclaimer,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  padding: 2rem;
  display: flex;
  align-items: baseline;

  & > div {
    flex:1 1 auto;
  }
}
main {
  height: calc(100vh - 282px);
  overflow-y: scroll;
  padding: 2rem;
}
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  .site-title {
    font-size: 20px;

    @media(min-width: 768px) {
      font-size: 30px;
    }
  }
}

.background {
  background: url('/spiceboard.jpg');
  background-size: cover;
  background-attachment: fixed;
}
</style>
