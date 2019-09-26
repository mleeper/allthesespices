<template>
  <div class="topics grid-x small-up-2 medium-up-4">
    <div class="cell">
      <div class="topic-list">
        <Heading level="4">Favorite Ingredients</Heading>
        <ListOfLinks
          :list="[
            { name: 'Cashew', href: '#' },
            { name: 'Tomatoes', href: '#' },
            { name: 'Sweet Potatoes', href: '#' },
            { name: 'Liquid Smoke', href: '#' },
            { name: 'Nutritional Yeast', href: '#' }
          ]"
        />
      </div>
    </div>
    <div class="cell">
      <div class="topic-list">
        <Heading level="4">Best Kitchen Gadgets</Heading>
        <ListOfLinks
          :list="[
            { name: 'Pressure Cooker', href: '#' },
            { name: 'Immersion Blender', href: '#' },
            { name: 'Air Fryer', href: '#' },
            { name: 'Stand Mixer', href: '#' },
            { name: 'Toaster Over', href: '#' }
          ]"
        />
      </div>
    </div>
    <div class="cell">
      <div class="topic-list">
        <Heading level="4">Randomness</Heading>
        <ListOfLinks
          :list="[
            { name: 'Meditation', href: '#' },
            { name: 'Video Games', href: '#' },
            { name: 'Photography', href: '#' },
            { name: 'Water Colors', href: '#' },
            { name: 'Music', href: '#' }
          ]"
        />
      </div>
    </div>
    <div class="cell">
      <div class="topic-list">
        <Heading level="4">Vegan Living</Heading>
        <ListOfLinks
          :list="[
            { name: 'Compassionate Travel', href: '#' },
            { name: 'Charities We support', href: '#' },
            { name: 'Cruelty free products', href: '#' },
            { name: 'Replacements', href: '#' },
            { name: 'Good Reads', href: '#' },
            { name: 'Clean Entertainment', href: '#' }
          ]"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ListOfLinks from "./ListOfLinks";
import Heading from "./Heading";
export default {
  name: `Topics`,
  props: [],
  components: {
    ListOfLinks,
    Heading
  }
};
</script>
<style lang="scss">
@import "~/assets/colors.scss";
.topics {
  .topic-list {
    .heading {
      margin: 0;
    }
    .list-of-links {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        height: 2.5rem;
        border-bottom: 1px solid #fff;
        a {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
