<template>
	<section class="partners section">
         <GridMenu :data='array'/>
        
         
  </section>
</template>

<script>
import GridMenu from "@/components/grid-menu/container/grid-menu";

export default {
  name: "Partners",
  components: {
    GridMenu
  },
  data() {
    return {
      array: [
        {
          id: 1,
          icon:
            '<svg pointer-events="none" height="80" width="80"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logoApple"></use></svg>'
        },
        {
          id: 2
        },
        {
          id: 3,
          icon:
            '<svg pointer-events="none" height="80" width="80"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logoAmazon"></use></svg>'
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7,
          icon:
            '<img src="../../assets/img/content/Cool_TV_logo_2004.png" alt="">'
        },
        {
          id: 8,
          icon:
            '<img src="../../assets/img/content/Cool_TV_logo_2004.png" alt="">'
        }
      ]
    };
  }
};
</script>

<style  lang="scss">
.grid-menu {
  &__item {
    align-items: center !important;
    justify-content: center;
  }
  &__content,
  &__heading,
  .circle-arrow {
    display: none;
  }
}
</style>