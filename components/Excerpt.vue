<template>
  <div class="excerpt">
    <div class="header">
      <Heading level="3" :if="title"><a :href="'/articles/' + name">{{ title }}</a></Heading>
      <div class="date" :if="date">{{ new Date(date).toLocaleDateString() }}</div>
      <div class="category" :if="category">{{ category }}</div>
    </div>
    <div class="content grid-x">
      <div class="cell large-shrink image">
        <img :src="image && typeof image.medium === 'string' ? image.medium : 'http://api.allthesespices.com/wp-content/uploads/2019/11/anise-aroma-aromatic-301669.jpg'" />
      </div>
      <div class="cell auto text" :if="text">{{ text }}</div>
    </div>
  </div>
</template>
<script>
import Heading from '../components/Heading';
export default {
  name: `Excerpt`,
  props: ["date", "category", "title", "text", "image", "contentUrl", "name"],
  components: { Heading },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.excerpt {
  .header {
    margin-bottom: 1rem;
    cursor: pointer;
    .category {
      color: #69091d;
    }
    .date {
      color: #69091d;
    }
  }
  .content {
    .text {
      margin-left: 8px;
    }
    .image {
      display: flex;
      justify-content: center;

      @media(min-width: 1024px) {
        display: block;
      }
    }
  }
  img {
    width: 150px;
  }
}
</style>
