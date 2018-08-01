<template>
	<section class="projects section">
         <VerticalMenu :data='array'/>
  </section>
</template>

<script>
import VerticalMenu from "@/components/vertical-menu/container/vertical-menu";

export default {
  name: "Projects",
  components: {
    VerticalMenu
  },
  data() {
    return {
      array: [
        {
          id: "block1",
          heading: "Bitspulse",
          img: "imgimg"
        },
        {
          id: "block2",
          heading: "Articcoin",
          img: "imgimg"
        },
        {
          id: "block3",
          heading: "IGF Fund",
          img: "imgimg"
        },
        {
          id: "block4",
          heading: "Axis",
          img: "imgimg"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>