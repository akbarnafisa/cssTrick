<template>
	<div @mouseover="show = !show" @mouseleave="show = !show" class="content2">
		<div class="content-text">
			<div class="text-wrapper">
				<transition name="slide1">
			    <div v-if="show" class="text text-1 font-1">Finding Perception</div>
			  </transition>
				
			</div>
			<div class="text-wrapper">
				<transition name="slide2">
			    <div v-if="show" class="text text-2 font-2">Museum Experience</div>
			  </transition>
			</div>
		</div>
		<cursorOnElement/>
	</div>
</template>
<script >
	export default{
		data(){
			return{
				show : false,
			}
		}
	}
</script>
<style scoped>
	.slide1-enter-active, .slide1-leave-active {
	  transition: all .5s ease;
	}
	.slide1-enter {
	  transform: translate3d(0,30px,0);
	  opacity: 0;
	}
	.slide1-enter-top, .slide1-leave {
		transform: translate3d(0,0px,0);
		opacity: 1;
	}
	.slide1-leave-to {
	 transform: translate3d(0,-30px,0);
	 opacity: 0;
	}

	.slide2-enter-active, .slide2-leave-active {
	  transition: all .5s ease;
	  transition-delay: .1s;
	}
	.slide2-enter {
	  transform: translate3d(0,30px,0);
	  opacity: 0;
	}
	.slide2-enter-top, .slide2-leave {
		transform: translate3d(0,0px,0);
		opacity: 1;
	}
	.slide2-leave-to {
	 transform: translate3d(0,-30px,0);
	 opacity: 0;
	}

	.content-text{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.text-wrapper{
		overflow : hidden;
	}
	.text{
		position: relative;
	}
	.text-1{
		color : whitesmoke;
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 16px;
	}
	.text-2{
		color : whitesmoke;
		font-size: 16px;
		font-weight: 700;
	}



</style>