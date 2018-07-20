<template>
	<div class="button-filter-wrapper">
	  <div class="button-filter-inner-wrapper">
	    <div 
	      v-for="(tag,index) in tagList"
	     :key="index" 
	     :id="tag" 
	     @click="filterProject"
	     :style="filterActive ? {transitionDelay : .4 + index/50  + 's'} : {transitionDelay : '0s'} "
	      class="button btn-ghost">{{tag}}</div>
	  </div>
	</div>
</template>
<script >
	export default {
	  props: ['tagList','filterActive'],
	  methods: {
	    filterProject (e) {
	      const el = e.target
	      this.$emit('filterProject',el)
	    },
	  },
  }
</script>
<style scoped>

	.filter-btn-active{
	  background: #3626A7 !important;
	  color : white !important;
	}
	.filter-active .button-filter-inner-wrapper > div {
	  opacity: 1;
	  transform: translateY(0);

	}

	.button-filter-wrapper > div > div{
	  display: inline-block;
	  cursor: pointer;
	}
	.button-filter-inner-wrapper > div{
	  opacity: 0;
	  transform: translateY(10px);
	  margin-bottom: 10px;
	  transition: opacity .3s ease, transform .3s ease;
	}
	.button-filter-inner-wrapper{
	  position: absolute;
	  width: 100%;
	}
	.button-filter-wrapper{
	  margin :0rem 1rem;
	  margin-top : 3rem;
	  position: relative;
	  width: 100%;
	}
</style>