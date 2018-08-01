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
</style>
