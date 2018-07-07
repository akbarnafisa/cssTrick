<template>
	<div>
	  <button @click="ripple" class="material-button">
		  Material Button
		 	<span :style="{top: y+'px', left: x+'px'}" class='taint'></span>
		</button>
	</div>
</template>
<script >
	export default {
		data(){
			return{
				x : '',
				y : '',
			}
		},
	  methods: {
	    ripple(e) {
	      const el = e.target.children[0]
	      el.classList.remove('drop')
    		this.x = e.pageX - this.$el.offsetLeft -  50
    		this.y = e.pageY - this.$el.offsetTop - 50
    		el.classList.add('drop')
	    },
	  },
  }

</script>
<style scoped>
.drop {
	animation: ripple 0.4s linear;
}

div {
  margin-top: 100px;
}
div .material-button {
  padding: 16px 32px;
  font-size: 1.8rem;
  
  position: relative;
  color: #fff;
  background: #448AFF;
  border: 0;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  overflow: hidden;
}

div .material-button:focus {
  outline: none;
}

.taint {
  display: block;
  position: absolute;
  background: rgba(130, 177, 255, 0.5);
  border-radius: 100%;
  width: 100px;
  height: 100px;
  pointer-events: none;
  cursor: none;
  transform: scale(0);
}


@keyframes ripple {
  100% {
  	opacity: 0;
  	transform: scale(2.5);
  }
}

</style>