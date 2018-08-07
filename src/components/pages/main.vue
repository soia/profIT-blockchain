<template>
	<section class="main section">
      <div class="main__wrap">
        <h1 class="main__h1"> 
          
          &#60;/Разработка бизнес ~ решений<br v-if="this.desktop"> на базе blockchain\&#62;

          </h1>
        <h5 class="main__desc">Заполните чек-лист и мы сможем<br> проконсультировать Вас по<br v-if="!this.desktop"> Вашему проекту</h5>
      </div>      
    </section>
</template>

<script>
export default {
  name: "Main",
  mounted: function() {
    if (window.outerWidth < 500) {
      this.desktop = false;
    }
  },
  data() {
    return {
      desktop: true
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.Main {
  .bg-lines {
    height: 100%;
  }
}
.main__wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 30vw;
  padding-top: 41.75vh;
  padding-bottom: 19vh;
  justify-content: space-between;
  min-height: 100vh;
  @media screen and (max-width: 500px) {
    margin-left: 10vw;
  }
}
.main__h1 {
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  font-size: 2.375em;
  line-height: 1.1578;
  position: relative;
  padding-left: 1em;
}
.main__h1:after {
  content: "";
  position: absolute;
  left: -1px;
  top: 0;
  width: 2px;
  height: 1.1578em;
  background: #fff;
}
.main__desc {
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  font-size: 1.25em;
  line-height: 1.3;
  padding-left: 1em;
  position: relative;
}
.main__desc:after {
  content: "";
  position: absolute;
  left: -1px;
  top: 0;
  width: 2px;
  height: 1.3em;
  background: #fff;
}
</style>