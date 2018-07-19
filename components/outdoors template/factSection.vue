<template>
	<div id="fact-section" class="font-3 wrapper">
		<div class="inner-wrapper">
			<div  :style="thisStyle" class="text-wrapper">
				<indexSection :currentIndex="i" type="fact" ref="indexRef" v-for="(data,i) in datas">
					<div class="fact-wrapper">
						<h3 class="fw-700">{{data.fact[0].title}}</h3>
						<h3 class="fw-300">{{data.fact[0].desc}}</h3>
					</div>
					<div class="fact-wrapper">
						<h3 class="fw-700">{{data.fact[1].title}}</h3>
						<h3 class="fw-300">{{data.fact[1].desc}}</h3>
					</div>
					<div class="fact-wrapper " :style="thisStyle">
						<h3 class="fw-700">{{data.fact[1].title}}</h3>
						<h3 class="fw-300">{{data.fact[1].desc}}</h3>
					</div>
					<div class="fact-image " :style="thisStyle">
						<div class="fact-image-wrapper">
							<div class="image">
								<div class="colapse-icon">
									<svg id="icon-grid" viewBox="0 0 24 24" width="24px" height="24px">
											<title>grid</title>
											<path d="M8.982 8.982h5.988v5.988H8.982zM0 0h5.988v5.988H0zM8.982 17.965h5.988v5.988H8.982zM0 8.982h5.988v5.988H0zM0 17.965h5.988v5.988H0zM17.965 0h5.988v5.988h-5.988zM8.982 0h5.988v5.988H8.982zM17.965 8.982h5.988v5.988h-5.988zM17.965 17.965h5.988v5.988h-5.988z"></path>
										</svg>
								</div>
							</div>
							<h3>More impressions</h3>
							<p>A collection of images</p>
						</div>
					</div>
				</indexSection>
			</div>
			<div @click="expanded" class=" font-3 fw-700 link-more-wrapper">
					<div class="link-more link-active">
						<svg id="icon-dot" viewBox="0 0 24 24" width="16px" height="16px">
								<title>dot</title>
								<path d="M11.5 9c-.69 0-1.28.244-1.768.732A2.41 2.41 0 0 0 9 11.5c0 .69.244 1.28.732 1.767A2.409 2.409 0 0 0 11.5 14c.69 0 1.28-.244 1.768-.733A2.408 2.408 0 0 0 14 11.5c0-.69-.244-1.28-.732-1.768A2.408 2.408 0 0 0 11.5 9z"></path>
						</svg>
						SEE MORE FACTS
					</div>
					<div class="link-close ">
						<svg id="icon-cross" viewBox="0 0 24 24" width="16px" height="16px">
							<title>cross</title>
							<path d="M11.449 11.962l-5.1 5.099a.363.363 0 1 0 .513.512L12 12.436l5.137 5.137a.361.361 0 0 0 .513 0 .363.363 0 0 0 0-.512l-5.099-5.1 5.102-5.102a.363.363 0 1 0-.512-.513L12 11.487l-5.141-5.14a.363.363 0 0 0-.513.512l5.103 5.103z"></path>
						</svg>
						SEE LESS FACTS
					</div>
			</div>
		</div>
		<div :style="moreActive ? 'transform: translate3d(0,0,0) scale(1.05); ' :
							 'transform: translate3d(0,28vw,0) scale(1.05); transition-delay : .3s;' " class="black">
		</div>
	</div>
</template>
<script >
	export default{
		props : ['index','direction'],
		data(){
			return{
				expand : 28,
				opacity : 1,
				thisStyle :{
					opacity : 1,
					transform : 'translateY(28vw)'
				},
				moreActive : false,
				datas : this.$parent.datas,
			}
		},
		methods : {
			expanded(){
				const self = this
				this.moreActive =  !this.moreActive
				console.log(this.expand)
				if(this.moreActive){
					this.thisStyle.opacity = 0
					setTimeout(function(){
						self.thisStyle.opacity =  1
						self.thisStyle.transform = 'translateY(0vw)'
					},1000)
				}

				if(!this.moreActive){
					this.thisStyle.opacity = 0
					setTimeout(function(){
						self.thisStyle.opacity =  1
						self.thisStyle.transform = 'translateY(28vw)'
					},1200)
				}

			}
		}
	}
</script>
<style scoped>
	.fact-image-wrapper{
		padding : 0 5vw;
	}
	.current-index > div:nth-child(3){
		opacity: 0;
	}
	.current-index > div:nth-child(4){
		opacity: 0;
	}
	.fact-image{
		margin-top: 64px;
	}
	.colapse-icon{
		position: absolute;
		top: 50%;
		left: 50%;
		transform : translate3d(-50%,-50%,0);
	}
	.image{
		width: 200px;
		height: 150px;
		background-image: url('https://tympanus.net/Development/OutdoorsTemplate/img/thumb1.jpg');
		-webkit-background-size: cover;
		background-size: cover;
		position: relative;
		margin-bottom: 32px;
		cursor: pointer;
	}
	.image::after{
		transform: rotate(4deg);
	}
	.image::before{
		transform: rotate(-4deg);
	}
	.image::after ,.image::before{
		content: '';
		width: 100%;
		height: 100%;
		background: #2f2f2f;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	svg{
		fill : white;
		margin-right: 8px;
	}
	.link-active{
		opacity: 1 !important;
	}
	.link-more, .link-close{
		position: absolute;
		opacity: 0;
		left: 0;
		width: 100%;
		cursor: pointer;
		display: flex;
		align-items: center;
		transition : all .3s ease;
	}
	.link-more-wrapper{
		color: white;
		font-size: 10px;
		height: 16px;
		width: 175px;
		bottom: 9%;
		position: absolute;
		left: 0%;
		padding : 0 5vw;
		margin-left: 5vw;
		letter-spacing: 4px;
	}
	.black{
		width: 50%;
		height: 100%;
		background-color: black;
		position: absolute;
		transform: translate3d(0,28vw,0) scale(1.05);
    top: 0;
    transition : transform .9s cubic-bezier(0.8,0,0.2,1);
	}
	.text-wrapper{
    width: 50%;
    height: 100%;
    position: absolute;
    -webkit-transform: translate3d(0px,0,0);
    transform: translate3d(0%,27vw,0);
    top: 6vh;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition : opacity .3s ease;
}

	.inner-wrapper{
		z-index: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.fact-wrapper{
		margin-top: 24px;
		transition: opacity .3s ease;
		padding : 0 5vw;
	}
	.wrapper{
		width: 45%;
		height: 100%;
		
	}
	.font-3{
		color: white;
	}
	h3{
		font-size: 17px;
		color:white;
		margin-bottom: 8px;
		margin-top : 0;
	}
	p{
		font-size: 15px;
		margin-top: 0;
		color:white;
	}
</style>