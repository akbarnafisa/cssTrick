<template>
	<div class="container">
		<cursorMouse :mouseIn="mouseIn"></cursorMouse>
	  <div class="nav-wrapper">
	  	<cursorOnLink>Home</cursorOnLink>
  		<cursorOnLink>About</cursorOnLink>
  		<cursorOnLink>Project</cursorOnLink>
	  </div>
	  <div class="content">
	  	<cursorCard></cursorCard>
	  	<cursorCard></cursorCard>
	  </div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				hoverCard : false
			}
		},
		computed : {
				mouseIn(){
	      return this.$store.getters.getMouse
	    }
		},
	}
</script>
<style scoped>
	
	.content{
		width: 100%;
		display: flex; 
		justify-content: center; 
		align-items: center;
	}
	.content > div{
		width: 40%;
		height: 350px;
		margin : 20px;
		position: relative;
		background-position: center center;
		background-size: cover;
	}
	.content > div:last-child{
		top: 50px;
	}
	.content2{
		background-image : url('https://theshift.tokyo/wp_static/wp-content/uploads/2018/03/fp_thumb-1200x800.jpg');
	}
	.content1{
		background-image: url(https://theshift.tokyo/wp_static/wp-content/uploads/2018/03/ns_thumb-1200x800.jpg);
	}

	.container{
		overflow:hidden;
	}
	a{
		color : #333;
		text-decoration: none;
		font-size: 20px;
		font-weight: 700;
		padding : 30px;
	}
	.nav-wrapper{
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
	}

</style>