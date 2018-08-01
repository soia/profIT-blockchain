<template>
<div class="vertical-menu__item" @click="expand">
    <h2 v-if="this.desc">{{desc}}</h2>
    <h1>{{title}}</h1>
</div>
</template>

<script>
import anime from "animejs";
import Typed from "typed.js";

export default {
  props: ["title", "img", "desc"],
  name: "VerticalMenuItem",
  methods: {
    expand: function() {
      console.log("expanded");
    }
  },
  data() {
    return {
      expanded: false
    };
  }
};
</script>

<style lang="scss">
</style>
