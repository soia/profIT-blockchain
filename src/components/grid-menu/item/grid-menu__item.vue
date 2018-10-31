<template>
<div class="grid-menu__item" @click="expand">

    <h4 class="grid-menu__heading">
        <div class="grid-menu__icon" v-if="this.icon">
            <img :src="this.icon" alt="">
        </div>
        <div class="grid-menu__icon" v-if="this.partner" v-html="this.partner">
        </div>
        {{title}}
    </h4>
    <div class="circle-arrow" v-html="this.circleArrow"></div>
    <div class="grid-menu__content">
        <span class="hidden hidden-text">

          {{desc}}
        </span>
        <span class="grid-menu__text"></span>
        <div class="closeIcon" v-html="this.closeIcon"></div>
    </div>
</div>
</template>

<script>
import anime from "animejs";
import Typed from "typed.js";

export default {
  props: ["title", "icon", "desc", "partner"],
  name: "GridMenuItem",
  mounted: function() {
    let $this = this,
      type = $this.$el.querySelector(".grid-menu__text"),
      text = $this.$el.querySelector(".hidden-text");

    const itemsAppearing = anime({
      targets: ".grid-menu__item",
      typeSpeed: 0,
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
          }, 1400);
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
                }, 1400);
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
      expanded: false,
      circleArrow: `<div class="arrowIconHolder">
                <svg id="circleArr" width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="menu" transform="translate(-369.000000, -461.000000)">
                        <g  transform="translate(370.000000, 462.000000)">
                            <g id="circleArr__arr" transform="translate(18.500000, 18.000000) rotate(-315.000000) translate(-18.500000, -18.000000) translate(9.000000, 12.000000)" fill="#000000">
                                <polygon fill="currentColor"  id="Rectangle-6" points="13 0 19 6.0437128 13 12"></polygon>
                                <rect fill="currentColor"  id="Rectangle-5" x="0" y="5" width="18" height="2"></rect>
                            </g>
                            <circle id="Oval-2" stroke="currentColor" stroke-width="2" cx="18" cy="18" r="18"></circle>
                        </g>
                    </g>
                </g>
            </svg>
            </div>`,
      closeIcon: `<div class="closeIconHolder">
                <svg id="closeIcon" width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="menu" transform="translate(-369.000000, -461.000000)">
                        <g  transform="translate(370.000000, 462.000000)">
                            <g class="closeIconRect closeIconRect_l" transform="translate(18.500000, 18.000000) rotate(-315.000000) translate(-18.500000, -18.000000) translate(9.000000, 12.000000)" fill="#000000">
                                <rect fill="currentColor"  id="Rectangle-5" x="0" y="5" width="18" height="2"></rect>
                            </g>
                            <g class="closeIconRect closeIconRect_r" transform="translate(18.500000, 18.000000) rotate(-315.000000) translate(-18.500000, -18.000000) translate(9.000000, 12.000000)" fill="#000000">
                                <rect fill="currentColor"  id="Rectangle-123" x="0" y="5" width="18" height="2"></rect>
                            </g>
                            <circle id="Oval-2" stroke="currentColor" stroke-width="2" cx="18" cy="18" r="18"></circle>
                        </g>
                    </g>
                </g>
            </svg>
            </div>`
    };
  }
};
</script>

<style lang="scss">
.technologies {
  .grid-menu__item {
    @media (min-width: 500px) {
      &#block3.f-layer,
      &#block7.f-layer {
        .grid-menu__content {
          left: initial;
          right: 0 !important;
        }
      }
    }
  }
  .grid-menu__item_expanded {
    .grid-menu__content {
      max-width: 60vw !important;
      @media screen and (max-width: 500px) {
        max-width: 80vw !important;
      }
    }
    @media (min-width: 500px) {
      &#block4,
      &#block3 {
        .grid-menu__heading {
          transform: translate3d(-38.75vw, 0, 0);
        }
      }
      &#block8,
      &#block7 {
        .grid-menu__heading {
          transform: translate3d(-38vw, -20vw, 0);
        }
      }
    }
  }
  .grid-menu__heading {
    margin-top: 3.2vw;
    font-size: 0.9em;
    width: 85%;
    line-height: 1.1;
    @media (max-width: 500px) {
      margin-top: 14vw;
      font-size: 0.6em;
      width: 70%;
    }
  }
  .grid-menu__content {
    .closeIcon {
      right: initial;
      bottom: initial;
      top: 9em;
      left: 1.5em;
    }
  }
  .grid-menu__text {
    top: 10vw;
    line-height: 1.4;
    left: 19.5vw;
    width: 60%;
    font-size: 0.758em;
    word-break: initial;
    @media (max-width: 500px) {
      top: 30vw;
      line-height: 1.2;
      width: 75%;
      padding-left: 0%;
    }
  }
  .grid-menu__icon {
    transition: all 0.7s cubic-bezier(0.65, 0.05, 0.36, 1) 0.7s;
    margin-left: 1.8vw;
    margin-top: 3.2vw;
    margin-bottom: 2.7vw;
    img {
      width: 80px;
      height: 80px;
      background: hsla(0, 0%, 0%, 0);
      position: absolute;
      top: -3vw;
      left: -2vw;
      transform: translate(-23%, -51%);
      @media (max-width: 500px) {
        width: 55px;
        height: 55px;
        top: -7vw;
        left: -1.6vw;
      }
    }
  }
}

.grid-menu__content {
  position: absolute;
  background: hsl(228, 87%, 53%);
  left: 0;
  top: 0;
  max-width: 0vw;
  max-height: 20vw;
  width: 100vw;
  height: 100vw;
  overflow: hidden;
  transition: all 0.7s cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 1;
  @media screen and (max-width: 500px) {
    max-height: 40vw;
    height: 122vw;
  }
  .closeIcon {
    position: absolute;
    bottom: 1.5em;
    right: 1.5em;
    transform: translate3d(0, 0, 0) rotate(-45deg);
    @media screen and (max-width: 500px) {
      bottom: initial;
      right: initial;
      top: 5em;
      left: 1.5em;
      #closeIcon {
        width: 22px;
        height: 22px;
      }
    }
    #closeIcon circle {
      stroke-dasharray: 126;
      stroke-dashoffset: 126;
      transition: all.7s ease-in-out;
    }
    .closeIconRect {
      position: absolute;
      transition: all.6s ease-in-out;
      visibility: hidden;
      rect {
        width: 19px;
      }
    }
  }
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
    font-size: 0.8em;
    font-family: "Courier New", Courier, monospace;
    font-weight: 400;
    @media screen and (max-width: 500px) {
      top: 6em;
      padding-left: 6%;
      left: 10.8vw;
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
    &:hover {
      .arrowIconHolder #circleArr {
        transform: rotate(0deg);
        transition-delay: 1s;
        #circleArr__arr {
          opacity: 1;
        }
      }
      .grid-menu__content {
        max-width: 100%;
        transition-delay: 0.7s;
      }
      &::before {
        height: 100%;
      }
      #circleArr circle {
        stroke-dashoffset: 0;
      }
    }
    .arrowIconHolder {
      #circleArr {
        transition: all.4s ease;
        transform: rotate(-45deg);
        circle {
          transition: all.7s ease-in-out;
        }
        #circleArr__arr {
          opacity: 0;
          transition: all.4s ease 0.3s;
        }
      }
    }
    &::before {
      content: "";
      width: 3px;
      height: 0;
      position: absolute;
      left: 0;
      top: 0;
      background: hsl(228, 87%, 53%);
      transition: all.7s ease-in-out;
    }
    .circle-arrow {
      transition-delay: 1s !important;
    }
    @media screen and (max-width: 500px) {
      width: 40vw;
      height: 40vw;
      &:nth-child(odd)::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100vw;
        background: hsla(0, 0%, 100%, 0.1);
        left: -10vw;
        top: 0;
      }
      &:first-child {
        &::after {
          content: initial;
        }
      }
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
      &#block6.f-layer,
      &#block8.f-layer {
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
      .circle-arrow {
        svg {
          width: 23px;
          height: 23px;
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
    &#block8.f-layer {
      .grid-menu__content {
        left: initial;
        top: initial;
        right: 0 !important;
        bottom: 0 !important;
      }
    }
    &_expanded {
      z-index: 999 !important;
      #closeIcon circle {
        stroke-dashoffset: 0 !important;
        transition-delay: 0.8s !important;
      }
      .closeIconRect {
        visibility: visible !important;
        transition-delay: 1.2s !important;
        &_l {
          transform: translate(17.5px, 18px) rotate(-360deg)
            translate(-18.5px, -18px) translate(9px, 12px);
        }
        &_r {
          transform: translate(17.5px, 18px) rotate(-270deg)
            translate(-18.5px, -18px) translate(9px, 12px);
        }
      }
      &#block4 {
        .grid-menu__content {
          right: 0;
          left: initial;
        }
        .grid-menu__heading {
          transform: translate3d(-18.75vw, 0, 0);
        }
      }
      &#block5,
      &#block6,
      &#block7 {
        .grid-menu__heading {
          transform: translate3d(1vw, -20vw, 0);
          @media screen and (max-width: 500px) {
            transform: translate3d(1vw, -80vw, 0);
          }
        }
        .grid-menu__content {
          top: initial;
          bottom: 0;
        }
      }
      &#block8 {
        .grid-menu__heading {
          transform: translate3d(-19vw, -20vw, 0);
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
        &#block6,
        &#block8 {
          .grid-menu__heading {
            transform: translate3d(-38vw, -80vw, 0);
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
        transition-delay: 0s !important;
      }
      .circle-arrow {
        transition-delay: 0s !important;
        transform: scale(0);
      }
      .grid-menu__content {
        max-width: 40vw !important;
        max-height: 40vw !important;
        overflow: visible;
        transition-delay: 0s !important;
        background: hsl(228, 87%, 53%);
        @media screen and (max-width: 500px) {
          max-width: 80vw !important;
          max-height: 120vw !important;
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
    transition-delay: 0.7s;
    font-size: 0.9em;
    @media (max-width: 500px) {
      margin-top: 28px;
      margin-left: 18px;
    }
  }
}
</style>
