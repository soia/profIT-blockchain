<template>
	<section class="problems section">
         <VerticalMenu :data='array'/>
  </section>
</template>

<script>
import VerticalMenu from "@/components/vertical-menu/container/vertical-menu";

export default {
  name: "Problems",
  components: {
    VerticalMenu
  },
  data() {
    return {
      array: [
        {
          id: "block1",
          heading: "Не добросовесные команды",
          desc: "Проблема 1",
          img: "imgimg"
        },
        {
          id: "block2",
          heading: "Не правильно подобраные технологии",
          desc: "Проблема 2",
          img: "imgimg"
        },
        {
          id: "block3",
          heading: 'Отсутствие понятия "безопасность"',
          desc: "Проблема 3",
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