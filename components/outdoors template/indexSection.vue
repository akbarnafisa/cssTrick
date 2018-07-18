<template>
	<transition :name="transition" mode="out-in" >
		<div v-show="visible" class="current-index">
			<slot></slot>
		</div>
	</transition>
</template>
<script >
	export default{
		props : ['type'],
		data(){
			return{
				index :0,
			}
		},
		computed :{
			visible (){
					return this.index === this.$parent.index
			},
			transition(){
				if(this.$parent.direction && this.type == "index"){
					return 'slide-' + this.$parent.direction
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

</style>