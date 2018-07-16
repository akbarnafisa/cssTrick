<template>
	<div>
		<div id="nav-bg" class="btn"></div>
		<div id="toggle-btn" class="btn"> 
		  <span></span>
		  <span></span>
		  <span></span>
		</div>
		<nav>
		  <ul>
		    <li><a class="link" href="#0">Projects</a></li>
		    <li><a class="link" href="#0">About</a></li>
		    <li><a class="link" href="#0">Contact</a></li>
		  </ul>
		</nav>
	</div>
</template>
<script >
	export default{
		mounted(){
			var elem = document.querySelector('#nav-bg'),
				 toggleBtn = document.querySelector('#toggle-btn'),
					self = this;
			this.elemH = elem.getBoundingClientRect().height
			this.elemW = elem.getBoundingClientRect().width;

			var calculateValues = function calculateValues() {
			  var w = window.innerWidth;
			  var h = window.innerHeight;

			  var offsetValue = 30;

			  self.offsetX = w / 2 - self.elemW / 2 - offsetValue;
			  self.offsetY = h / 2 - self.elemH / 2 - offsetValue;

			  // Good old pythagoras
			  var radius = Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2));
			  self.scale = radius / (self.elemW / 2) / 2 + .1; // Add '.1' to compensate for Safari sub pixel blur issue

			};
			var openMenu = function openMenu() {
			  elem.style.setProperty("--translate-x", self.offsetX + 'px');
			  elem.style.setProperty("--translate-y", '-' + self.offsetY + 'px');
			  elem.style.setProperty("--scale", self.scale);
			 
			};
			var closeMenu = function closeMenu() {
			  elem.style.setProperty("--scale", 1);
			  elem.style.setProperty("--translate-x", 0);
			  elem.style.setProperty("--translate-y", 0);
			};
			var animateMenu = function animateMenu() {
			  open ? closeMenu() : openMenu();
			};

			var toggleMenu = function toggleMenu() {
			  open = !open;
			  animateMenu();
			  toggleBtn.classList.toggle('shown');
			};

			var resizeHandler = function resizeHandler() {
			  window.requestAnimationFrame(function () {
			    calculateValues();
			    animateMenu();
			  });
			};

			calculateValues();
			console.log(this.scale)
			//toggleBtn.onclick = toggleMenu;
			toggleBtn.addEventListener('click', toggleMenu, false);
			window.addEventListener("resize", resizeHandler, false);

		},
		data(){
			return{
				elemH : 0,
				elemW : 0,
				open : false,
				scale :  0,
				offsetX :  0,
				offsetY :  0,
			}
		}
	}
</script>
<style scoped>
	:root {
	  --offset-value: 30;
	  --btn-size: 60;
	  
	  --green: #4ECA78;
	}
	nav{
		font-family: 'Encode Sans Condensed', sans-serif;
		font-weight: 600;
	}
	
	a,
	a:visited,
	a:focus,
	a:active,
	a:link {
	  text-decoration: none;
	  outline: 0;
	}

	a {
	  color: currentColor;
	  transition: .2s ease-in-out;
	}

	ul {
	  padding: 0;
	  list-style: none;
	}

	img {
	  vertical-align: middle;
	  height: auto;
	  width: 100%;
	}

	/* =====================
	NAVIGATION BACKGROUND
	===================== */
	#nav-bg {
	  transform-origin: center center;
	  transition: transform .3s;
	  transform: translate(var(--translate-x), var(--translate-y)) scale(var(--scale));
	  will-change: transform;
	  pointer-events: none;
	}


	/* ======
	BUTTON
	====== */
	.btn {
	  position: fixed;
	  height: calc(var(--btn-size)*1px);
	  width: calc(var(--btn-size)*1px);
	  bottom: calc((var(--offset-value))*1px);
	  left: calc(var(--offset-value)*1px);
	  /*left: calc(50% - (var(--btn-size)/2*1px)); if you wish to center it */
	  border-radius: 50%;
	  background: #fafafa;
	  cursor: pointer;
	  margin: 0;
	  padding: 0 15px;
	  border: none;
	  z-index: 100;
	  user-select: none;
	  -webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	#toggle-btn {
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  color: var(--green);
	  /*box-shadow: 0 6px 12px rgba(0,0,0,.1);*/
	  transition: transform .3s;
	}

	#toggle-btn span {
	  position: relative;
	  width: 100%;
	}

	#toggle-btn span {
	  margin-top: -4px;
	}
	#toggle-btn span + span {
	  margin-top: 8px;
	}

	#toggle-btn span:before,
	#toggle-btn span:after {
	  content: '';
	  position: absolute;
	  top: 0;
	  background: currentColor;
	  opacity: .8;
	  height: 100%;
	  width: 50%;
	  height: 4px;
	  transition: .25s cubic-bezier(.6,0,.3,1);
	  transform-origin: center center;
	}

	#toggle-btn span:before {
	  left: 0;
	  border-radius: 3px 0 0 3px;
	}

	#toggle-btn span:after {
	  right: 0;
	  border-radius: 0 3px 3px 0;
	}

	#toggle-btn.shown span:nth-of-type(1):before {
	  transform: translate3d(3px, 3.5px, 0) rotate(45deg);
	}

	#toggle-btn.shown span:nth-of-type(1):after {
	  transform: translate3d(-3px, 3.5px, 0) rotate(-45deg);
	}

	#toggle-btn.shown span:nth-of-type(3):before {
	  transform: translate3d(3px, -3.5px, 0) rotate(-45deg);
	}

	#toggle-btn.shown span:nth-of-type(3):after {
	  transform: translate3d(-3px, -3.5px, 0) rotate(45deg);
	}

	#toggle-btn.shown span:nth-of-type(2):before,
	#toggle-btn.shown span:nth-of-type(2):after {
	  opacity: 0.0001;
	}

	#toggle-btn.shown span:nth-of-type(2):before {
	  transform: translateX(-200%);
	}

	#toggle-btn.shown span:nth-of-type(2):after {
	  transform: translateX(200%);
	}

	#toggle-btn.shown:before {
	  transform: scale(.6);
	  transition: .2s;
	}

	#toggle-btn:before {
	  content: '';
	  transition: .2s .2s;
	  position: absolute;
	  top: 3px;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background: rgba(0,0,0,.1);
	  border-radius: inherit;
	  filter: blur(5px);
	  z-index: -2;
	}
	#toggle-btn:after {
	  content: '';
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  border-radius: inherit;
	  background: #fafafa;
	  z-index: -1;
	}

	/* ==========
	NAVIGATION
	========== */
	nav {
	  width: 100%;
	  height: 100%;
	  background: transparent;
	  position: fixed;
	  top: 0;
	  left: 0;
	  overflow: hidden;
	  display: flex;
	  z-index: 200;
	  pointer-events: none;
	}

	nav ul {
	  margin: auto;
	  pointer-events: auto;
	  text-align: center;
	}

	nav li {
	  font-size: 30px;
	  color: #212121;
	  user-select: none;
	  transform: translate(-20px,20px) scale(.9);
	  transition: 0s;
	  opacity: 0.0001;
	  visibility: hidden;
	  will-change: transform;
	}

	nav li + li {
	  margin-top: 30px;
	}

	#toggle-btn.shown ~  nav li {
	  transform: none;
	  opacity: 1;
	  visibility: visible;
	  transition: .35s cubic-bezier(.4,2.08,.55,1);
	}

	#toggle-btn.shown ~  nav li:nth-child(1) {
	  transition-delay: .15s;
	}
	#toggle-btn.shown ~  nav li:nth-child(2) {
	  transition-delay: .125s;
	}
	#toggle-btn.shown ~  nav li:nth-child(3) {
	  transition-delay: .1s;
	}

	/* ============
	LINK EFFECT
	============ */
	.link {
	  position: relative;
	  touch-action: manipulation;
	  -webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	.link:before,
	.link:after {
	  position: absolute;
	  content: '';
	  height: 3px;
	  width: 50%;
	  background: #4ECA78;
	  top: calc(50% + 2px);
	  transition: transform .3s cubic-bezier(.5,.5,0,1);
	}

	.link:before {
	  left: 0;
	  transform: translateX(calc(-100% - 10px)) scaleX(0);
	  transform-origin: left;
	}

	.link:after {
	  right: 0;
	  transform: translateX(calc(100% + 10px)) scaleX(0);
	  transform-origin: right;
	}

	.link:hover:before {
	  transform: translateX(calc(-100% - 10px)) scaleX(1);
	  transform-origin: right;
	}

	.link:hover:after {
	  transform: translateX(calc(100% + 10px)) scaleX(1);
	  transform-origin: left;
	}


	/* =======
	CONTENT
	======= */


</style>