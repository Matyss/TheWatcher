<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h3>Rate this movie</h3>
          </div>

          <div class="modal-body">

          </div>

          <div class="modal-footer">
              <button class="btn btn-modal" @click="$emit('close')">
                OK
              </button>
          </div>
        </div>
      </div>
    </div>
</template>

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