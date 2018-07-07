<template>
	<div>
		<div>
			<button>Material Button</button>
		</div>
	</div>
</template>
<script >
	
</script>
<style scoped>
	/* Material style */
	button {
	  border: none;
	  cursor: pointer;
	  color: white;
	  padding: 16px 32px;
	  border-radius: 2px;
	  font-size: 16px;
	  box-shadow: 2px 2px 4px rgba(0, 0, 0, .4);
	  background: #2196F3;
	  display: flex;
	  justify-content: center;
	  align-items: center;

	}
	/* Ripple magic */
	button{
	  position: relative;
	  overflow: hidden;
	}

	button:after {
	  content: '';
	  position: absolute;
	  width: 50px;
	  height: 50px;
	  background: rgba(255,255,255,.5);
	  opacity: 0;
	  border-radius: 100%;
	  
	}

	@keyframes ripple {
	  0% {
	    transform: scale(0);
	    opacity: 1;
	  }
	  100% {
	    opacity: 0;
	    transform: scale(4);
	  }
	}

	button:focus:not(:active)::after {
	  animation: ripple .7s ;
	}

</style>