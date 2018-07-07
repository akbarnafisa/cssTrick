<template>
	<div class="card-wrapper">
	  <div class="found-wrapper font-2">
	    <transition name="fade" mode="out-in">
	      <div v-if="search.length > 0 && filteredList.length != 0 && !filterActive">
	         We found <span> {{filteredList.length}} projects </span>  for "{{search}}"
	       </div>
	     </transition>         
	  </div>
	  <div t v-for="(project,index) in filteredList" :key="index" class="card">
	    <div class="thumbnail"  :style="{backgroundImage: 'url(' + project.thumbnail + ')'}"></div>
	    <div class="title font-1">
	       {{project.title}}
	    </div>
	    <div class="button-wrapper">
	      <a :href="project.origin" class="button btn-primary " target="_blank">
	        Source
	      </a>
	      <a :href="project.github" class="button btn-ghost " target="_blank">
	        Github
	      </a>
	    </div>
	    <nuxt-link :to="project.link"></nuxt-link>
	  </div>
	  <transition name="fade" mode="out-in">
	   <div class="notFound-wrapper font-2" v-if="filteredList.length == 0 && search.length > 0">
	     <div>NO RESEARCH WAS FOUND FOR "{{search}}"</div>
	     <div>TRY SOME DIFFERENT KEYWORDS.</div>
	     <div>USE MORE GENERAL KEYWORDS.</div>
	   </div>
	  </transition>
	  <transition name="fade" mode="out-in">
	   <div class="notFound-wrapper font-2" v-if="filteredList.length == 0 && filterArray.length > 1">
	     <div>NO RESEARCH WAS FOUND FOR THIS TAGS</div>
	     <div>TRY SOME DIFFERENT TAGS.</div>
	   </div>
	  </transition>
	</div>
</template>
<script>
export default {
  props: ['search','filteredList','filterArray'],
  }

</script>
<style scoped>
	.card-wrapper{
	  display: flex;
	  flex-wrap: wrap;
	  width: 100%;
	  transform: translate3d(0,-24px,0);
	  transition: transform .5s cubic-bezier(0.8,0,0.2,1);
	}

	.card{
	  width: 355px;
	  margin : 2.4rem .8rem;
	  height: 400px;
	  background-color: white;
	  position: relative;
	  border-radius: .8rem;
	  overflow : hidden;
	  transition : all .3s ease;
	  transform : scale(1);
	}

	.card > a{
	  display: block;
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  top: 0;
	  left: 0;
	}

	.card:hover{
	  box-shadow : 0px 10px 20px -5px rgba(40,60,80,.5);
	  transform : scale(1.005);
	}

	.title{
	  font-size: 2.1rem;
	  padding : 1.2rem 2.4rem;
	  color : rgb(40,60,80) ;
	}

	.thumbnail{
	  width: 100%;
	  height: 60%;
	  background-size: cover;
	  background-position: center center;
	}

	.button-wrapper{
	  position: absolute;
	  bottom : 3rem;
	  right: 0rem;
	  padding : .8rem 2.4rem;
	  z-index: 9;
	}


	.found-wrapper{
	  padding-top: 0rem;
	  text-align: center;
	  width: 100%;
	  font-size: 2rem;
	  height: 2rem;
	}

	.found-wrapper span{
	  font-weight: 700;
	  text-decoration: underline;
	}

	.notFound-wrapper{
	  padding-top: 5rem;
	  text-align: center;
	  width: 100%;
	  font-size: 1.6rem;
	}

	.notFound-wrapper > div{
	  margin-bottom: 1.2rem;
	}

	.notFound-wrapper > div:first-child{
	  font-size: 2rem;
	  font-weight: 700;
	}

</style>