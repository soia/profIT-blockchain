<template>
<section class="main section home-technologies">
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
          id: 1,
          heading: "Blockchain",
          //   icon: '<div class="icon">asd</div>'
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 2,
          heading: "Consensus",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 3,
          heading: "Сryptographic network protocols ",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 4,
          heading: "Dapp Browsers",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 5,
          heading: "Data Feeds",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 6,
          heading: "Decentralized applications",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 7,
          heading: "Messaging",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt! Repudiandae possimus amet sint non magni blanditiis numquam iste eaque illo, consectetur, accusantium dolorum repellendus quia soluta, molestias hic necessitatibus!"
        },
        {
          id: 8,
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
