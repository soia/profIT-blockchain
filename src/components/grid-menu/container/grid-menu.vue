<template>
    <section class="grid-menu">
    <GridMenuItem :key="item.heading" :id="item.id" :icon="item.icon" :title="item.heading" :desc="item.desc" v-for="item in array"/>
</section>
</template>

<script>
import GridMenuItem from "@/components/grid-menu/item/grid-menu__item";

export default {
  name: "GridMenu",
  components: {
    GridMenuItem
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
.grid-menu {
  position: absolute;
  bottom: 0;
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  margin-left: 10vw;
  font-size: 1.625em;
  min-width: 20vw;
  line-height: 1;
  display: flex;
  flex-wrap: wrap;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100vw;
    background: hsla(0, 0%, 100%, 0.1);
    left: -10vw;
  }
  &::after {
    top: 20vw;
  }
  &::before {
    top: -1px;
  }
}
</style>
