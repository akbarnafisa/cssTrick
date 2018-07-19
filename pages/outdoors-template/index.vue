<template>
	<div class="wrapper">
		<div class="left-wrapper">
			<navSection></navSection>
			<div class="indexContent-wrapper">
				<div class="inner-wrapper">
					<indexSection :currentIndex="i" type="index" ref="indexRef" v-for="(data,i) in datas">
						<div class="font-3 fw-700">0{{i + 1}}</div>
					</indexSection>
					<div class="bar"></div>
					<div class="total-index font-3 fw-700">04</div>
				</div>
			</div>
			<div class="contentSection-wrapper">
				<contentSection :index="index" :direction="direction" ></contentSection>
			</div>
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
			<div class="imageSection-wrapper">
				<indexSection :currentIndex="i" type="imageSection" ref="moreRef" v-for="(data,i) in datas">
						<imageSection :url="data.url"></imageSection>
				</indexSection>
			</div>
			<div class="info-wrapper">
				<factSection :index="index"></factSection>
				<div class="moreSection-wrapper">
					<indexSection :currentIndex="i" type="index" ref="moreRef" v-for="(data,i) in datas">
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
			
		},
		computed :{
			slidesCount(){
				return this.datas.length
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
		 
			},
		},
		data(){
			return{
				index : 0,
				animated : true,
				slides : [],
				direction : null,
				datas : [
					{
						title : 'lakes',
						desc : 'A lake is an area filled with water, localized in a basin, that is surrounded by land, apart from any river or other outlet that serves to feed or drain the lake. Lakes lie on land and are not part of the ocean',
						url : 'https://tympanus.net/Development/OutdoorsTemplate/img/2.jpg',
						fact : [
							{
								title : 'Biggest lake',
								desc : 'Caspian sea in Kazakhstan'
							},
							{
								title : 'Coolest activity',
								desc : 'Kayaking the whole lake'
							},
							{
								title : 'Lake depth',
								desc : 'With 55m its the deepest'
							},
						]
					},
					{
						title : 'hiking',
						desc : 'Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walk',
						url : 'https://tympanus.net/Development/OutdoorsTemplate/img/1.jpg',
						fact : [
							{
								title : 'Lovely paths',
								desc : 'Caspian sea in Kazakhstan'
							},
							{
								title : 'Haunted ways',
								desc : 'Kayaking the whole lake'
							},
							{
								title : 'Running and more',
								desc : 'With 55m its the deepest'
							},
						]
					},
					{
						title : 'paths',
						desc : 'A footpath (also pedestrian way, walking trail, nature trail) is a type of thoroughfare that is intended for use only by pedestrians and not other forms of traffic such as motorized vehicles, cycles, and horses',
						url : 'https://tympanus.net/Development/OutdoorsTemplate/img/3.jpg',
						fact : [
							{
								title : 'Biggest lake',
								desc : 'Caspian sea in Kazakhstan'
							},
							{
								title : 'Coolest activity',
								desc : 'Kayaking the whole lake'
							},
							{
								title : 'Lake depth',
								desc : 'With 55m its the deepest'
							},
						]
					},
					{
						title : 'rivers',
						desc : 'A river is a natural flowing watercourse, usually freshwater, sea, lake or another river. In some cases a river flows into the ground and becomes dry at the end of its course without reaching another body of wate',
						url : 'https://tympanus.net/Development/OutdoorsTemplate/img/4.jpg',
						fact : [
							{
								title : 'River romantics',
								desc : 'Caspian sea in Kazakhstan'
							},
							{
								title : 'History call',
								desc : 'Kayaking the whole lake'
							},
							{
								title : 'Walking around',
								desc : 'With 55m its the deepest'
							},
						]
					},
				]
			}
		}
	}
</script>
<style scoped>
	.imageSection-wrapper{
		width: 100%;
		height: 77%;
		position: relative;
		overflow : hidden;

	}
	.contentSection-wrapper{
		position: relative;
		height: 40%;
	}
	button{
		outline: none;
	}
	.moreSection-wrapper{
		width: 55%;
		height: 100%;
		position: relative;
		cursor: pointer;
		overflow : hidden;
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