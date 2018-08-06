<template>
<div class="grid-menu__item" @click="expand" >
    <div class="grid-menu__icon" v-html="this.icon">
    </div>
    <h4 class="grid-menu__heading">
        {{title}}
    </h4>
    <div class="circle-arrow">
        <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">		<!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->		<desc>Created with Sketch.</desc>		<defs></defs>		<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">		<g id="технологии" transform="translate(-369.000000, -461.000000)">		<g id="стрелка" transform="translate(370.000000, 462.000000)">		<g transform="translate(18.500000, 18.000000) rotate(-315.000000) translate(-18.500000, -18.000000) translate(9.000000, 12.000000)" fill="#FFFFFF">		<polygon id="Rectangle-6" points="13 0 19 6.0437128 13 12"></polygon>		<rect id="Rectangle-5" x="0" y="5" width="18" height="2"></rect>		</g>		<circle id="Oval-2" stroke="#FFFFFF" stroke-width="2" cx="18" cy="18" r="18"></circle>		</g>		</g>		</g>		</svg>
    </div>
    <div class="grid-menu__content">
        <span class="hidden hidden-text">		
		{{desc}}
        </span>
        <span class="grid-menu__text"></span>
    </div>
</div>
</template>

<script>
import anime from "animejs";
import Typed from "typed.js";

export default {
  props: ["title", "icon", "desc"],
  name: "GridMenuItem",
  mounted: function() {
    let $this = this,
      type = $this.$el.querySelector(".grid-menu__text"),
      text = $this.$el.querySelector(".hidden-text");
    const itemsAppearing = anime({
      targets: ".grid-menu__item",
      opacity: 1,
      duration: 300,
      easing: "easeInCubic",
      delay: function(el, i, l) {
        return i * 100;
      }
    });
    this.typed = new Typed(type, {
      strings: [text.innerHTML, ""],
      backDelay: 0,
      showCursor: false,
      contentType: "text",
      onStringTyped: (arrayPos, self) => {
        if (this.expanded) {
          this.typed.stop();
        }
      }
    });
    this.typed.stop();
  },
  methods: {
    expand: function() {
      this.expanded = !this.expanded;

      let $this = this,
        type = $this.$el.querySelector(".grid-menu__text"),
        text = $this.$el.querySelector(".hidden-text");

      let className = "grid-menu__item_expanded";

      if (!this.expanded) {
        // close
        // calls
        this.typed.toggle();

        setTimeout(() => {
          classInit();
        }, 700);

        // functions

        function classInit() {
          $this.$el.classList.remove(className);
          setTimeout(() => {
            $this.$el.classList.remove("f-layer");
          }, 700);
        }
      } else {
        //open
        let siblings = $this.$el.parentElement.childNodes;
        // calls

        removeClassFromSiblings(className);
        classInit(className);

        this.typed.start();
        this.typed.reset();

        // functions

        function removeClassFromSiblings(className) {
          for (const key in siblings) {
            if (siblings.hasOwnProperty(key)) {
              const element = siblings[key];
              element.classList.remove(className);
              if ($this.$el !== element) {
                setTimeout(() => {
                  element.classList.remove("f-layer");
                }, 700);
              }
            }
          }
        }

        function classInit(className) {
          $this.$el.classList.add(className);
          $this.$el.classList.add("f-layer");
        }
      }
    }
  },
  data() {
    return {
      expanded: false
    };
  }
};
</script>

<style lang="scss">
.grid-menu__content {
  position: absolute;
  background: hsl(228, 87%, 53%);
  left: 0;
  top: 0;
  max-width: 0vw;
  max-height: 20vw;
  @media screen and (max-width: 500px) {
    max-height: 40vw;
  }
  width: 100vw;
  height: 100vw;
  overflow: hidden;
  transition: all 0.7s cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 1;
}
.grid-menu {
  &__text {
    position: absolute;
    top: 12vw;
    left: 1.8vw;
    width: 81%;
    opacity: 0;
    transition: all 0.4s;
    transform: translate3d(0, 0, 0);
    word-break: break-all;
    @media screen and (max-width: 500px) {
      top: initial;
      bottom: 1em;
    }
  }
  &__item {
    opacity: 0;
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 20vw;
    height: 20vw;
    position: relative;
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    @media screen and (max-width: 500px) {
      width: 40vw;
      height: 40vw;
      border-bottom: 2px solid hsla(0, 0%, 100%, 0.1);
      &#block6,
      &#block4,
      &#block2 {
        .grid-menu__heading {
          transition: all 0.7s cubic-bezier(0.65, 0.05, 0.36, 1);
        }
      }
      &#block2.f-layer,
      &#block4.f-layer {
        .grid-menu__content {
          left: initial;
          right: 0 !important;
        }
      }
      &#block6.f-layer {
        .grid-menu__content {
          left: initial;
          top: initial;
          right: 0 !important;
          bottom: 0 !important;
        }
      }
      &#block7.f-layer,
      &#block5.f-layer {
        .grid-menu__content {
          top: initial;
          bottom: 0 !important;
        }
      }
    }
    &#block7.f-layer,
    &#block6.f-layer,
    &#block5.f-layer {
      .grid-menu__content {
        top: initial;
        bottom: 0 !important;
      }
    }
    &#block4.f-layer {
      .grid-menu__content {
        left: initial;
        right: 0 !important;
      }
    }
    &:hover {
      .grid-menu__content {
        max-width: 100%;
      }
    }

    &_expanded {
      z-index: 999 !important;
      &#block2 {
        .grid-menu__content {
          max-width: 60vw !important;
          @media screen and (max-width: 500px) {
            max-width: 80vw !important;
          }
        }
      }
      &#block4 {
        .grid-menu__content {
          right: 0;
          left: initial;
        }
        .grid-menu__heading {
          transform: translate3d(-1.75vw, 0, 0);
        }
      }
      &#block5,
      &#block6,
      &#block7,
      &#block8 {
        .grid-menu__heading {
          transform: translate3d(1vw, 10vw, 0);
          @media screen and (max-width: 500px) {
            transform: translate3d(1vw, -38vw, 0);
          }
        }
        .grid-menu__content {
          top: initial;
          bottom: 0;
        }
      }
      @media screen and (max-width: 500px) {
        &#block6,
        &#block4,
        &#block2 {
          transition: all 0.7s cubic-bezier(0.65, 0.05, 0.36, 1);

          .grid-menu__content {
            right: 0;
            left: initial;
          }
          .grid-menu__heading {
            transform: translate3d(-38vw, 0, 0);
          }
        }
        &#block6 {
          .grid-menu__heading {
            transform: translate3d(-38vw, -38vw, 0);
          }
        }
      }

      &#block8 {
        .grid-menu__content {
          right: 0;
          left: initial;
        }
      }
      .grid-menu__text {
        opacity: 1;
        transition-delay: 0.4s;
        transform: translate3d(1vw, 0, 0);
      }
      .grid-menu__heading {
        transform: translate3d(1vw, 0, 0);
      }
      .circle-arrow {
        transform: scale(0);
      }
      .grid-menu__content {
        max-width: 40vw !important;
        max-height: 40vw !important;
        overflow: visible;
        background: hsl(228, 87%, 53%);
        @media screen and (max-width: 500px) {
          max-width: 80vw !important;
          max-height: 80vw !important;
        }
      }
    }
  }

  &__icon {
    display: flex;
    z-index: 4;
    position: relative;
  }
  &__heading {
    color: #fff;
    margin: 3.8vw 0 0 1.8vw;
    z-index: 4;
    position: relative;
    transition: all 0.7s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
}
</style>
