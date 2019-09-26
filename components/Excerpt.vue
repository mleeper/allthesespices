<template>
  <div class="excerpt">
    <div class="grid-x header">
      <div class="cell shrink">
        <img :src="imageSrc" />
      </div>
      <div class="small-offset-1 cell auto">
        <div class="category">{{ category }}</div>
        <div class="title">{{ title }}</div>
        <div class="date">{{ date }}</div>
      </div>
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: `Excerpt`,
  props: ["date", "category", "title", "text", "imageSrc", "contentUrl"],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.excerpt {
  .header {
    margin-bottom: 1rem;
    .category {
      font-size: 14px;
      color: #69091d;
    }
    .date {
      color: #69091d;
      font-size: 13px;
    }
  }
}
</style>
