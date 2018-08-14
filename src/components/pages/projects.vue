<template>
	<section class="projects section">
         <VerticalMenu :data='array'/>
  </section>
</template>

<script>
import VerticalMenu from "@/components/vertical-menu/container/vertical-menu";

export default {
  name: "Projects",
  props: ["isDesktop"],
  components: {
    VerticalMenu
  },
  data() {
    return {
      array: [
        {
          id: "block1",
          heading: "Bitspulse",
          img:
            "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          projectDesc: {
            desc: "Разработка онлайн-игры на базе blockchain +  ICO",
            link: "bitspulse.com"
          }
        },
        {
          id: "block2",
          heading: "Articcoin",
          img:
            "https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          projectDesc: {
            desc: "Разработка онлайн-игры на базе blockchain +  ICO",
            link: "bitspulse.com"
          }
        },
        {
          id: "block3",
          heading: "IGF Fund",
          img:
            "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          projectDesc: {
            desc: "Разработка онлайн-игры на базе blockchain +  ICO",
            link: "bitspulse.com"
          }
        },
        {
          id: "block4",
          heading: "Axis",
          img:
            "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          projectDesc: {
            desc: "Разработка онлайн-игры на базе blockchain +  ICO",
            link: "bitspulse.com"
          }
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>