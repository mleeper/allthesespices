<template>
  <component :is="headingTag" :class="cssClasses">
    <slot />
  </component>
</template>
<script>
export default {
  name: `Heading`,
  props: ["level", "className"],
  computed: {
    headingTag: {
      get: function() {
        return `h${this.level}`;
      }
    },
    cssClasses: {
      get: function() {
        return this.className
          ? `${this.className} heading heading-${this.level}`
          : `heading heading-${this.level}`;
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.heading {
  font-family: "Bungee Inline";
}
.heading-1 {
  font-size: 36px;
}
.heading-2 {
  font-size: 30px;
}
.heading-3 {
  font-size: 24px;
}
.heading-4 {
  font-size: 20px;
}
.heading-5 {
  font-size: 18px;
}
</style>
