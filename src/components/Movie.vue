<template>
    <div class="col-md-3 col-sm-6">
    	<div class="thumbnail" @click='movie.selected = !movie.selected'>
    		<img :src="movie.img">
    		<div class="caption">
    			<h4> {{ movie.title }}</h4>
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
        .thumbnail:hover {
            transform: none !important;
        }
    } 

    img {
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }

    .thumbnail:hover {
        transform: scale(1.1);
        box-shadow: 7px 10px 82px -5px rgba(0,0,0,0.75);
    }


    .thumbnail {
        border: none;
        padding: 0;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
        -webkit-box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
        -moz-box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
    }

    .info {
        margin-bottom: 10px;
    }
</style>

