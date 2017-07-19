<template>
	<div class="container">
		<div class='row'>
	      	<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<transition name='appear' mode='out-in'>
					<component 
		      		:is='displayedMessage' 
		      		:title='movie.title'>
		      		</component>
				</transition>
				<h2>Add new movie to list</h2>
				<hr>
		        <div class="form-group">
		          <label>Title</label>
		          <input required class="form-control" type='text' v-model='movie.title' placeholder="e.g. Fight Club" v-on:keyup.enter='addMovie'>
		        </div>
		        <div class="form-group">
		          <label>Year</label>
		          <input class="form-control" type='text' v-model='movie.year' placeholder="e.g. 1991">
		        </div>
		        <div class="form-group">
		          <label>Description</label>
		          <textarea class="form-control" type='text' maxlength="120" rows='4' v-model='movie.description'></textarea> 
		        </div>
		        <button class="btn btn-success" @click='addMovie'>Submit</button>
		        <button class="btn btn-warning" @click='fetchData'>Search</button>
	        </div>
		</div>
	</div>
</template>

<script>

import MessageSuccess from './alerts/MessageSuccess.vue';
import MessageFail from './alerts/MessageFail.vue';

import db from '../db';

export default {
	data() {
		return {
			movie: {
				title: '',
				img: '',
				year: '',
				description: '',
				rating: 0,
				date: '',
				id: '',
				watched: false,
				selected: false
			},
			displayedMessage: ''
		}
	},
	firebase: {
		movies: db.ref('movies')
	},
	methods: {
		addMovie() {
			let d = new Date();
        	let n = d.toDateString();
        	this.movie.date = n;

        	if(this.movie.title !== '') {
				db.ref('movies').push(this.movie);
				this.movie.img = '';
				this.movie.year = '';
				this.movie.description = '';
				this.movie.rating = 0;
				this.movie.date = '';
				this.movie.id = '';
				this.displayedMessage = 'app-message-success';
				setTimeout(() => {
					this.displayedMessage = '';
					this.movie.title = '';
				}, 3000);
			} else {
				this.displayedMessage ='app-message-fail';
			}
		},
		fetchData() {
			if(this.movie.title !== '') {
				let queryTitle = this.movie.title,
					queryYear = this.movie.year

				fetch('https://api.themoviedb.org/3/search/movie?api_key=fe186a4db7967a7ae9ac6973334a6e88&query=' + queryTitle + '&year=' + queryYear)
				.then((res) => {
					return res.json()
				})
				.then((res) => {
					this.movie.img = 'https://image.tmdb.org/t/p/w500' + res.results[0].poster_path;
					this.movie.description = res.results[0].overview;
					this.movie.rating = res.results[0].vote_average;
					this.movie.year = (res.results[0].release_date).split('-', 1)[0];
					this.movie.title = res.results[0].title;
					this.movie.id = res.results[0].id;
				});
			} else {
				this.displayedMessage ='app-message-fail';
			}
      },
		checkNum(inputMax, inputVal) {
	      	if(inputVal > inputMax) {
	      		this.movie.year = inputMax;
	      	}
      	},
    },
	components: {
		appMessageSuccess: MessageSuccess,
		appMessageFail: MessageFail
	}
}
</script>

<style scoped>

	.form-control {
		border-radius: 0px;
	}

	.btn-success {
		background-color: #02d143;
		border: none;
		border-radius: 0px;
		padding: 8px 16px;
	}

	.btn-success:hover {
		background-color: #00b238;
	}

	.btn-warning {
		background-color: #ffa000;
		border: none;
		border-radius: 0px;
		padding: 8px 16px;
	}

	.btn-warning:hover {
		background-color: #dd8c02;
	}

	.container {
		font-family: 'Lato', sans-serif
	}

	.appear-enter-active {
		animation: appear-in 0.7s ease-in forwards;
	}

	.appear-leave-active {
		animation: appear-out 0.7s ease-out forwards;
	}
	@keyframes appear-in {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes appear-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(20px);
			opacity: 0;
		}
	}


	textarea {
		resize: none;
	}

	.row {
		margin-bottom: 30px;
	}

</style>