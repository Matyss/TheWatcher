<template>
    <div class="col-lg-3 col-md-4 col-sm-6">
    	<div class="card" @click='movie.selected = !movie.selected'>
    		<img class='card-img-top img-fluid' alt='movie_poster' :src="movie.img">
    		<div class="card-block">
    			<h4 class='card-title'> {{ movie.title }}</h4>
    		</div>
    	   <app-show 
           @movieWatched='removeMovie' 
           v-show='movie.selected' 
           :movie='movie'>
           </app-show>
    	</div>
    </div>
</template>

<script>

import Show from './Show.vue';    

export default {
    props: ['movie'],
    components: {
        appShow: Show
    },
    methods: {
        removeMovie() {
            this.$emit('movieWatched')
        }
    }
}

</script>

<style scoped>

    @media(max-width: 768px) {
        .card:hover {
            transform: none !important;
        }
    } 

    .card:hover {
        transform: scale(1.1);
        box-shadow: 7px 10px 82px -5px rgba(0,0,0,0.75);
    }


    .card {
        margin-bottom: 20px;
        border: none;
        border-radius: 0px;
        padding: 0;
        min-width: 220px;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
        -webkit-box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
        -moz-box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
    }

    h4 {
        font-weight: 300;
    }

    .info {
        margin-bottom: 10px;
    }
</style>

