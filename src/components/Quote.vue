<template>
	<div class="container">
    <h2>Recall your favorite quote</h2>
    <hr>
    <div class="quote-box" key='box'>
      <div class="quote-head" key='head'>Movie Quote</div>
        <div class="quote-body" key='quote'>
          <i class="fa fa-quote-left"></i>{{ quote.quote }}
        </div>
      <div class="quote-author" key='author'>
      	- {{ quote.author }}
      </div>
      <div key='button'>
        <button class="btn btn-success" @click='getQuote'>New quote</button>
      </div>
    </div>
  </div>
</template>

<script>
  
export default {
  data() {
    return {
      quote: {}
    }
  },
  methods: {
    getQuote() {
     this.$http.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
        {headers: {
          'X-Mashape-Key': 
          'yJWv7QAfhxmshI4rwB1eK1FIVPRyp1TDp7BjsnlQ8uzZ1gcYv0',
          'Accept': 'application/json'
        }}).then(response => {
          return response.json()
        })
        .then(response => {
          this.quote = response
        })

    }
  },
  created() {
    this.getQuote();
  }
}

</script>



<style scoped>

h2 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}
	
.quote-box {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  max-width: 600px;
  display: table;
  position: relative;
  margin: 60px auto;
  box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
  -webkit-box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
  -moz-box-shadow: 7px 10px 43px -12px rgba(0,0,0,0.75);
}

.quote-body {
  clear: both;
  text-align: center;
  font-weight: 400;
  font-size: 1.5em;
  padding: 20px;
  margin: 20px;
}

.quote-head {
  background-color: #718792;
  padding: 20px;
  text-align: left;
  color: #fff;
  font-size: 1.5em;
}

.quote-author {
  font-size: 1.2em;
  float: right;
  padding: 20px;
  margin-top: -30px;
}

.btn {
  border: none;
  border-radius: 0px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 300;
  margin: 40px 20px 20px 20px;
}

.btn-success {
  background-color: #02d143;
}

.btn-success:hover {
  background-color: #00b238;
}

i {
  font-size: 0.7em;
  margin-right: 0.6em;
}

</style>