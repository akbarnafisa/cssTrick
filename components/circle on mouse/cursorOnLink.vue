<template>
		<a href="#" @mouseover="triggerIn" @mouseleave="triggerOut" class="nav-content font-2">
			<slot></slot>
		</a>
</template>
<script >
	export default{
		methods : {
			triggerIn(){
				const mouseIn = {
	        link : true,
	        element : false,
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
	
</style>