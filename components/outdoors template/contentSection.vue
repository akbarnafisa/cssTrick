<template>
	<div class="section-wrapper">
		<div class="title-wrapper">
			<indexSection :currentIndex="i" type="index" ref="indexRef" v-for="(data,i) in datas">
				<h2 class="font-3 fw-700">{{data.title}}</h2>
			</indexSection>
		</div>
		<div class="desc-wrapper">
			<indexSection :currentIndex="i" type="descContent" ref="indexRef" v-for="(data,i) in datas">
				<p class="font-3 fw-300">{{data.desc}}</p>
			</indexSection>
		</div>
	</div>
</template>
<script >
export default{
	props : ['index','direction'],
	data(){
		return{
			datas : this.$parent.datas,
		}
	}
}
</script>
<style scoped>
.title-wrapper, .desc-wrapper{
  width: 100%;
  height: 49%;
  overflow: hidden;
  position: relative;
}


.section-wrapper{
	width: 100%;
	height: 100%;
}
 h2{
 	font-size: 8vw;
 	margin :0;
 	color : black;

 }
 p{
 	font-size: 16px;
 	line-height: 28px;
 	text-align: justify;
 	color : black;
 	padding-right: 32px;
 }
</style>