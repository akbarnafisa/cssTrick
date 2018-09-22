<template>
	<div style="font-size:21px;" class="container">
		<div style="display:flex;">
			<div>
				<div>
					<span 
						class=''
						v-for="(word,index) in afterTyped.slice(0,12 + hightlight)" 
						:key="index"  
						v-html="word"
						>
					</span>
				</div>
				
				<input @keyup.space="reset" v-model="typed" class="input" id="input" type="text">
			</div>
			<div>
				<span 
					class=''
					v-for="(word,index) in text.slice(0,12 + hightlight)" 
					:key="index"  
					:id="`data${index}`"
					>
					{{word}}
				</span>
			</div>
		</div>
		<!-- <div class="wrapper">
			<div  class="text">
				<span 
					class=''
					v-for="(word,index) in text" 
					:key="index"  
					:id="`data${index}`"
					>
					{{word}}
				</span>
			</div>
			<textarea @keyup.space="reset()" v-model="typed"></textarea>
		</div> -->
		wew {{currentWord}}
	</div>
</template>
<script >
	// export default {
	// 	data() {
	// 		return {
	// 			datas: [1,2,3,4,5],
	// 			hightlight: 0,
	// 			typed: '',
	// 			data: 'Take a deep breath, relax your fingers and take it slow. You need to be focused and not annoyed when attempting the typing speed test. The best thing you can do to start typing faster is to type more. The more practice you will get under your belt, the faster your typing-fu will be. It’s all about developing muscle memory. Just make sure you are reinforcing the good habits and not ones that will leave your fingers hurting after an intense typing session. The one that is the most comfortable. The more you type the faster you will get. And to type a lot, you can’t feel uncomfortable. The small bumps on the F and J keys will help your fingers locate the correct position without looking. This setup should give you full range of motion. There are a few alternative layouts that propose a more ergonomic approach to typing. You could also take the big leap and try out the Dvorak keyboard but that’s a whole other story.'
	// 		}
	// 	},
	// 	methods: {
	// 		reset() {
	// 			const el = document.querySelector(`#data${this.hightlight}`);
	// 			if (this.typed.trim('') === el.innerText ) {
	// 				el.classList.add('correct');
	// 				el.classList.remove('hightlight');
	// 			} else {
	// 				el.classList.add('wrong');
	// 				el.classList.remove('hightlight');
	// 				el.classList.remove('hightlight-wrong');
	// 			}
	// 			this.typed = '';
	// 			this.hightlight++;
	// 		}
	// 	},
	// 	watch: {
	// 		typed(value) {
	// 			const el = document.querySelector(`#data${this.hightlight}`);
	// 			const word = el.innerText;
	// 			el.classList.add('hightlight');
	// 			if (value.trim('') !== word.slice(0,value.length)) {
	// 				el.classList.add('hightlight-wrong');
	// 			} else {
	// 				el.classList.remove('hightlight-wrong');
	// 			}
	// 		}
	// 	},
	// 	computed: {
	// 		text() {
	// 			return this.data.split(' ')
	// 		}
	// 	}
	// }
	export default {
		data() {
			return {
				afterTyped: [],
				hightlight: 0,
				typed: '',
				currentWord: '',
				data: 'Mbak juni Transfer rekening Take a deep breath, relax your fingers and take it slow. You need to be focused and not annoyed when attempting the typing speed test. The best thing you can do to start typing faster is to type more. The more practice you will get under your belt, the faster your typing-fu will be. It’s all about developing muscle memory. Just make sure you are reinforcing the good habits and not ones that will leave your fingers hurting after an intense typing session. The one that is the most comfortable. The more you type the faster you will get. And to type a lot, you can’t feel uncomfortable. The small bumps on the F and J keys will help your fingers locate the correct position without looking. This setup should give you full range of motion. There are a few alternative layouts that propose a more ergonomic approach to typing. You could also take the big leap and try out the Dvorak keyboard but that’s a whole other story.'
			}
		},
		methods: {
			reset() {
				const el = document.querySelector(`#data${this.hightlight}`);
				if (this.typed === ' ') {
					this.afterTyped.push(`<span class="lineThrough">kosong</span>`)
					this.text.splice(0, 1)
				} else if (this.typed === this.currentWord ) {
					this.afterTyped.push(`<span class="correct">${this.typed}</span>`)
				} else {
					this.text.splice(0, 1)
					this.afterTyped.push(`<span class="lineThrough">${this.typed}</span>`)
				}

				this.typed = '';
				this.currentWord = '';
				this.hightlight++;
			}
		},
		watch: {
			typed(value) {
				const el = document.querySelector(`#data${this.hightlight}`);
				const input = document.querySelector(`#input`);
				const word = el.innerText;
				if (this.currentWord === '') {
					this.currentWord = word;
				}
				if (value.trim().length !== 0) {
					console.log(value, this.currentWord.slice(0,value.length))
					if ((value !== this.currentWord.slice(0,value.length))) {
						input.classList.add('lineThrough');
					} else {
						input.classList.remove('lineThrough');
						el.innerText = el.innerText.slice(1);
					}
				} else {

				}
			}
		},
		computed: {
			text() {
				return this.data.split(' ')
			}
		}
	}
</script>
<style lang="scss" scoped>
	span {
		padding: 0 2px;
	}
	.container {
		/deep/ .lineThrough {
		text-decoration: line-through;
		}
	}
	
	.input {
    background: transparent;
    border: none;
    text-align: right;
    outline: none;
    font-size:21px;
	}
	.hightlight {
		background-color: rgba(200,200,200,1);
	}
	.hightlight-wrong {
		background-color: red;
	}
	.wrong {
		color: red;
	}
	.correct {
		color: pink;
	}
	.wrapper {
		display: flex;
		textarea {
			width: 500px;
		}
		.text {
			font-size: 26px;
			width: 500px;
			height: 500px;
			display: flex;
			flex-wrap: wrap;
			
		}
	}
	
</style>