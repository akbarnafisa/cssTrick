<template >
	<div>
		<div class="1">
			<div class="stage">
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			</div>
			<div class="stage">
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			</div>
		</div>
		
		<div class="2">
			<div class="blobs">
			  <div class="blob"></div>
			  <div class="blob"></div>
			</div>
		</div>
		<div class="3">
			<div class="bloobs">
			  <div class="bloob"></div>
			  <div class="bloob"></div>
			</div>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> 
			 <defs>    
			 	<filter id="goo">
		 	     <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
		 	     <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
		 	     <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
		 	   </filter>
			 </defs>
			</svg>
	</div>
</template>
<script ></script>
<style scoped>
			.bloobs {
			  -webkit-filter: url("#goo");
			            filter: url("#goo");
			    position: absolute;
			    top: 0;
			    left: 0;
			    bottom: 0;
			    right: 0;
			  }
			.bloob {
		   	background: #e97b7a;
			  width: 100px;
			  height: 100px;
				position: absolute;
			  left: 50%;
			  top: 50%;
		    border-radius: 50%;
			  margin-top: -50px;
			  margin-left: -50px;
			 
			}
		
			.bloob:first-child {
	      animation: blob-anim-left ease-in-out 0.8s infinite alternate;
			}
			.bloob:last-child {
	        animation: blob-anim-right ease-in-out 0.8s infinite alternate;
			}

	.square {
	  position: absolute;
	  background: #5677fc;
	  left: 50%;
	  top: 50%;
	  width: 100px;
	  height: 100px;
	  margin-top: -50px;
	  margin-left: -50px;
    filter: url("#goo");
	}

	body {
	  padding: 50px;
	}

	/*2222222222222222*/

		@keyframes demonstration {
		  0% {
		    -webkit-filter: blur(0) contrast(1);
		            filter: blur(0) contrast(1);
		  }
		  25% {
		    -webkit-filter: blur(0) contrast(1);
		            filter: blur(0) contrast(1);
		  }
		  30% {
		    -webkit-filter: blur(20px) contrast(1);
		            filter: blur(20px) contrast(1);
		  }
		  55% {
		    -webkit-filter: blur(20px) contrast(1);
		            filter: blur(20px) contrast(1);
		    -webkit-animation-timing-function: ease-in;
		            animation-timing-function: ease-in;
		  }
		  80% {
		    -webkit-filter: blur(20px) contrast(30);
		            filter: blur(20px) contrast(30);
		  }
		  100% {
		    -webkit-filter: blur(20px) contrast(30);
		            filter: blur(20px) contrast(30);
		  }
		}
		.blobs {
		  background: black;
		  width: 400px;
		  height: 200px;
		  position: relative;
		  filter: contrast(50);
		}

		.blob {
		  background: red;
		  width: 100px;
		  height: 100px;
			position: absolute;
		  left: 50%;
		  top: 50%;
	    filter: blur(20px) ;
		  margin-top: -50px;
		  margin-left: -50px;
		  border-radius: 100%;
		}


		@keyframes blob-anim-left {
		  0% {
        	transform: translateX(-10px);
		  }
		  100% {
          transform: translateX(-55px);
		  }
		}
		.blob:first-child {
      animation: blob-anim-left ease-in-out 0.8s infinite alternate;
		}

		@keyframes blob-anim-right {
		  0% {
        	transform: translateX(10px);
		  }
		  100% {
          transform: translateX(55px);
		  }
		}
		.blob:last-child {
        animation: blob-anim-right ease-in-out 0.8s infinite alternate;
		}

	/*11111111111111111*/

	.stage {
	  /* must be explicit, for contrast */
	  background: white;
	  /* weirdness happens when edges hit */
	  padding: 30px;
	  /* autoprefixer helping here */
	}
	.stage:nth-child(2) {
   filter: contrast(20);
	}

	.dot {
	  border-radius: 50%;
	  width: 50px;
	  height: 50px;
	  display: inline-block;
	  /* needs to be very contrasty color. Some light gray won't work */
	  background: black;
      filter: blur(15px);
	}

</style>