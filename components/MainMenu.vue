<template>
    <div class="main-menu">
        <SlidePanel>
            <template #trigger>
                <Icon icon="fas fa-bars fa-2x" />
            </template>
            <template>
                <SiteNav orientation="vertical" color="#FFF" />
            </template>
        </SlidePanel>       
    </div>
</template>
<script>
import Icon from "./Icon";
import SiteNav from "./SiteNav";
import SlidePanel from './SlidePanel';

export default {
  name: `MainMenu`,
  components: {
    Icon,
    SiteNav,
    SlidePanel,
  },
  data: function() {
      return {
          isOpen: false
      }
  },
  methods: {
      toggleMenu: function(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
      }
  }
};
</script>
