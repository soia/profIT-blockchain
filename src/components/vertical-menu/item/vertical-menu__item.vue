<template>
<div class="vertical-menu__item" @click="expandToggle" v-bind:class="{ 'vertical-menu__item_expanded': this.expanded }">
    <div class="vertical-menu__content">
        <div class="vertical-menu__text-wrap">
            <span class="vertical-menu__hint-text hoverMoveAnim" v-if="this.desc">{{desc}}</span>
            <h3 class="vertical-menu__heading hoverMoveAnim">{{title}}</h3>
        </div>
        <div class="vertical-menu__hint">
            <div class="arrowIconHolder">
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
            </div>
            <span class="vertical-menu__hint-text hoverMoveAnim" v-if="!this.desc">		Смотреть проект		</span>
        </div>
    </div>
    <div class="vertical-menu__hidden-content" v-if="this.hiddenContent">
        <span class="hidden hidden-text">		      {{hiddenContent}}
        </span>
        <span class="vertical-menu__hidden-text">
        </span>
    </div>
    <div class="project-desc" v-if="this.projectDesc">
        <span class="project-desc__text">
        {{this.projectDesc.desc}}
      </span>
        <a @click="(e) => e.stopPropagation()" :href="'https://'+ this.projectDesc.link" class="project-desc__link">  {{this.projectDesc.link}}</a>
        <div class="closeIcon" v-html="this.closeIcon"></div>
    </div>
    <img class="vertical-menu__img" v-if="this.img" :src="this.img" alt="">
</div>
</template>

<script>
import anime from "animejs";
import Typed from "typed.js";

export default {
  props: ["title", "img", "desc", "hiddenContent", "projectDesc"],
  name: "VerticalMenuItem",
  mounted: function() {
    const circlePaint = anime({
      targets: ".vertical-menu__item #circleArr circle",
      strokeDashoffset: 0,
      easing: "easeInCubic",
      duration: 700,
      delay: function(el, i, l) {
        return i * 210;
      }
    });
    const itemsAppearing = anime({
      targets: ".vertical-menu__item",
      opacity: 1,
      duration: 500,
      easing: "easeInCubic",
      delay: function(el, i, l) {
        return i * 200;
      }
    });
    const arrowAppearing = anime({
      targets: ".vertical-menu__item #circleArr #circleArr__arr",
      opacity: 1,
      duration: 300,
      easing: "easeInCubic",
      delay: function(el, i, l) {
        return i * 300;
      }
    });

    // if side content
    if (this.hiddenContent) {
      let contentWidth = "40vw";
      const type = this.$el.querySelector(".vertical-menu__hidden-text");

      this.showTextContent = anime({
        targets: this.$el.querySelector(".vertical-menu__hidden-content"),
        width: contentWidth,
        paddingLeft: "1em",
        duration: 600,
        easing: "easeInCubic",
        autoplay: false
      });

      this.typed = new Typed(type, {
        strings: [this.hiddenContent, ""],
        backDelay: 0,
        typeSpeed: 0,
        showCursor: false,
        contentType: "text",
        onStringTyped: (arrayPos, self) => {
          if (this.expanded) {
            this.typed.stop();
          }
        }
      });
      this.typed.stop();
    }
  },
  methods: {
    expandToggle: function() {
      this.expanded = !this.expanded;
      //
      if (this.hiddenContent) {
        if (this.expanded) {
          let siblings = this.$parent.$children,
            $this = this;

          // cals
          hideSiblingsContent($this);

          // anim
          this.showTextContent.reset();
          this.showTextContent.play();

          // typed
          this.typed.start();
          this.typed.reset();

          //  func
          function hideSiblingsContent() {
            for (const key in siblings) {
              if (siblings.hasOwnProperty(key)) {
                const element = siblings[key];
                if ($this !== element) {
                  element.showTextContent.reset();
                  element.expanded = false;
                }
              }
            }
          }
        } else {
          //  anim
          setTimeout(() => {
            this.showTextContent.play();
            this.showTextContent.reverse();
          }, 700);

          // typed
          this.typed.toggle();
        }
      }
    }
  },
  // data() {
  //   return {
  //     expanded: false
  //   };
  // },

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
@media screen and (min-width: 500px) {
  .projects {
    .project-desc {
      display: flex;
      flex-direction: column;
      width: 30vw;
      font-weight: 100;
      position: absolute;
      bottom: 13vw;
      right: 20vw;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      &__text {
        color: white;
        font-size: 22px;
        font-family: "CourierNew";
        font-weight: 100;
        font-style: italic;
        & + * {
          margin-top: 5vh;
        }
      }
      &__link {
        text-decoration-color: transparent;
        transition: all.4s;
        color: white;
        font-size: 20px;
        &:hover {
          text-decoration-color: white;
        }
      }
    }
    .vertical-menu__item {
      transition: all 0.7s ease-in-out;
      position: absolute;
      bottom: 0;
      overflow: hidden;
      .vertical-menu__img {
        width: 100vw;
      }
      .vertical-menu__content {
        transition: all 0.7s ease-in-out;
      }
      &:nth-child(1) {
        left: 0;
        &.vertical-menu__item_expanded {
          left: -10vw !important;
        }
      }
      &:nth-child(2) {
        left: 20vw;
        &.vertical-menu__item_expanded {
          left: 10vw !important;
        }
      }
      &:nth-child(3) {
        left: 40vw;
        &.vertical-menu__item_expanded {
          left: 30vw !important;
        }
      }
      &:nth-child(4) {
        left: 60vw;
        &.vertical-menu__item_expanded {
          left: 50vw !important;
        }
      }
      &_expanded {
        width: 100vw;
        left: 10vw !important;
        position: absolute;
        .project-desc {
          opacity: 1;
          transition-delay: 0.3s;
        }
        .vertical-menu__img {
          opacity: 0.5;
        }
        .vertical-menu__content {
          transform: rotate(-90deg) translate3d(0, -30vw, 0);
        }
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
      }
      .closeIcon {
        position: absolute;
        bottom: -0.5em;
        right: -4.5em;
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
  }
}
@media (max-width: 500px) {
  .projects {
    .vertical-menu {
      overflow-x: hidden;
    }
    .vertical-menu__item {
      .project-desc {
        transform: translate(-100vw, 0);
        &__text {
          font-size: 13.2px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 16.8px;
          font-family: "CourierNew";
          font-weight: 100;
          font-style: italic;
          width: 60vw;
          position: absolute;
          left: 0;
          top: -30px;
        }
        &__link {
          font-size: 12px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 16.8px;
          position: relative;
          top: 20px;
        }
      }
      .vertical-menu__img {
        top: -30vh;
        left: -10vw;
        width: 100vw;
        height: 105vh;
        opacity: 0 !important;
        transition: 0s !important;
      }
      &_expanded {
        z-index: 999;
        overflow: visible !important;

        position: fixed !important;
        top: 0;
        transform: translate3d(0, 0, 0) !important;
        .project-desc {
          transform: translate(7vw, -5vw);
          transition: 0.7s ease-in-out !important;
        }
        .vertical-menu__img {
          transition: 0.7s ease-in-out !important;

          opacity: 1 !important;
          filter: brightness(0.6);
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .projects {
    .vertical-menu__item {
      overflow: hidden;
      height: 55vh;
      top: 30vh;
      border: none;
      position: relative;
    }
  }
  .problems {
    .vertical-menu__item {
      border: none;
      height: 70vh;
      top: 58vh;
    }
  }
}

#circleArr__arr {
  opacity: 0;
}

.Projects {
  .bg-lines {
    height: 100vh;
  }
}

.Problems {
  .bg-lines {
    height: 170vh;
  }
}

.vertical-menu {
  &__hidden-text {
    position: absolute;
    padding-right: 1em;
    min-width: 42vw;
    font-size: 0.93em;
    top: 45%;
    @media (max-width: 500px) {
      top: 31%;
    }
  }
  &__hidden-content {
    position: absolute;
    display: flex;
    overflow: hidden;
    align-items: flex-start;
    height: 100%;
    left: 0;
    top: 0;
    transform: translate(calc(15vw - 2px), 0);
    background: hsl(0, 0%, 4%);
    z-index: 10;
    width: 0;
    @media screen and (max-width: 500px) {
      transform: none;
    }
  }
  &__item {
    width: 20vw;
    height: 100vh;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;
    opacity: 0;
    align-items: flex-end;
    transition: all 0.5s ease-in-out 0.5s;
    z-index: 103;
    &_expanded {
      z-index: 105 !important;
      transition-delay: 0s;
      background: hsl(0, 0%, 4%);
    }
    @media (min-width: 500px) {
      &:nth-child(2) {
        z-index: 102;
        &.vertical-menu__item_expanded {
          transform: translate(-20vw, 0);
        }
      }
      &:nth-child(3) {
        z-index: 101;
        &.vertical-menu__item_expanded {
          transform: translate(-40vw, 0);
        }
      }
      &:nth-child(4) {
        z-index: 100;
        &.vertical-menu__item_expanded {
          transform: translate(-60vw, 0);
        }
      }
    }
    @media (max-width: 500px) {
      width: 40vw;
      border-bottom: 2px solid hsla(0, 0%, 100%, 0.1);
      border-left: 1px solid hsla(0, 0%, 100%, 0.1);
      border-right: 1px solid hsla(0, 0%, 100%, 0.1);
      height: 97vh;
      top: 87vh;
      &:nth-child(1),
      &:nth-child(3) {
        .vertical-menu__hidden-content {
          transform: translate(40vw, 0);
        }
      }
      &:nth-child(2),
      &:nth-child(4) {
        .vertical-menu__hidden-content {
          transform: translate(40vw, 0);
        }
        &.vertical-menu__item_expanded {
          transform: translate(-40vw, 0);
        }
      }
    }
    &:hover {
      .vertical-menu {
        &__heading {
          transform: translate3d(2vh, 0, 0);
        }
        &__hint-text {
          transform: translate3d(2vh, 0, 0);
        }
        &__img {
          opacity: 0.5;
          transform: translate3d(0, -2vh, 0);
        }
      }
      .arrowIconHolder {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
    }
  }
  &__img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: calc(100% + 3vh);
    object-fit: cover;
    z-index: -1 !important;
    opacity: 0;
    transition: all 0.8s ease-in-out;
    transform: translate3d(0, 0, 0);
    z-index: 1;
  }
  &__content {
    transform: rotate(-90deg);
    position: absolute;
    width: 55vh;
    display: flex;
    align-content: stretch;
    flex-direction: column;
    height: 20vw;
    bottom: 40vh;
    padding-top: 1em;
  }
  &__heading {
    margin: 0;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0, 0, 0);
    font-size: 0.92em;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  &__hint-text {
    display: flex;
    font-size: 0.615em;
    font-family: "CourierNew";
    font-weight: 100;
    font-style: italic;
    opacity: 0.6;
    transition: 0.5s all 0.1s ease-in-out;
    transform: translate3d(0, 0, 0);
    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
  &__hint {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin-left: 1.7em;
    width: max-content;
  }
  .arrowIconHolder {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg) translate3d(0, 0, 0);
    transform-origin: center center;
    transition: all 0.5s ease-in-out;
    margin-left: 5vh;
    @media (max-width: 500px) {
      width: 30px;
      height: 30px;
    }
  }
  &__text-wrap {
    & + * {
      margin-top: 0.1em;
    }
  }
}
</style>
