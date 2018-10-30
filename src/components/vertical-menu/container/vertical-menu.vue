<template>
    <section class="vertical-menu">
        <VerticalMenuItem
          :key="item.id" 
          :id="item.id"
          :img="item.img"
          :title="item.heading"
          :desc="item.desc" 
          :hiddenContent="item.hiddenContent"
          :projectDesc="item.projectDesc" 
          v-for="item in array"
        />
        <div class="line-divide" v-if="!this.isDesktop"></div>
    </section>
</template>

<script>
import VerticalMenuItem from "@/components/vertical-menu/item/vertical-menu__item";

export default {
  name: "VerticalMenu",
  components: {
    VerticalMenuItem
  },
  props: ["data", "isDesktop"],
  data() {
    return {
      array: this.data
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.vertical-menu {
  z-index: 1;
  position: absolute;
  bottom: 0;
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  padding-left: 10vw;
  font-size: 1.625em;
  min-width: 20vw;
  line-height: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media (min-width: 500px) {
    padding-left: 0vw;
    margin-left: 10vw;
  }
}
@media (max-width: 500px) {
  .line-divide {
    position: absolute;
    width: 100vw;
    height: 2px;
    left: 44.5%;
    transform: translate(-50%, 0);
    background: hsla(0, 0%, 100%, 0.1);
  }
  .Projects .line-divide {
    top: 85vh;
  }

  .Problems .line-divide {
    top: 128vh;
  }
}
</style>
