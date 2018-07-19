<template>
	<div class="image-wrapper">
		<div  class="image" :style="{ 'background-image': 'url(' + url + ')' }" ></div>
	</div>
</template>
<script >
	export default{
		props :['url']
	}
</script>
<style scoped>
	.image-wrapper{
		width: 100%;
		height: 100%;
	}
	.image{
			background-position: center center;
		-webkit-background-size: cover;
		background-size: cover;
		width: 100%;
		height: 100%;
	}
</style>