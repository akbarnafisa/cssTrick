<template>
	<div>
		<circleNav></circleNav>
		<div class="wrapper">
		  <div id="content">
		    <h1>Floating circle navigation ~60fps animation</h1>
		  </div>
		</div>
	</div>
</template>
s
<script>
	export default {
		data() {
			return {
			
			}
		},
	}
</script>

<style scoped>

</style>
<script>
	
</script>
<style scoped>
	/* =======
	IMPORTS
	======= */
	@import url('https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:400,600');

	/* =========
	VARIABLES
	========= */
	:root {
	  --offset-value: 30;
	  --btn-size: 60;
	  
	  --green: #4ECA78;
	}

	/* =======
	WRAPPER
	======= */
	#content {
	  display: flex;
	  height: 100%;
	}

	#content h1 {
	  font-size: calc(4vmin + 1em);
	  text-align: center;
	  margin: auto;
	  color: #fff;
	  text-shadow: 0 6px 18px rgba(0,0,0,.1);
	}

	.wrapper {
	  font-family: 'Encode Sans Condensed', sans-serif;
	  font-weight: 600;
	  height: 100vh;
	  width: 100%;
	  position: relative;
	  background: linear-gradient(to top right, #4ECA78, #D0DB68);
	}



	/* Usual suspects */
	* {
	  box-sizing: border-box;
	  margin: 0;
	  padding: 0;
	}

	html, body {
	  height: 100%;
	}


</style>