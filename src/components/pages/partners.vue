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
          id: "block1",
          partner:
            '<svg pointer-events="none" height="80" width="80"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logoApple"></use></svg>'
        },
        {
          id: "block2"
        },
        {
          id: "block3",
          partner:
            '<svg pointer-events="none" height="80" width="80"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logoAmazon"></use></svg>'
        },
        {
          id: "block4"
        },
        {
          id: "block5"
        },
        {
          id: "block6"
        },
        {
          id: "block7",
          partner:
            '<svg pointer-events="none" height="80" width="80"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logoApple"></use></svg>'
        },
        {
          id: "block8",
          partner:
            '<svg pointer-events="none" height="80" width="80"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logoAmazon"></use></svg>'
        }
      ]
    };
  }
};
</script>

<style  lang="scss">
.partners .grid-menu {
  &__item {
    align-items: center !important;
    justify-content: center;
  }
  &__content,
  .circle-arrow {
    display: none;
    
  }
  &__heading{
    margin:0;
  }

}
</style>