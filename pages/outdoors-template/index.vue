<template>
	<div class="wrapper">
		<div class="left-wrapper">
			<navSection></navSection>
			<div class="indexContent-wrapper">
				<div class="inner-wrapper">
					<indexSection type="index" ref="indexRef" v-for="(data,index) in datas">
						<div class="font-3 fw-700">0{{index + 1}}</div>
					</indexSection>
					<div class="bar"></div>
					<div class="total-index font-3 fw-700">04</div>
				</div>
			</div>
			<contentSection></contentSection>
			<div class="image-controller-wrapper">
				<button  @click.prevent="next" class="image-controller">
					<svg data-v-074d5ace="" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="36" viewBox="0 0 24 24" width="36"><path data-v-074d5ace="" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path><path data-v-074d5ace="" d="M0 0h24v24H0z" fill="none"></path></svg>
				</button>
				<button  @click.prevent="prev" class="image-controller">
					<svg data-v-074d5ace="" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="36" viewBox="0 0 24 24" width="36"><path data-v-074d5ace="" d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path><path data-v-074d5ace="" d="M0-.75h24v24H0z" fill="none"></path></svg>
				</button>
			</div>
		</div>
		<div class="right-wrapper">
			<imageSection></imageSection>
			<div class="info-wrapper">
				<factSection></factSection>
				<div class="moreSection-wrapper">
					<indexSection type="index" ref="moreRef" v-for="(data,index) in datas">
							<moreSection></moreSection>
					</indexSection>
				</div>
			</div>
		</div>
	</div>
</template>
<script >
	export default{
		mounted(){
			this.slides = this.$refs.indexRef
			var moreSlide = []
			moreSlide = this.$refs.moreRef

			this.slides.forEach((slide, i) => {
				slide.index = i
			})
			moreSlide.forEach((slide, i) => {
				slide.index = i
			})
		},
		computed :{
			slidesCount(){
				return this.slides.length
			}
		},
		methods:{
			next(event){
				this.index++
				this.direction = 'up'
				if(this.index >= this.slidesCount){
					this.index = 0
				}
				event.target.parentNode.disabled = true;
				setTimeout(function() {
		        event.target.parentNode.disabled = false;
		    }, 900);
		    console.log(event.target.parentNode.parentNode)
			},
			prev(event){
				this.index--
				this.direction = 'down'
				if(this.index < 0){
					this.index = this.slidesCount - 1
				}
				event.target.parentNode.disabled = true;
				setTimeout(function() {
		        event.target.parentNode.disabled = false;
		    }, 900);
		    console.log(event.target.parentNode.parentNode)
			},
		},
		data(){
			return{
				index : 0,
				animated : true,
				slides : [],
				direction : null,
				datas : [
					{url : 'http://lorempicsum.com/futurama/630/300/3', },
					{url : 'http://lorempicsum.com/futurama/630/300/2', },
					{url : 'http://lorempicsum.com/futurama/630/300/1', },
					{url : 'https://cdn.css-tricks.com/wp-content/uploads/2017/01/vue-2-1.jpg'}
				]
			}
		}
	}
</script>
<style scoped>
	button{
		outline: none;
	}
	.moreSection-wrapper{
		width: 55%;
		height: 100%;
		position: relative;
		cursor: pointer;
	}
	.total-index{
			font-size: 12px;
			margin : 0 15px;
			position: relative;
		}
	.inner-wrapper{
		display: flex;
		position: relative;
		overflow: hidden;
	}
	.indexContent-wrapper{
		height: 30%;
		display: flex;
		align-items: flex-end;
		margin-left: 80px;
		padding-bottom: 48px;
	}
	.bar{
		height: 3px;
		width: 100px;
		background-color: #333;
		margin : 5px 0;
		margin-left: 30px;
	}

	.info-wrapper{
		display: flex;
		height: 23%;
	}
	.image-controller-wrapper{
		display: flex;
		padding-top : 32px;
		
	}
	.left-wrapper{
		position: relative;
		width: 46vw;
		height: 100vh;
		padding: 0 64px;
	}
	.right-wrapper{
		position: relative;
		width: 54vw;
		height: 100vh;
	}
	.wrapper{
		display: flex;
		overflow : hidden;
	}
	.image-controller{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		background: #fff;
		border-radius: 50%;
		color: #fff;
		margin-bottom: 32px;
		margin-bottom: 2rem;
		margin-left: 32px;
		margin-left: 2rem;
		border: 2px solid #c8c8dc;
		box-shadow: 0 5px 15px rgba(0,0,0,.1);
		transition: all .3s ease;
		cursor: pointer;
	}
</style>