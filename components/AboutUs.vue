<template>
  <div :class="cssClasses">
    <div class="pic">
      <img :src="imgSrc" />
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: `AboutUs`,
  props: ["className", "text", "imgSrc"],
  computed: {
    cssClasses: {
      get: function() {
        return this.className ? `${this.className} about` : "about";
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.about {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;

  .pic {
    grid-column: col-start / span 4;
  }

  .text {
    grid-column: col-start 6 / span 7;
  }
}
</style>
