<template>
	<div class='description'>
		<button @click='setWatched(movie)' class="btn btn-success">Watched</button>
		<a :href="'https://themoviedb.org/movie//' + movie.id" class='btn btn-info' target='_blank'>More Info</a>
		<hr>
		<h3>Overview:</h3>
		<p class='year'>{{ movie.year }}</p>
		<p>{{ movie.description }}</p>
		<p :style='myStyle' ><strong>TMDb rating: {{ movie.rating }}/10</strong></p>
		<p class='date' >{{ movie.date }}</p>
	</div>
</template>

<script>

import { eventBus } from '../main';
import db from '../db';

export default {
	data() {
		return {
			color: '',
			movieObj: null
		}
	},
	firesbase: {
		movies: db.ref('movies')
	},
	props: ['movie'],
	methods: {
		setWatched(movie) {
			this.movieObj = movie;
			eventBus.$emit('movieEmited', this.movie);
			db.ref('movies').child(movie['.key']).update({
			watched: true
			});
			this.$emit('movieWatched');
		}
	},
	computed: {
		myStyle() {
			if(this.movie.rating >= 7.5){
				return {
					color: 'green'
				}
			} else if(this.movie.rating < 7.5 && this.movie.rating > 6.5) {
				return {
					color: 'orange'
				}
			} else {
				return {
					color: 'red'
				}
			}
		}
	}
}
</script>

<style scoped>


	.btn {
		border: none;
		border-radius: 0px;
		padding: 8px 16px;
		cursor: pointer;
		font-weight: 300;
	}

	.btn-success {
		background-color: #02d143;
	}

	.btn-info {
		background-color: #03a9f4;
	}

	.btn-success:hover {
		background-color: #00b238;
	}

	.btn-info:hover {
		background-color: #0092Ca;
	}

	.description {
		text-align: left;
		margin: 5px;
		padding: 5px;
	}

	h3 { 
		font-size: 1.5em;
		font-weight: 300;
	}

	.year {
		color: gray;
		font-size: 1.2em;
	}

	.date {
		font-style: italic;
		color: gray;
		text-align: right;
	}

</style>