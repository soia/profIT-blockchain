<template>
    <section class="grid-menu">
    <GridMenuItem :key="item.heading" :icon="item.icon" :title="item.heading" v-for="item in array"/>
</section>
</template>

<script>
import GridMenuItem from "@/components/grid-menu/item/grid-menu__item";

export default {
  name: "GridMenu",
  components: {
    GridMenuItem
  },
  data() {
    return {
      array: [
        {
          heading: "Blockchain"
          //   icon: '<div class="icon">asd</div>'
        },
        {
          heading: "Consensus"
        },
        {
          heading: "Сryptographic network protocols "
        },
        {
          heading: "Dapp Browsers"
        },
        {
          heading: "Data Feeds"
        },
        {
          heading: "Decentralized applications"
        },
        {
          heading: "Messaging"
        },
        {
          heading: "Storage"
        }
      ]
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
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    width: 20vw;
    height: 20vw;
    position: relative;
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: hsl(228, 87%, 53%);
      transform: translate3d(-101%, 0, 0);
      transition: all 0.7s cubic-bezier(0.65, 0.05, 0.36, 1);
      z-index: -1;
    }
    &:hover {
      &::before {
        transform: translate3d(0, 0, 0);
      }
    }
  }
  &__icon {
  }
  &__heading {
    color: #fff;
  }
}

.circle-arrow {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0.5em;
  right: 0.5em;
  width: 2.25em;
  height: 2.25em;
  transition: 0.4s ease-in-out;
}
</style>
