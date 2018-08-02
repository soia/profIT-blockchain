<template>
    <section class="vertical-menu">
        <VerticalMenuItem :key="item.id" :id="item.id" :img="item.img" :title="item.heading" :desc="item.desc" v-for="item in array"/>
    </section>
</template>

<script>
import VerticalMenuItem from "@/components/vertical-menu/item/vertical-menu__item";

export default {
  name: "VerticalMenu",
  components: {
    VerticalMenuItem
  },
  props: ["data"],
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
  margin-left: 10vw;
  font-size: 1.625em;
  min-width: 20vw;
  line-height: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
