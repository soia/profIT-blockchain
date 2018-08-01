<template>
<section class="technologies main section home-technologies">
    <GridMenu :data='array'/>
</section>
</template>


<script>
import GridMenu from "@/components/grid-menu/container/grid-menu";

export default {
  name: "Technologies",
  components: {
    GridMenu
  },
  data() {
    return {
      array: [
        {
          id: "block1",
          heading: "Blockchain",
          //   icon: '<div class="icon">asd</div>'
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: "block2",
          heading: "Consensus",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: "block3",
          heading: "Сryptographic network protocols ",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: "block4",
          heading: "Dapp Browsers",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: "block5",
          heading: "Data Feeds",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: "block6",
          heading: "Decentralized applications",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: "block7",
          heading: "Messaging",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: "block8",
          heading: "Storage",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
