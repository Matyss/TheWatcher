<template>
  <div class='container'>
    <transition name='modal'>
    <app-modal v-if='showModal' @close='showModal = false'></app-modal>
    </transition>
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
import Modal from './Modal.vue';


export default {
	

    data() {
    	return {
        showInfo: false,
        showModal: false
    	}
    },
    firebase: {
        movies: db.ref('movies')
    },
    components: {
    	appMovie: Movie,
      appMessageInfo: MessageInfo,
      appModal: Modal
    },
    methods: {
        displayInfo() {
          this.showModal = true;
          this.showInfo = true;
          setTimeout(() => {
            this.showInfo = false;
          }, 5000);
        }   
    }
}


</script>

<style scoped>

  .container {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  h2 {
    font-weight: 300;
  }
  
  /*Message transition*/

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

/*Modal transition*/

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

</style>