<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h3>Rate this movie</h3>
          </div>

          <div class="modal-body">
            <star-rating 
            :show-rating='false' 
            :increment='0.5' 
            @rating-selected='setRating'></star-rating>
            <div>{{ ratingInfo }}</div>
          </div>

          <div class="modal-footer">
              <button class="btn btn-modal" @click="updateRating">
                OK
              </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import StarRating from '../../node_modules/vue-star-rating';

import db from '../db';

  export default {
    data() {
      return {
        rating: null,
        ratingInfo: `No rating selected`
      }
    },
    props: ['currentMovie'],
    components: {
      StarRating
    },
    firesbase: {
      movies: db.ref('movies')
    },
    methods: {
      setRating(rating) {
        this.ratingInfo = `You have rated this movie: ${rating} stars`;
        this.rating = Number.parseFloat(rating);
      },
      updateRating() {
        db.ref('movies').child(this.currentMovie['.key']).update({
        userRating: this.rating
        });
        this.$emit('close');
      },

    }
  }
</script>

<style scoped>
  
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  }

  .modal-body {
    text-align: center;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
  width: 450px;
  margin: 0px auto;
  background-color: #fff;
  text-align: center;

  }

  .modal-header {
    margin-top: 0;
    color: #fff;
    background-color: #718792;
    padding: 15px 0;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  .btn {
    border: none;
    border-radius: 0px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 300;
    color: #fff;
  }

  .btn-modal {
    background-color: #02d143;
  }

  .btn-modal:hover {
    background-color: #00b238;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

 h3 {
  margin-left: 20px;
  }

</style>