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
            <router-link to="/technologies" class="nav__a nav__a_first" >{{ $t("message.technologies") }}</router-link>               
            <router-link to="/projects" class="nav__a nav__a_last">{{ $t("message.projects") }}</router-link>   
          </nav>
        </div> 
        <div class="grid__col header__item header__item_lang">
         <a class='header__lang' v-on:click="switchLocaleToRu()">ru</a>
          /
         <a class='header__lang' v-on:click="switchLocaleToEn()">en</a>
        </div>      
      </div>
    </header>
    <div class="menu__line menu__line_1">
    </div>
    <div class="menu__line menu__line_2" v-if="this.desktop" >
      <div class="menu__header logo">
        <router-link to="/" class="nav__a">
          <img src="../../assets/img/header/logo_black.svg" alt="" class="logo__img">
        </router-link>
      </div>
      <router-link to='/solutions' class="menu__link">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Наши<br>
            решения
          </h3>
          <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
        </div>

        <h3 class="menu__desc">
          Наши<br>
          решения
        </h3>
        <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
      </router-link>
      <router-link to='/problems' class="menu__link">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Какие<br>
            проблемы<br>
            Вас могут<br>
            ожидать?
          </h3>
          <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Какие<br>
          проблемы<br>
          Вас могут<br>
          ожидать?
        </h3>
        <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
      </router-link>
    </div>

    <div class="menu__line menu__line_3" v-if="this.desktop">
      <div class="menu__header">
        <div class="menu-icon">
          <div class="menu-icon__item"></div>
          <div class="menu-icon__item"></div>
          <div class="menu-icon__item"></div>
          <div class="menu-icon__item"></div>
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
    </div>


    <div class="menu__line menu__line_4"  v-if="this.desktop">  
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
          <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Наши<br>партнеры
        </h3>
        <img class="menu__img" src='../../assets/img/menu/chevron.svg'>
      </router-link>      
       
    </div>

    <!-- mobile menu START -->

    <div class="menu__line menu__line_2" v-if="!this.desktop" >
      <div class="menu__header logo">
        <router-link to="/" class="nav__a">
          <img src="../../assets/img/header/logo_black.svg" alt="" class="logo__img">
        </router-link>
      </div>
      <router-link to='/solutions' class="menu__link">
        <div class="menu-hover">
          <h3 class="menu__desc">
            Наши<br>
            решения
          </h3>
          <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Наши<br>
          решения
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
            Какие<br>
            проблемы<br>
            Вас могут<br>
            ожидать?
          </h3>
          <img class="menu__img" src='../../assets/img/menu/chevron_white.svg'>
        </div>
        <h3 class="menu__desc">
          Какие<br>
          проблемы<br>
          Вас могут<br>
          ожидать?
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
       <div class="menu__header mobile-lang">
        <a class='header__lang' v-on:click="switchLocaleToRu()">ru</a>
        <span>/</span>
        <a class='header__lang' v-on:click="switchLocaleToEn()">en</a>
      </div>
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

<style scoped lang="scss">
@media screen and (max-width: 500px) {
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
      top: 20vw;
      background: hsla(0, 0%, 0%, 0.1);
      z-index: 999;
      &_top {
      }
      &_bottom {
      }
    }
  }
}
</style>





























