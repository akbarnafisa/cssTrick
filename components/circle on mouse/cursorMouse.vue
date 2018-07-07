<template>
		<div :class="[mouseActive, 'mouse']"  >
			<div class="mouseSVG mouseArrow">
				<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 15 15" fill="none">
					<rect width="1.60835" height="18.1019" rx="0.804173" transform="translate(13.5194 0.111816) rotate(45)" fill="#ffffff"/>
					<path d="M0 0.75C0 0.335786 0.335786 0 0.75 0H8.75V1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z" transform="translate(4.89999 0.460022)" fill="#ffffff"/>
					<path d="M0 0.75C0 0.335786 0.335786 0 0.75 0H8.75V1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z" transform="translate(12.91 9.78998) rotate(-90.7565)" fill="#ffffff"/>
				</svg>
			</div>
		</div>
</template>
<script >
	export default{
	 props: ['mouseIn'],

	methods : {},
	computed: {
		mouseActive(){
			return{
				'mouseOnLink mouse' : this.mouseIn.link,
				'mouseOnElement mouse' : this.mouseIn.element,
			}
		}
	},
	mounted(){
			const mouse = document.querySelector('.mouse');
			var mouseX = 0,
   		 mouseY = 0;
			var xp = 0, 
			yp = 0;
			window.addEventListener('mousemove', (e) => {
				mouseX = e.pageX ;
        mouseY = e.pageY ;
			});
			setInterval(function() {
					xp += (mouseX - xp) / 6;
    			yp += (mouseY - yp) / 6;
			    mouse.style.left = xp + 'px';
			    mouse.style.top = yp + 'px';
				 }, 20);
		}
	}
</script>
<style scoped>
	.mouseSVG{
		width: 100%;
		height: 100%;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all .3s ease;
	}
	.mouseOnLink{
		transform : scale3d(5,5,1) translate3d(0,-5px,0) !important;
		background : white !important;
	}

	.mouseOnElement{
		transform : scale3d(10,10,1) translate3d(6px,2px,0) !important;
		background : red !important;
		mix-blend-mode: difference !important;
	}
	.mouseArrow{
		opacity: 0;
	}
	.mouseOnElement .mouseArrow{
		opacity: 1;
	}

	.mouse {
	  position: absolute;
	  width: 10px;
	  height: 10px;
	  border-radius: 100px;
	  background: red;
	  top: 50px;
	  left: 50px;
	  transform: scale3d(1,1,1) translate3d(-5px,-5px,0);
	  transform-origin: top;
	  mix-blend-mode: soft-light;
	  transition: transform .4s, background .1s;
	  z-index: 10;
	  pointer-events: none;
	  cursor: none;
	}
</style>