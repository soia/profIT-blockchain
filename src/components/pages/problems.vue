<template>
<section class="problems section">
    <VerticalMenu :data='array' />
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
          hiddenContent:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, veniam natus architecto iusto provident nisi aliquam asperiores molestiae est, culpa tempora aliquid rem ab voluptate expedita voluptatum. Quis, adipisci hic?"
        },
        {
          id: "block2",
          heading: "Не правильно подобраные технологии",
          desc: "Проблема 2",
          hiddenContent:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, veniam natus architecto iusto provident nisi aliquam asperiores molestiae est, culpa tempora aliquid rem ab voluptate expedita voluptatum. Quis, adipisci hic?"
        },
        {
          id: "block3",
          heading: 'Отсутствие понятия "безопасность"',
          desc: "Проблема 3",
          hiddenContent:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, veniam natus architecto iusto provident nisi aliquam asperiores molestiae est, culpa tempora aliquid rem ab voluptate expedita voluptatum. Quis, adipisci hic?"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.problems {
  .vertical-menu {
    &__content {
      bottom: 25vh;
    }
    &__hint-text {
      transition-delay: 0ms;
    }
    &__heading {
      transition-delay: 100ms;
      margin-top: 10px;
    }
    &__hint {
      position: absolute;
      right: 0;
      top: 1.6em;
      @media (max-width: 500px) {
        right: -2em;
      }
    }
  }
}
</style>
