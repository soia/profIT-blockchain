<template>
<div id="app" >
    <SvgCollection/>
    <MainNav/>
    <router-view :isDesktop="this.desktop"/>
    <Form v-if="isFormVisible()"/>
</div>
</template>

<script>
import Router from "vue-router";
import MainNav from "@/components/navigations/main-nav";
import Form from "@/components/forms/form";
import SvgCollection from "@/components/icons/svg-collection";
export default {
  components: {
    MainNav,
    Router,
    Form,
    SvgCollection
  },
  mounted: function() {
    document.querySelector("body").classList = "";
    document.querySelector("body").classList.add(this.$route.name);
    if (window.outerWidth < 500) {
      this.desktop = false;
    }
  },
  updated: function() {
    setTimeout(() => {
      document.querySelector("body").classList = "";
      document.querySelector("body").classList.add(this.$route.name);
    }, 750);
  },
  methods: {
    isFormVisible: function() {
      if (
        window.outerWidth < 500 ||
        this.$route.fullPath == "/" ||
        this.$route.fullPath == "/partners"
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      currentRoute: window.location.pathname,
      desktop: true
    };
  }
};
</script>

<style src="../node_modules/normalize.css/normalize.css"></style>

<style lang="scss">
@font-face {
  font-family: "RoadRadio";
  src: url("./assets/fonts/roadradio/RoadRadio.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "RoadRadio";
  src: url("./assets/fonts/roadradio/RoadRadio-Bold.ttf") format("truetype"),
    url("./assets/fonts/roadradio/RoadRadio-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "RoadRadio";
  src: url("./assets/fonts/roadradio/RoadRadio-Light.ttf") format("truetype"),
    url("./assets/fonts/roadradio/RoadRadio-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "CourierNew";
  src: url("./assets/fonts/courier-new/CourierBold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "CourierNew";
  src: url("./assets/fonts/courier-new/CourierNewItalicFont.ttf")
    format("truetype");
  font-weight: 100;
  font-style: italic;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  background: #0c0c0c;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  font-family: "RoadRadio", sans-serif;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    max-width: 100vw;
    font-size: 10px !important;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
.closeIcon{
  
}
.form__cover {
  transition: all.4s;
}
.is-menu .form__cover {
  background: #000 !important;
  color: #fff !important;
}
.bg-lines {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 500px) {
    height: calc(100% + 4.625em + 8px);
    :nth-child(even) {
      display: none;
    }
  }
}
@media (max-width: 500px) {
  .header {
    .grid {
      align-items: center;
      .logo {
        width: 35px;
        overflow: hidden;
        &__img {
          height: 4.5em;
          width: 15em;
        }
      }
    }
  }
}
.bg-lines div {
  position: absolute;
  height: 100vh;
  width: 2px;
  background: rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 500px) {
    height: 100%;
  }
}

.bg-lines__1 {
  left: calc(10% - 1px);
}

.bg-lines__2 {
  left: calc(30% - 1px);
}

.bg-lines__3 {
  left: calc(50% - 1px);
}

.bg-lines__4 {
  left: calc(70% - 1px);
}

.bg-lines__5 {
  left: calc(90% - 1px);
}

.grid {
  width: 100vw;
  padding: 0 10vw;
  display: flex;
  flex-wrap: wrap;
}

.grid__col {
  width: 20vw;
}

.header {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  height: 7em;
  align-items: center;
}

.logo__img {
  width: 12em;
  height: 3.5em;
}

.header__item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
}

.menu-icon {
  position: relative;
  width: 15px;
  height: 15px;
  cursor: pointer;
  left: -1px;
  @media (max-width: 500px) {
    left: 0;
  }
}

.menu-icon:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.menu-icon__item {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #fff;
}

.menu-icon__item:nth-child(0) {
  left: 0;
  top: 0;
}
@media screen and (max-width: 500px) {
  .header__item.header__item_menu {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
  }
}

.menu-icon__item:nth-child(1) {
  right: 0;
  top: 0;
}

.menu-icon__item:nth-child(2) {
  left: 0;
  bottom: 0;
}

.menu-icon__item:nth-child(3) {
  right: 0;
  bottom: 0;
}

.header__nav {
  margin-left: auto;
  @media screen and (max-width: 500px) {
    display: none;
  }
}

.nav__a {
  font-size: 0.625em;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1;
}

.nav__a_last {
  margin-left: 2.75em;
}

.header__lang {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.625em;
}

.header__lang span {
  font-size: 0.625em;
}

.header__lang:first-child {
  padding-right: 0.5em;
}

.header__lang:last-child {
  padding-left: 0.5em;
}

.home {
  position: absolute;
  z-index: 5;
  left: 0;
  top: 0;
}

.menu__line {
  position: absolute;
  transform-origin: center top;
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  top: 0;
  height: 0;
  overflow: hidden;
  justify-content: flex-end;
  @media screen and (max-width: 500px) {
    width: 40vw !important;
    justify-content: flex-start;
    padding-top: 20vw;
  }
}
@media screen and (max-width: 500px) {
  .is-menu {
    max-height: 100vh;
    overflow: hidden;
  }
}
.is-menu .menu__line {
  height: 100vh;
}

.is-menu_close .menu__line {
  // height: 0;
  transition: all 0.4s ease-in-out;
  .menu__link {
    transition: all 0.1s 0s;
    opacity: 0;
  }
}

.menu__line:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0;
  background: #fff;
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  /*border-right: 1px solid rgba(0, 0, 0, 0.1);*/
}

.is-menu .menu__line:before {
  height: 100vh;
}

.menu__line:after {
  content: initial;
}

.is-menu_close .menu__line:after {
  height: 100vh;
}

.home {
  position: relative;
}

.home:after,
.home:before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(100vh - 40vw - 1px);
  height: 2px;
  width: 100vw;
  background: rgba(0, 0, 0, 0.1);
  z-index: 999;
  transform: scaleX(0);
  transform-origin: left center;
  transition: 0.4s ease-in-out 0.35s;
  @media (max-width: 500px) {
    content: initial;
  }
}

.home:after {
  top: calc(100vh - 20vw - 1px);
}

.is-menu .home:after,
.is-menu .home:before,
.is-menu_close .home:after,
.is-menu_close .home:before {
  transform: scaleX(1);
}

.menu__line_1 {
  left: 0;
  width: 10vw;
}

.is-menu .menu__line_1 {
  transition: 0.4s ease-in-out;
}

.is-menu_close .menu__line_1 {
  // transition: height 0s ease-in-out 0.4s;
  transform: translate(0, 100%);
}

.is-menu .menu__line_1:before {
  transition: 0.4s ease-in-out;
}

.is-menu_close .menu__line_1:after {
  transition: 0.4s ease-in-out;
}

.menu__line_2 {
  left: calc(10vw - 1px);
  width: 20vw;
}

.is-menu .menu__line_2 {
  transition: 0.4s ease-in-out 0.07s;
}

.is-menu_close .menu__line_2 {
  // transition: height 0s ease-in-out 0.47s;
  transform: translate(0, 100%);
}

.is-menu .menu__line_2:before {
  transition: 0.4s ease-in-out 0.07s;
}

.is-menu_close .menu__line_2:after {
  transition: 0.4s ease-in-out 0.07s;
}

.menu__line_3 {
  left: calc(30vw - 1px);
  width: 20vw;
  @media screen and (max-width: 500px) {
    left: calc(50vw - 1px);
  }
}

.is-menu .menu__line_3 {
  transition: 0.4s ease-in-out 0.14s;
}

.is-menu_close .menu__line_3 {
  // transition: height 0s ease-in-out 0.54s;
  transform: translate(0, 100%);
}

.is-menu .menu__line_3:before {
  transition: 0.4s ease-in-out 0.14s;
}

.is-menu_close .menu__line_3:after {
  transition: 0.4s ease-in-out 0.14s;
}

.menu__line_4 {
  left: calc(50vw - 1px);
  width: 20vw;
  justify-content: flex-end;
  @media screen and (max-width: 500px) {
    display: none;
  }
}

.is-menu .menu__line_4 {
  transition: 0.4s ease-in-out 0.21s;
}

.is-menu_close .menu__line_4 {
  // transition: height 0s ease-in-out 0.61s;
  transform: translate(0, 100%);
}

.is-menu .menu__line_4:before {
  transition: 0.4s ease-in-out 0.21s;
}

.is-menu_close .menu__line_4:after {
  transition: 0.4s ease-in-out 0.21s;
}

.menu__line_5 {
  left: calc(70vw - 1px);
  width: 20vw;
}

.is-menu .menu__line_5 {
  transition: 0.4s ease-in-out 0.28s;
}

.is-menu_close .menu__line_5 {
  // transition: height 0s ease-in-out 0.68s;
  transform: translate(0, 100%);
}

.is-menu .menu__line_5:before {
  transition: 0.4s ease-in-out 0.28s;
}

.menu__line_6 {
  left: calc(90vw - 1px);
  width: 10vw !important;
}

.is-menu .menu__line_6 {
  transition: 0.4s ease-in-out 0.35s;
  @media screen and (max-width: 500px) {
    transition-delay: 0.21s;
  }
}

.is-menu_close .menu__line_6 {
  // transition: height 0s ease-in-out 0.75s;
  transform: translate(0, 100%);
  @media screen and (max-width: 500px) {
    transition-delay: 0.21s;
  }
}

.is-menu .menu__line_6:before {
  transition: 0.4s ease-in-out 0.35s;
  @media screen and (max-width: 500px) {
    transition-delay: 0.21s;
  }
}

.is-menu_close .menu__line_6:after {
  transition: 0.4s ease-in-out 0.35s;
}

.menu__wrap {
  position: relative;
  z-index: 20;
}

.menu__line .nav__a {
  color: #000;
  position: relative;
  z-index: 10;
  display: flex;
}

.menu__line .header__lang {
  color: #000;
  position: relative;
  z-index: 10;
}

.menu__line .header {
  z-index: 20;
  position: relative;
  z-index: 10;
}

.menu__line .menu-icon__item {
  background: #000;
  z-index: 10;
}

.menu__header {
  position: relative;
  width: calc(100% - 2px);
  left: 1px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 7em;
  margin-bottom: auto;
  @media screen and (max-width: 500px) {
    &.mobile-lang {
      justify-content: flex-end;
    }
  }
}

.menu__line .menu__header {
  position: absolute;
  top: 0;
}

.header__item_lang {
  margin-left: auto;
  justify-content: flex-end;
  @media screen and (max-width: 500px) {
    left: -2px;
  }
}

.header__item_lang .menu__header {
  justify-content: flex-end;
}

.menu__line .menu-icon {
  z-index: 20;
}

.menu__link {
  width: 20vw;
  height: 20vw;
  position: relative;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 40vw;
    height: 40vw;
  }
}

.menu__link:before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  width: 3px;
  height: 0;
  background-color: #1d46ef;
  transition: 0.4s ease-in-out;
}

.menu__link_offers:before {
  background: #000;
}

.router-link-exact-active.menu__link:before {
  height: calc(100% + 2px);
}

.menu__desc {
  color: #000;
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  margin: 3.8vw 0 0 3.8vw;
  font-size: 1.625em;
  min-width: 20vw;
  line-height: 1;
  @media screen and (max-width: 500px) {
    bottom: initial !important;
    top: 1em;
    left: 1em;
  }
}

.menu__img {
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;
  width: 2.25em;
  height: 2.25em;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s ease-in-out;
}

.router-link-active.menu__link .menu__img {
  opacity: 1;
  transform: rotate(-135deg);
  visibility: visible;
}

.router-link-exact-active:hover .menu__img {
  transform: rotate(-90deg);
}

.router-link-active.menu__link .menu-hover .menu__img {
  position: absolute;
  left: calc(20vw - 4em + 4px);
  bottom: 1.5em;
}

.menu-hover {
  position: absolute;
  left: 0;
  top: -1px;
  width: 0;
  height: calc(100% + 2px);
  overflow: hidden;
  transition: 0.4s ease-in-out;
  background: #1d46ef;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
}

.menu-hover .menu__desc {
  color: #fff;
}

.menu__link_offers .menu-hover {
  width: calc(100% - 2px);
  left: 2px;
  height: 0;
  top: auto;
  bottom: 0;
  background: #0c0c0c;
}

.menu__link_offers .menu__desc {
  position: absolute;
  left: 0;
  bottom: calc(16.2vw - 2em);
}

.router-link-active.menu__link_offers .menu__img {
  opacity: 0;
  visibility: hidden;
}

.menu__link_offers:hover .menu-hover {
  width: calc(100% + 2px);
  height: calc(100% + 1px);
}

.is-menu .menu__line_4 {
  padding-bottom: 20vw;
}

.is-menu .menu__line_5 {
  padding-bottom: 20vw;
}

.is-menu .menu__link {
  opacity: 1;
  text-decoration: none;
}

.is-menu .menu__line_2 .menu__link {
  transition: 0.4s ease-in-out 0.4s;
}

.is-menu .menu__line_3 .menu__link {
  transition: 0.4s ease-in-out 0.47s;
}

.is-menu .menu__line_4 .menu__link {
  transition: 0.4s ease-in-out 0.54s;
}

.is-menu .menu__line_5 .menu__link {
  transition: 0.4s ease-in-out 0.61s;
}

/* header animation */

.is-menu .header .logo {
  transition: 0s ease-in-out 0.75s;
  opacity: 0;
}

.is-menu .header .menu-icon {
  transition: 0s ease-in-out 0.75s;
  opacity: 0;
}

.is-menu .header .nav__a_first {
  transition: 0s ease-in-out 0.75s;
  opacity: 0;
}

.is-menu .header .nav__a_last {
  transition: 0s ease-in-out 0.75s;
  opacity: 0;
}

.is-menu .header .header__item_lang {
  transition: 0s ease-in-out 0.75s;
  opacity: 0;
}

.header .logo.is-active {
  transition: 0.4s ease-in-out;
  opacity: 1;
}

.header .header__item.is-active .menu-icon {
  transition: 0.4s ease-in-out 0s;
  opacity: 1;
}

.header .header__item.is-active .nav__a_first {
  transition: 0.4s ease-in-out 0.07s;
  opacity: 1;
}

.header .header__item.is-active .nav__a_last {
  transition: 0.4s ease-in-out 0.14s;
  opacity: 1;
}

.header .is-active.header__item_lang {
  transition: 0.4s ease-in-out 0.07s;
  opacity: 1;
}

.section__wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding-left: calc(30vw + 1em);
  min-height: 100vh;
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  font-size: 2.375em;
  line-height: 1.1578;
}

.circle-arrow {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0.5em;
  right: 0.5em;
  width: 2.25em;
  height: 2.25em;
  transition: 0.4s ease-in-out;
  z-index: 4;
}
.f-layer {
  z-index: 99 !important;
}
.hidden {
  display: none;
}
@media screen and (max-width: 1920px) {
  body {
    font-size: 18px;
  }
}

@media screen and (max-width: 1440px) {
  body {
    font-size: 16px;
  }
}

@media screen and (max-width: 1200px) {
  body {
    font-size: 12px;
  }
}
</style>
