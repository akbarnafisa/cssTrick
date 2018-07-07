<template>
		<a href="#" @mouseover="triggerIn" @mouseleave="triggerOut">
			<slot></slot>
		</a>
</template>
<script >
	export default{
			methods : {
				triggerIn(){
					const mouseIn = {
		        link : false,
		        element : true,
		      }
				 this.$store.dispatch('changeMouse', mouseIn)
				},
				triggerOut(){
					const mouseIn = {
		        link : false,
		        element : false,
		      }
				  this.$store.dispatch('changeMouse', mouseIn)
				}
			},
	}
</script>
<style scoped>
	a{
		display: block;
		width: 100%;
		height: 100%;
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>