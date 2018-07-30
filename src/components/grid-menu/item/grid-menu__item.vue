<template>
        <div class="grid-menu__item" @click="expand" >
            <div class="grid-menu__icon" v-html="this.icon">
                
            </div>
            <h4 class="grid-menu__heading">
                  {{title}}
            </h4>
            <div class="circle-arrow">
                <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">		<!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->		<desc>Created with Sketch.</desc>		<defs></defs>		<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">		<g id="технологии" transform="translate(-369.000000, -461.000000)">		<g id="стрелка" transform="translate(370.000000, 462.000000)">		<g transform="translate(18.500000, 18.000000) rotate(-315.000000) translate(-18.500000, -18.000000) translate(9.000000, 12.000000)" fill="#FFFFFF">		<polygon id="Rectangle-6" points="13 0 19 6.0437128 13 12"></polygon>		<rect id="Rectangle-5" x="0" y="5" width="18" height="2"></rect>		</g>		<circle id="Oval-2" stroke="#FFFFFF" stroke-width="2" cx="18" cy="18" r="18"></circle>		</g>		</g>		</g>		</svg>
            </div>
        </div>
</template>

<script>
export default {
  props: ["title", "icon"],
  name: "GridMenuItem",
  methods: {
    expand: function() {
        console.log($(this))
    }
  }
};
</script>

<style lang="scss">
</style>
