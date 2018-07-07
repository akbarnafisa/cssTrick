<template>
	<div class="search-wrapper">
	  <div class="filter-wrapper">
	    <a @click="filterIsActive" class="button btn-primary button-filter">
	      <transition name="fade" mode="out-in" key="one">
	        <span v-if="!filterActive">
	          Filter
	          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 20 15" fill="none">
	            <path d="M11.25 -1.90875e-08H0.749912C0.531054 -1.90875e-08 0.351519 0.0334233 0.210813 0.100308C0.0704353 0.167193 -5.31114e-07 0.252802 -5.31114e-07 0.356863V2.49996C-5.31114e-07 2.60402 0.070189 2.68967 0.210813 2.75651C0.351519 2.8234 0.531054 2.85682 0.749912 2.85682H11.25C11.4689 2.85682 11.6486 2.8234 11.7888 2.75651C11.9296 2.68963 12 2.60402 12 2.49996V0.356863C12 0.252802 11.9296 0.167154 11.7888 0.100308C11.6486 0.0334624 11.4689 -1.90875e-08 11.25 -1.90875e-08Z" transform="translate(4 11.4287)" fill="#ffffff"/>
	            <path d="M19.7995 0.100386C19.6654 0.0335793 19.4944 0 19.2859 0H0.714211C0.505773 0 0.334783 0.0334229 0.200776 0.100386C0.0671594 0.167427 -3.81758e-08 0.253037 -3.81758e-08 0.357098V2.5C-3.81758e-08 2.60421 0.0668467 2.6897 0.200776 2.75671C0.334861 2.82351 0.505773 2.85709 0.714211 2.85709H19.2859C19.4944 2.85709 19.6654 2.82367 19.7994 2.75671C19.9332 2.6897 20 2.60421 20 2.5V0.357137C20.0003 0.253037 19.9332 0.167271 19.7995 0.100386Z" fill="#ffffff"/>
	            <path d="M15.273 -9.54373e-09H0.727185C0.51496 -9.54373e-09 0.340866 0.0334232 0.204424 0.100464C0.0683007 0.167428 -5.15018e-07 0.252919 -5.15018e-07 0.357175V2.5C-5.15018e-07 2.60425 0.0680619 2.68974 0.204424 2.75671C0.340866 2.82359 0.51496 2.85717 0.727185 2.85717H15.273C15.485 2.85717 15.6593 2.82375 15.796 2.75671C15.9319 2.68974 16 2.60425 16 2.5V0.357175C16 0.252919 15.9319 0.167271 15.796 0.100464C15.659 0.0335796 15.4846 -9.54373e-09 15.273 -9.54373e-09Z" transform="translate(2 5.71484)" fill="#ffffff"/>
	          </svg>
	        </span>
	        <span v-else key="two">
	          Clear
	          <svg id="clear-search"xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
	               <rect width="20.52" height="3" rx="0.5" transform="translate(0.707092) rotate(45)" fill="#ffffff"/>
	               <rect width="20.52" height="3" rx="0.5" transform="translate(0 14.5098) rotate(-45)" fill="#ffffff"/>
	             </svg>
	        </span>
	      </transition>
	    </a>
	  </div>
	  <div class="search-right">
	    <div :class="searchActive ? 'label' : 'label label-hidden' " >Enter the Title :</div>
	    <div class="search-right-wrapper">
	      <div class="input">
	        <input @input="changeMessage" type="text">
	        <div class="search-icon">
	          <div  :class=" !searchActive ? 'search-text' : 'search-text label-hidden' " >
	            Enter the Title 
	          </div>
	          <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="16" viewBox="0 0 14 16" version="1.1">
	            <g id="Canvas" fill="none">
	            <g id="Vector">
	            <path fill-rule="evenodd" clip-rule="evenodd" d="M 6.43195 11.7069C 9.44354 11.7069 11.8639 9.29852 11.8639 6.35344C 11.8639 3.40836 9.44354 1 6.43195 1C 3.42035 1 1 3.40836 1 6.35344C 1 9.29852 3.42035 11.7069 6.43195 11.7069ZM 6.43195 12.7069C 9.98421 12.7069 12.8639 9.86235 12.8639 6.35344C 12.8639 2.84453 9.98421 0 6.43195 0C 2.87968 0 0 2.84453 0 6.35344C 0 9.86235 2.87968 12.7069 6.43195 12.7069Z" fill="#333333"/>
	            <path d="M 9.59204 11.0955L 10.5234 10.4513L 14.0001 15.3558L 13.0687 16L 9.59204 11.0955Z" fill="#333333"/>
	            </g>
	            </g>
	          </svg>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
</template>
<script>
	export default {
	  props: ['searchActive','filterActive'],
	  data(){
	  	return {
	  		inputSearch : '',
	  	}
	  },
	  methods: {
	   filterIsActive () {
	     this.$emit('filterIsActive')
	   },
	   changeMessage(event){
	   	this.message = event.target.value;
	   	this.$emit('search',this.message);
	   }
	  },
	}
</script>
<style scoped>
	.filter-active .filter-wrapper .button {
	  background: #3626A7 !important;
	}

	.filter-active .search-right{
	  opacity: 0;
	}

	  .button-filter{
	    width: 124px;
	    height: 40px;
	    display: block;
	  }

	  .button-filter span{
	    display: flex;
	    justify-content: center;
	    align-items: center;
	  }

	  .search-right{
	    transition: opacity .3s ease;
	  }

	 
	  
	  .short-wrapper, .filter-wrapper{
	    cursor: pointer;
	  }
	  .filter-wrapper{
	    margin-top : 2.4rem;
	    
	  }

	  .filter-wrapper svg{
	    margin-left: 1.6rem;
	  }
	  .search-right-wrapper{
	    display: flex;
	    align-items: center;
	  }

	  .search-right-wrapper > div{
	    margin-right: 1.6rem;
	  }

	  .search-wrapper{
	    margin: 10rem 1rem 2rem 1rem;
	    display: flex;
	    justify-content: space-between;
	    width: 100%;
	    align-items: center;
	    position: relative;
	  }

	  .input{
	    position: relative;
	  }

	  .label-hidden{
	    opacity: 0;
	  }

	  .label{
	    font-size : 16px;
	    font-family: 'Josefin Sans', sans-serif;
	    padding-left : 2rem;
	    padding-bottom: .8rem;
	    transition: all .3s ease;
	  }

	  .search-wrapper input{
	    padding: 1rem 2rem;
	    border-radius: 2rem;
	    transition: all .3s ease;
	    border : 2px solid rgba(36,123,160,.4);
	     font-size : 16px;
	    font-family: 'Josefin Sans', sans-serif;
	    outline: 0;
	  }

	  input:focus{
	    border : 2px solid rgba(36,123,160,1);
	  }

	  .search-icon{
	    width: 100%;
	    padding: 2rem;
	    opacity: .7;
	    pointer-events: none;
	    display: flex;
	    justify-content: space-between;
	    font-size : 16px;
	    font-family: 'Josefin Sans', sans-serif;
	    position: absolute;
	    top: 50%;

	    transform : translateY(-50%);
	  }

	  #clear-search{
	    cursor: pointer;
	  }
</style>