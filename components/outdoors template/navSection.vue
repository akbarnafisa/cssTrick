<template>
	<nav :class="show ? 'nav-active' : ''">
		<div  class="logo font-3 fw-700">outdoors</div>
		<div  @click="show = !show" class="menu-wrapper">
			<div   class="menu-toggle ">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 396.667 396.667" style="enable-background:new 0 0 396.667 396.667;width: 16px;height: 16px;" xml:space="preserve">
					<path d="M17,87.833h362.667c9.35,0,17-7.65,17-17s-7.65-17-17-17H17c-9.35,0-17,7.65-17,17C0,80.183,7.65,87.833,17,87.833z"/>
					<path d="M17,215.333h362.667c9.35,0,17-7.65,17-17s-7.65-17-17-17H17c-9.35,0-17,7.65-17,17S7.65,215.333,17,215.333z"/>
					<path d="M17,342.833h362.667c9.35,0,17-7.65,17-17s-7.65-17-17-17H17c-9.35,0-17,7.65-17,17S7.65,342.833,17,342.833z"/>
				</svg>
			</div>
			<div   class="close-toggle">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 15.642 15.642" enable-background="new 0 0 15.642 15.642" style="&#10;    width: 16px;&#10;    height: 16px;&#10;">
				  <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"/>
				</svg>
			</div>
		</div>
		<div class="nav-modal-wrapper">
			<div class="nav-modal fw-700 font-3">
				<div>Our Story</div>
				<div>Adventures</div>
				<div>Testimonials</div>
				<div>Contact</div>
			</div>
			<div class="nav-black"></div>
		</div>
	</nav>
</template>
<script>
	export default{
		data(){
			return{
				show: false,
			}
		}
	}
</script>
<style scoped>

	.nav-active .nav-black{
		opacity: 1 !important;
		pointer-events: auto;
	}

	.nav-active .nav-modal > div{
		opacity: 1 !important;
		transform: none !important;
	}

	.nav-active .nav-modal-wrapper{
		pointer-events: auto;
	}

	.nav-active .menu-toggle {
		opacity: 0 !important;
	}
	.nav-active .close-toggle {
		opacity: 1 !important;
	}

	.nav-active .close-toggle svg{
		fill : white !important;
		transform : none !important;
	}
	.nav-modal > div{
		margin-bottom: 24px;
		text-align: right;
		opacity: 0;
		transform: translateX(-10px);
		transition : all .3s ease;
	}

	.nav-modal > div:nth-child(1){
		transition-delay: 0
	}
	.nav-modal > div:nth-child(2){
		transition-delay: .1s;
	}
	.nav-modal > div:nth-child(3){
		transition-delay: .2s;
	}
	.nav-modal > div:nth-child(4){
		transition-delay: .3s;
	}
	.nav-modal{
		color: white;
		position: relative;
		z-index: 50;
		font-size: 36px;
	}
	.nav-modal-wrapper{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding-top: 80px;
		padding-right: 64px;
		pointer-events: none;
	}
	.nav-black{
		pointer-events: none;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.9);
		transform: scale3d(3,1,1);
		z-index: 40;
		transform-origin: left;
		transition : all .3s ease;
		opacity: 0;


	}
	.menu-toggle{
		opacity: 1;
	}

	.close-toggle{
		opacity:0;
		transform : translateY(-16px);
	}
	
	.menu-toggle, .close-toggle{
		
		transition: all .3s ease;
		cursor : pointer;
	}
	.menu-wrapper{
		position: relative;
		z-index: 60;
		width: 20px;
		height: 20px;
	}
	.logo{
		font-size: 21px;
	}
	nav{
		padding-top: 32px;
		display: flex;
		width: 100%;
		justify-content: space-between;
		transition: all .3s ease;
	}
</style>