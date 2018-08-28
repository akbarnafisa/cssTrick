<template>
		<div class="container">
			<input @keyup.enter="addTodo" placeholder="What needs to be done" v-model="newTodo" type="text" name="todo">
			<div class="todos-wrapper">
				<div 
					v-for = "(todo, index) in todosFiltered"
					:key = "index"
			 		class="list">
			 			<input type="checkbox" v-model="todo.completed" />
			 			<input @keyup.enter="editing = null" @blur="editing = null" v-if="editing === index" class="todo-edit" type="text" v-model="todo.title" name="todoEdit" v-focus>
			 			<div :class="todo.completed ? 'completed' : ''" v-else @dblclick="editTodo(todo, index)">{{todo.title}}</div>
						<span @click="deleteTodo(index)" class="hapus">Hapus</span>
				</div>
				<div> 
					<input @change="checkAllTodo" type="checkbox" :checked = "!anyRemaining" />
					Check All
				</div>
				<div> 
					remaining item : {{remainingItem}}
				</div>
				<div>
					<button 
						:class="{active: filter === 'all'}"
						@click="filter = 'all'"						
						>All
					</button>
					<button 
						:class="{active: filter === 'active'}"
						@click="filter = 'active'"						
						>Active
					</button>
					<button 
						:class="{active: filter === 'completed'}"
						@click="filter = 'completed'"						
						>Completed
					</button>
					<button 
						@click="clearCompleted()"						
						>Clear Completed
					</button>
				</div>
			</div>
		</div>
</template>
<script >
	export default {
		data() {
			return {
				filter: 'all',
				newTodo: '',
				editing: null,
				idForTodo : 3,
				todos: [
					{
						id: 1,
						title: 'Cooking',
						completed: false,
					},
					{
						id: 2,
						title: 'Sweep the floor',
						completed: false,
					}
				]
			};
		},
		directives: {
			focus: {
				inserted(el) {
					el.focus();
				}
			}
		},
		computed: {
			remainingItem() {
				return this.todos.filter( val => !val.completed).length;
			},
			anyRemaining() {
				return this.remainingItem != 0;
			},
			todosFiltered(){
				if ( this.filter === 'all') {
					return this.todos
				} else if (this.filter === 'active') {
					return this.todos.filter( val => !val.completed)
				} else if (this.filter === 'completed') {
					return this.todos.filter( val => val.completed)
				}
				return this.todos
			}
		},
		methods: {
			clearCompleted(){
				this.todos = this.todos.filter(todo => !todo.completed);
			},
			checkAllTodo(){
				this.todos.forEach( val => val.completed = event.target.checked)
			},
			editTodo(data, index) {
				this.editing = index;
			},
			deleteTodo(val) {
				this.todos.splice(val, 1);
			},
			addTodo() {
				this.todos.push({
					id: this.idForTodo,
					title: this.newTodo,
					completed: false,
				});
				this.newTodo = '';
				this.idForTodo += 1;
			},
		}
	}
</script>
<style scoped>
	.active{
		background-color: green;
	}
	.completed {
    color: grey;
    text-decoration: line-through;
	}
	.hapus {
		font-weight: 700;
		color: red;
		cursor: pointer;
	}
	.list {
		
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
	}
	.container {
		background: white;
		box-shadow: 0px 4px 10px rgba(0,0,0,.1);
		max-width: 500px;
		margin: 100px auto;
		padding: 20px;
	}

	input[type="text"]{
		width: 100%;
		padding: 8px 16px;
		margin: 24px 0;
	}
	.todo-edit{
		width: 50% !important;
	}

	.container {
		font-size: 14px;
	}
</style>