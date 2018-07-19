<template>
	<transition :name="transition" mode="out-in" >
		<div v-show="visible" class="current-index">
			<slot></slot>
		</div>
	</transition>
</template>
<script >
	export default{
		props : ['type','currentIndex'],
		data(){
			return{
			}
		},
		computed :{
			visible (){
					return this.currentIndex === this.$parent.index
			},
			transition(){
				if(this.$parent.direction && this.type == "index"){
					return 'slide-' + this.$parent.direction
				}

				else if (this.$parent.direction && this.type == "descContent"){
					return 'slide-desc-' + this.$parent.direction
				}

				else if (this.$parent.direction && this.type == "imageSection"){
					return 'slide-imageSection-' + this.$parent.direction
				}

				else if (this.type == "fact"){
					return 'fade' 
				}
			}
		}
	}
</script>
<style scoped>
	.current-index > div{
		margin-right: 5px
	}
	.current-index{
		font-size: 12px;
		position: absolute;

		width: 100%;
    height: 100%;
    z-index: -1;
	}

	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s cubic-bezier(0.8,0,0.2,1);
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}

	
	.slide-up-enter-active {
		  animation : slideRightIn .9s cubic-bezier(0.8,0,0.2,1);
		}

		.slide-up-leave-active {
		  animation : slideRightOut .9s cubic-bezier(0.8,0,0.2,1);
		}
		@keyframes slideRightIn{
			from{
				transform: translate3d(0,100%,0) ;
				opacity: 0;
			}
			to{
				transform: translate3d(0,0,0%) ;
				opacity: 1;
			}
		}

		@keyframes slideRightOut{
			from{
				transform: translate3d(0,0,0%) ;
				opacity: 1;
			}
			to{
				transform: translate3d(0,-100%,0) ;
				opacity: 0;
			}
		}

		.slide-down-enter-active {
		  animation : slideLeftIn .9s cubic-bezier(0.8,0,0.2,1);
		}
		.slide-down-leave-active {
		  animation : slideLeftOut .9s cubic-bezier(0.8,0,0.2,1);
		}

		@keyframes slideLeftIn{
			from{
				transform: translate3d(0,-100%,0) ;
			}
			to{
				transform: translate3d(0,0,0%) ;
			}
		}

		@keyframes slideLeftOut{
			from{
				transform: translate3d(0,0,0%) ;
			}
			to{
				transform: translate3d(0,100%,0);
			}
		}
/*******************************/
		.slide-desc-up-enter-active {
		  transition: all .3s ease;
		  transition-delay: .5s;
		}
		.slide-desc-up-leave-active {
		  transition: all .3s ease;
		  transition-delay: .2s;
		}
		.slide-desc-up-enter {
			transform: translate3d(0,10%,0);
		  opacity: 0;
		}
		.slide-desc-up-enter-top, .slide-desc-up-leave {
			transform: translate3d(0,0px,0);
			opacity: 1;
		}
		.slide-desc-up-leave-to {
		 opacity: 0;
		 transform: translate3d(0,-5%,0);
		}
		.slide-desc-down-enter-active {
		  transition: all .3s ease;
		  transition-delay: .5s;
		}
		.slide-desc-down-leave-active {
		  transition: all .3s ease;
		  transition-delay: .2s;
		}
		.slide-desc-down-enter {
			transform: translate3d(0,-5%,0);
		  opacity: 0;
		}
		.slide-desc-down-enter-top, .slide-desc-down-leave {
			transform: translate3d(0,0px,0);
			opacity: 1;
		}
		.slide-desc-down-leave-to {
		 opacity: 0;
		 transform: translate3d(0,10%,0);
		}

		/*******************************/

		.slide-imageSection-up-enter-active {
		  animation : slideRightImageIn .9s cubic-bezier(0.8,0,0.2,1);
		  transform-origin: 50% 0% 0px;
		}
		.slide-imageSection-up-leave-active {
		  animation : slideRightImageOut .9s cubic-bezier(0.8,0,0.2,1);
		  transform-origin: 50% 50% 0px;
		}
		@keyframes slideRightImageIn{
			from{
				transform: translate3d(0,100%,0) scale3d(1.8,1.8,1.8);
				
			}
			to{
				transform: translate3d(0,0,0%) scale3d(1,1,1);
		
			}
		}
		@keyframes slideRightImageOut{
			from{
				transform: translate3d(0,0,0%) scale3d(1,1,1);
		
			}
			to{
				transform: translate3d(0,-100%,0) scale3d(1,1,1);
			
			}
		}

		.slide-imageSection-down-enter-active {
		  animation : slideLeftImageIn .9s cubic-bezier(0.8,0,0.2,1);
		  transform-origin: 50% 100% 0px;
		}
		.slide-imageSection-down-leave-active {
		  animation : slideLeftImageOut .9s cubic-bezier(0.8,0,0.2,1);
		  transform-origin: 50% 50% 0px;
		}

		@keyframes slideLeftImageIn{
			from{
				transform: translate3d(0,-100%,0) scale3d(1.8,1.8,1.8);
			}
			to{
				transform: translate3d(0,0,0%) scale3d(1,1,1);
			}
		}
		@keyframes slideLeftImageOut{
			from{
				transform: translate3d(0,0,0%) scale3d(1,1,1);
			}
			to{
				transform: translate3d(0,100%,0) scale3d(1,1,1);
			}
		}

</style>