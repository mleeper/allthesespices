<template>
  <header id="header">
    <div class="fixed-header">
      <div class="container">
        <nav class="row">
          <div class="col-xs-6">
            <a href="http://theleepdes.com">theLeedes - Food &amp; Lifestyle</a>
            <div>Helping you do the least amount of harm</div>
          </div>
          <div class="col-xs-6 right-align">
            <ul id="social-media" class="social-media-container">
              <li>
                <a
                  class="platform"
                  target="_blank"
                  href="https://instagram.com/theleepdes_eat_vegan/"
                  title="Instagram"
                >
                  <i title="Instagram" class="icon fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  class="platform"
                  target="_blank"
                  href="https://twitter.com/theLeepdes"
                  title="Twitter"
                >
                  <i title="Twitter" class="icon fab fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a
                  class="platform"
                  target="_blank"
                  href="https://www.facebook.com/theLEEPDEs.eat.vegan/"
                  title="Facebook"
                >
                  <i class="icon fab fa-facebook-square" title="Facebook"></i>
                </a>
              </li>
              <li>
                <a
                  class="platform"
                  target="_blank"
                  href="https://www.pinterest.com/theleepdes/"
                  title="Pinterest"
                >
                  <i title="Pinterest" class="icon fab fa-pinterest-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "SiteHeader"
};
</script>
<style lang="scss">
@import "~/assets/verticallyCenter.scss";
@import "~/assets/colors.scss";
$backgroundImage: #fff;
#header {
  .logo {
    float: left;
    width: 8rem;
    height: 8rem;
    background: $lavender;
    border-radius: 50%;
    text-align: center;
    font-size: 1.25rem;

    div {
      @include vertically-center;
    }
  }
}

.fixed-header {
  position: fixed;
  height: 40px;
  top: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background: url($backgroundImage) 0 -52px;
  z-index: 9997;
}
ul.social-media-container {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline;
    &:not(:last-child) {
      margin-right: 1rem;
    }
    a {
      color: $white;
      font-size: 2rem;
    }
  }
}
</style>
