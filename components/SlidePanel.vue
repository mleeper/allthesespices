<template>
    <div class="slide-panel" :class="[{open : isOpen}, position]">
        <a href="#" v-on:click="toggleMenu">
            <slot name="trigger"></slot></a>
        <div class="overlay">
            <div class="content">
                <a class="close-button" href="#" v-on:click="toggleMenu"><Icon icon="fas fa-times" /></a>
                <slot></slot>
            </div>
        </div>
        
    </div>
</template>
<script>
import Icon from './Icon.vue';
export default {
  name: `SlidePanel`,
  components: {
      Icon,
  },
  props: {
      position: {
          type: String,
          default: 'left',
      }
  },
  data: function() {
      return {
          isOpen: false,
      }
  },
  methods: {
      toggleMenu: function(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
      }
  },
};
</script>
<style lang="scss" scoped>
.slide-panel {
    .overlay {
        position: fixed;
        transition: 0.5s;
        background: rgba(0, 0, 0, 0.9);
        height: 100%;
        width: 0;
        z-index: 1;
    }
    .content {
        position: fixed;
        z-index: 2;
        background-color: #111;
        opacity: 0.9;
        overflow-x: hidden;
        padding: 1rem 1rem 0 0;
        transition: 0.5s;
        color: #FFF;

        .close-button {
            display: block;
            text-align: right;
            color: #FFF;
        }        
    }
    &.open {
        .overlay {
            width: 100%;
        }
    }
    &.left {
        .overlay, .content {
            top: 0;
            left: -300px;
            width: 0vh;
            height: 100%;
        }
        &.open {
            .overlay {
                left: 0;
                width: 100%;
            } .content {
                left: 0;
                width: 100%;

                @media(min-width: 768px) {
                    width: 25vh;
                }
            }

        }
    }
    &.bottom {
        .overlay, .content {
            left: 0;
            top: 100%;
            width: 100%;
        }
        &.open {
            .overlay, .content {
                top: 80%;
            }
        }
    }

}
</style>
