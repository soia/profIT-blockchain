<template>
<div class="home">
    <header class="header">
        <div class="grid">
            <div class="grid__col header__item logo">
                <router-link to="/" class="nav__a">
                    <img src="../../assets/img/header/logo.svg" alt="" class="logo__img">
                </router-link>
            </div>
            <div class="grid__col header__item header__item_menu">
                <div class="menu-icon">
                    <div class="menu-icon__item"></div>
                    <div class="menu-icon__item"></div>
                    <div class="menu-icon__item"></div>
                    <div class="menu-icon__item"></div>
                </div>
                <nav class="nav header__nav">
                    <router-link to="/technologies" class="nav__a nav__a_first">{{ $t("message.technologies") }}</router-link>
                    <router-link to="/projects" class="nav__a nav__a_last">{{ $t("message.projects") }}</router-link>
                </nav>
            </div>
            <div class="grid__col header__item header__item_lang" v-if="this.desktop">
                <a class='header__lang' v-on:click="switchLocaleToRu()">ru</a> /
                <a class='header__lang' v-on:click="switchLocaleToEn()">en</a>
            </div>
            <div class="grid__col header__item header__item_lang circle-lang-switch" v-if="!this.desktop">
                <a class='header__lang' @click="switchLocaleToRu()" v-show="this.$i18n.locale == 'en'">ru</a>
                <a class='header__lang' @click="switchLocaleToEn()" v-show="this.$i18n.locale == 'ru'">en</a>
            </div>
        </div>
    </header>
    <div class="menu__line menu__line_1">
    </div>
    <div class="menu__line menu__line_2" v-if="this.desktop">
        <div class="menu__header logo">
            <router-link to="/" class="nav__a">
                <img src="../../assets/img/header/logo_black.svg" alt="" class="logo__img">
            </router-link>
        </div>
        <router-link to='/solutions' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Наши<br> решения
                </h3>
            </div>

            <h3 class="menu__desc">
                Наши<br> решения
            </h3>
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
        </router-link>
        <router-link to='/problems' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Какие<br> проблемы
                    <br> Вас могут<br> ожидать?
                </h3>
            </div>
            <h3 class="menu__desc">
                Какие<br> проблемы
                <br> Вас могут<br> ожидать?
            </h3>
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
        </router-link>
    </div>

    <div class="menu__line menu__line_3" v-if="this.desktop">
        <div class="menu__header">
            <div class="menu-icon">
                <div class="menu-icon__item"></div>
                <div class="menu-icon__item"></div>
                <div class="menu-icon__item"></div>
                <div class="menu-icon__item"></div>
                <svg class="menu-icon__circle" fill="transparent" width="53" height="53">
                        <circle class="outer"  stroke-width="3" cx="26" cy="26" r="24.5" />
                    </svg>
            </div>
        </div>
        <router-link to='/technologies' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Технологии
                </h3>
            </div>
            <h3 class="menu__desc">
                Технологии
            </h3>
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
        </router-link>
        <router-link to='/offers' class="menu__link menu__link_offers">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Что мы<br>предлaгаем
                </h3>
            </div>
            <h3 class="menu__desc">
                Что мы<br>предлaгаем
            </h3>
        </router-link>
    </div>

    <div class="menu__line menu__line_4" v-if="this.desktop">
        <router-link to='/projects' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Наши<br>проекты
                </h3>
            </div>
            <h3 class="menu__desc">
                Наши<br>проекты
            </h3>
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
        </router-link>
    </div>

    <div class="menu__line menu__line_5 header__item_lang" v-if="this.desktop">
        <div class="menu__header">
            <a class='header__lang' v-on:click="switchLocaleToRu()">ru</a>
            <span>/</span>
            <a class='header__lang' v-on:click="switchLocaleToEn()">en</a>
        </div>

        <router-link to='/partners' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Наши<br>партнеры
                </h3>
            </div>
            <h3 class="menu__desc">
                Наши<br>партнеры
            </h3>
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
        </router-link>

    </div>

    <!-- mobile menu START -->

    <div class="menu__line menu__line_2" v-if="!this.desktop">
        <div class="menu__header logo">
            <router-link to="/" class="nav__a">
                <img src="../../assets/img/header/logo_black.svg" alt="" class="logo__img">
            </router-link>
        </div>
        <router-link to='/solutions' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Наши<br> решения
                </h3>
                <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
            </div>
            <h3 class="menu__desc">
                Наши<br> решения
            </h3>
            <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
        </router-link>
        <router-link to='/projects' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Наши<br>проекты
                </h3>
                <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
            </div>
            <h3 class="menu__desc">
                Наши<br>проекты
            </h3>
            <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
        </router-link>
        <router-link to='/problems' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Какие<br> проблемы
                    <br> Вас могут<br> ожидать?
                </h3>
                <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
            </div>
            <h3 class="menu__desc">
                Какие<br> проблемы
                <br> Вас могут<br> ожидать?
            </h3>
            <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
        </router-link>

    </div>

    <div class="menu__line menu__line_3" v-if="!this.desktop">
        <div class="menu__header">
            <div class="menu-icon">
                <div class="menu-icon__item"></div>
                <div class="menu-icon__item"></div>
                <div class="menu-icon__item"></div>
                <div class="menu-icon__item"></div>
            </div>
            <div class="grid__col header__item header__item_lang circle-lang-switch" v-if="!this.desktop">
                <a class='header__lang' @click="switchLocaleToRu()" v-show="this.$i18n.locale == 'en'">ru</a>
                <a class='header__lang' @click="switchLocaleToEn()" v-show="this.$i18n.locale == 'ru'">en</a>
            </div>
        </div>

        <router-link to='/technologies' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Технологии
                </h3>
                <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
            </div>
            <h3 class="menu__desc">
                Технологии
            </h3>
            <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
        </router-link>
        <router-link to='/partners' class="menu__link">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Наши<br>партнеры
                </h3>
                <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
            </div>
            <h3 class="menu__desc">
                Наши<br>партнеры
            </h3>
            <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
        </router-link>
        <router-link to='/offers' class="menu__link menu__link_offers">
            <div class="menu-hover">
                <h3 class="menu__desc">
                    Что мы<br>предлaгаем
                </h3>
                <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
            </div>
            <h3 class="menu__desc">
                Что мы<br>предлaгаем
            </h3>
            <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
        </router-link>

        <div class="menu__mobile-line"></div>
        <div class="menu__mobile-line"></div>
        <div class="menu__mobile-line"></div>
        <div class="menu__mobile-line"></div>
        <div class="menu__mobile-line"></div>
    </div>
    <!-- mobile menu END -->
    <div class="menu__line menu__line_6">
    </div>

</div>
</template>

<script>
export default {
  name: "MainNav",
  template: "<MainNav/>",
  mounted: function() {
    if (window.outerWidth < 500) {
      this.desktop = false;
    }
  },
  methods: {
    switchLocaleToRu: function() {
      this.$i18n.locale = "ru";
    },
    switchLocaleToEn: function() {
      this.$i18n.locale = "en";
    }
  },
  data() {
    return {
      desktop: true
    };
  }
};
</script>

<style lang="scss" scoped>
.menu__link {
  .arrowIconHolder {
    display: flex;
    width: max-content;
    position: absolute;
    right: 1.5em;
    bottom: 1.5em;
    transform: rotate(-45deg);
    color: black;
    transition: color 0.5s ease-in-out 0.5s, transform 0.5s 0.5s;
    z-index: 99;
    #circleArr circle {
      stroke-dashoffset: 126 !important;
      transition: stroke-dashoffset 0.5s ease-in-out;
    }
    #circleArr__arr {
      opacity: 0 !important;
      transition: opacity 0.5s ease-in-out 0.1s;
    }
  }
  .menu-hover {
    transition-timing-function: ease-in-out !important;
  }
  &::before {
    transition-duration: 0.6;
    transition-timing-function: ease-in-out;
  }
  &.router-link-active {
    &:hover {
      .arrowIconHolder {
        transition: color 0.5s ease-in-out 0.1s, transform 0.5s 0.5s;
        * {
          transition-delay: 0s !important;
        }
      }
      .menu-hover {
        transition-delay: 0s;
      }
    }
  }
  &:hover {
    .arrowIconHolder {
      color: white;
      transform: rotate(0deg);
      #circleArr circle {
        stroke-dashoffset: 0 !important;
      }
      #circleArr__arr {
        opacity: 1 !important;
      }
    }
    .menu-hover {
      transition-delay: 0.45s;
      width: calc(100% + 1px);
    }
    &::before {
      height: 100%;
    }
  }
}

.menu-icon {
  transition: all.5s ease-in-out;
  &__circle {
    transform: translate(-34%, -38%) rotate(-90deg);
    .outer {
      stroke: white;
      stroke-dasharray: 164;
      stroke-dashoffset: 164;
      transition: all 1s ease-in-out;
      z-index: 999;
    }
  }
  &::after {
    width: 5px;
    height: 5px;
    background: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg) scale(0);
    transition: all.5s ease-in-out;
  }
  &__item {
    transition: all.5s ease-in-out;
  }
}

.menu__line {
  .menu-icon {
    transition: all.5s ease-in-out;
    &__circle {
      transform: translate(-37%, -38%) rotate(-180deg);
      .outer {
        stroke: black;
      }
    }
  }
}

.is-menu {
  .menu__line.menu__line_3 {
    overflow: visible;
  }
  .header {
    .menu-icon {
      transition: none;
      opacity: 0;
    }
  }
  .menu-icon {
    &__circle {
      .outer {
        stroke-dashoffset: 0;
      }
    }
    border-color: black;
    transform: rotate(90deg);
    &::after {
      transform: translate(-50%, -50%) rotate(45deg) scale(1);
    }
    &__item {
      &:nth-child(1) {
        transform: translate(-2px, 2px) rotate(45deg);
      }
      &:nth-child(2) {
        transform: translate(2px, -2px) rotate(45deg);
      }
      &:nth-child(3) {
        transform: translate(-2px, -2px) rotate(45deg);
      }
      &:nth-child(4) {
        transform: translate(2px, 2px) rotate(45deg);
      }
    }
  }
}

@media (max-width: 500px) {
  .menu__line {
    .circle-lang-switch {
      visibility: hidden;
      margin-right: -2px;
      background: white;
      border-color: black;
    }
    .menu__header.logo {
      visibility: hidden;
      width: 30px;
      overflow: hidden;
      .logo__img {
        height: 4.5em;
        width: 15em;
      }
    }
  }
}

.is-menu {
  .menu__line {
    .circle-lang-switch {
      visibility: visible;
    }
    .menu__header {
      span {
        color: black;
      }
    }
    .menu__header.logo {
      visibility: visible;
    }
  }
}

.circle-lang-switch {
  display: flex;
  border: 1px solid #fff;
  border-radius: 50%;
  background: black;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  > a {
    padding: 0;
    margin: 0;
  }
}

@media screen and (max-width: 500px) {
  .menu-hover {
    .menu__img {
      display: none;
    }
  }
  .menu__line .menu-icon {
    display: none;
  }
  .header {
    z-index: 999;
    transition: all.4s;
  }
  .menu__line_1 {
    width: 10vw !important;
  }
  .menu__link::before {
    top: 1px;
  }
  .is-menu {
    .header {
      opacity: 0;
    }
    .menu__line.menu__line_3 {
      overflow: visible;
    }
    .menu__line .menu-icon {
      display: flex;
    }
    .menu__line_6 {
      z-index: 55;
    }
    .menu-icon {
      left: -8px;
    }
    .menu__mobile-line {
      position: absolute;
      height: 2px;
      width: 100vw;
      left: -50vw;
      background: hsla(0, 0%, 0%, 0.1);
      z-index: 999;
      &:nth-of-type(3) {
        visibility: hidden;
      }
      &:nth-of-type(4) {
        top: 60vw;
      }
      &:nth-of-type(5) {
        top: 100vw;
      }
      &:nth-of-type(6) {
        top: 140vw;
      }
    }
  }
}
</style>
