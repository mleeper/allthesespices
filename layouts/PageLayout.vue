<template>
  <div class="site-layout">
    <div class="background">
      <header>
        <SiteTitle />
        <MainMenu />
      </header>
      <main class="wrapper main" :class="{'overlay-content': overlayContent}" id="content">
        <div class="top"><slot></slot></div>
        <div class="middle">
          <slot name="middle"></slot>
        </div>
      </main>
    </div>
    <footer class="bottom">
      <slot name="bottom"></slot>
      <SiteNav />
      <SlidePanel position="bottom" :overlay="false">
        <template #trigger>
         <span>Disclaimer</span>
        </template>
        <template>
          <Disclaimer />
        </template>
      </SlidePanel>
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
import SlidePanel from '../components/SlidePanel';
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
    SlidePanel,
  },
  props: {
    overlayContent: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  padding: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  height: 75px;
  @media(min-width: 768px) {
    height: 100px;
  }
}
main {
  overflow-y: scroll;
  padding: 1rem;

  &.overlay-content {
    background: rgba(255, 255, 255, 0.65);
  }

  height: calc(100vh - 145px);
  @media(min-width: 768px) {
    height: calc(100vh - 180px);
  }
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
  height: 70px;

  @media(min-width: 768px) {
    height: 80px;
  }
}
.background {
  background-image: url('/spiceboard-mobile.jpg');
  background-size: cover;
  background-attachment: fixed;

  @media(min-width: 768px) {
    background-image: url('/spiceboard.jpg');
  }
}
</style>
