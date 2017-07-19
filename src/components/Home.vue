<template>
  <div class='container'>
      <div class='row'>
        <div class="col-md-6 col-sm-6">
      		<h2>Our most recent movies to see:</h2>
              <transition name='appear' mode='out-in'>
                <app-message-info v-show="showInfo"></app-message-info>
              </transition>
        </div>
      </div>
      <hr>
      <div class="row text-center flex-wrap">
          <template v-for='el in movies'>
      	   <app-movie @movieWatched="displayInfo" v-if='el.watched != true' :movie='el'></app-movie>
          </template>
      </div>
  </div>
</template>

<script>

import Movie from './Movie.vue';
import MessageInfo from './alerts/MessageInfo.vue';
import db from '../db';


export default {
	

    data() {
    	return {
            showInfo: false
    	}
    },
    firebase: {
        movies: db.ref('movies')
    },
    components: {
    	appMovie: Movie,
        appMessageInfo: MessageInfo
    },
    methods: {
        displayInfo() {
          this.showInfo = true;
          setTimeout(() => {
            this.showInfo = false;
          }, 4000);
        }   
    }
}


</script>

<style scoped>
  
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

  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
}

</style>