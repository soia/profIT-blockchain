<template>
	<section class="projects section">
         <GridMenu :data='array'/>
  </section>
</template>

<script>
import GridMenu from "@/components/grid-menu/container/grid-menu";

export default {
  name: "Solutions",
  components: {
    GridMenu
  },
  data() {
    return {
      array: [
        {
          id: 1,
          heading: "Smart-contract",
          //   icon: '<div class="icon">asd</div>'
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 2,
          heading: "Токенизация",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 3,
          heading: "DAO",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 4,
          heading: "DAPP",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 5,
          heading: "Crypto-fund",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 6,
          heading: "Traiding Platform",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 7,
          heading: "Аудит",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        }
      ]
    };
  }
};
</script>

<style>
</style>