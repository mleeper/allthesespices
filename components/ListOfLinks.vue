<template>
  <ul :class="cssClasses">
    <li v-for="item in list" :key="item.name">
      <a :href="item.href">{{ item.name }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "ListOfLinks",
  props: ["list", "cssClass"],
  computed: {
    cssClasses: {
      get: vm => `list-of-links${vm.cssClass ? ` ${vm.cssClass}` : ""}`
    }
  }
};
</script>