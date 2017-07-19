<template>
  <div class="container">
  	<div class='row'>
    	<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    		<transition name='appear' mode='out-in'>
          	<component 
              :is='displayedMessage'>
          	</component>
        </transition>
    		<h2>You have already seen:</h2>
    		<hr>
    		<ul>
    			<template v-for='(el, index) in movies'>
    				<li v-if='el.watched != false'>
    					<span @click='removeMovie(el)' class='button button--delete'>
    						<i class="fa fa-trash"></i>
    					</span>
    					<span @click='restoreMovie(el)' class='button button--restore'>
    						<i class="fa fa-repeat"></i>
    					</span>
    				 {{ el.title }} ({{ el.year }})
    				 <img :src="el.img">
    				</li>
    			</template>
    		</ul>
    	</div>
    </div>
  </div>
</template>

<script>

import MessageInfoDeleted from './alerts/MessageInfoDeleted.vue';
import MessageRestored from './alerts/MessageRestored.vue'
import db from '../db';

export default {
	data() {
		return {
			displayedMessage: ''
		}
	},
	firebase: {
        movies: db.ref('movies')
    },
    methods: {
    	removeMovie(el) {
    		db.ref('movies').child(el['.key']).remove();
    		this.displayedMessage = 'app-message-info-deleted';
          		setTimeout(() => {
	            	this.displayedMessage = '';
	          	}, 4000);
    	},
    	restoreMovie(el) {
    		db.ref('movies').child(el['.key']).update({
				watched: false
			});
			this.displayedMessage = 'app-message-restored';
          		setTimeout(() => {
	            	this.displayedMessage = '';
	          	}, 4000);
    	}
    },
    components: {
    	appMessageInfoDeleted: MessageInfoDeleted,
    	appMessageRestored: MessageRestored
    }
}

</script>

<style scoped>
img {
	height: 40px;
	width: auto;
	position: relative;
	float: right;
  transition: all 0.5s ease-in-out;
}

li:hover img {
  transform: scale(5.0);
  z-index: 10000;
  border-radius: 3px;
}

ul {
	border: 1px solid #f2f2f2;
	border-bottom: none;
	list-style: none;
	padding: 0;
	margin: 0;
	box-shadow: 0px 12px 30px -12px rgba(0,0,0,0.75);
	-webkit-box-shadow: 0px 12px 30px -12px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 12px 30px -12px rgba(0,0,0,0.75);
}

li {
	height: 40px;
	color: #423f3f;
	line-height: 40px;
}

li:nth-child(2n) {
	background-color: #f2f2f2;
}

li:hover span {
	width: 40px;
	opacity: 1;
	transition: 0.3s ease-in-out;
	cursor: pointer;
}

.button {
	height: 40px;
	text-align: center;
	color: white;
	width: 0;
	display: inline-block;
	transition: 0.3 ease-in-out;
	opacity: 0
}

.button--delete {
	background-color: #ff4444;
}

.button--restore {
	background-color: #ffbb33;
	 margin-left: -5px;
	 margin-right: 15px;
}

/*   Animation for messages   */

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

</style>