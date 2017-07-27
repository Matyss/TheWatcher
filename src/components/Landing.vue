<template>
	<div>
		<div id='landing-header'>
			<h1>Welcome to TheWatcher!</h1>
			<router-link 
				to='/movies' 
				tag='button' 
				class='btn btn-success btn-lg my-btn'>
				<a class='my-anchor'>Create wishlist</a></router-link>
		</div>
		<ul class="slideshow">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>



<style scoped>

 h1 {
 	font-family: 'Pacifico', sans-serif;
 	font-weight: 400;
 }

 ul {
 	background-color: #000;
 }

.my-anchor {
	text-decoration: none;
	color: #fff;
}

.my-anchor:hover {
	text-decoration: none;
	color: #fff;
}

.my-btn {
	background-color: #02d143;
	font-family: 'Lato', sans-serif;
	border: none;
	border-radius: 0px;
	padding: 8px 16px;
	border: none;
	text-transform: uppercase;
	padding: 15px 25px;
	margin-top: 20px;
	font-weight: 300;
	cursor: pointer;
}

.my-btn:hover {
	background-color: #00b238;
}

button:focus {
	outline: none;
}

#landing-header {
	z-index: 1;
	position: relative;
	text-align: center;
	padding-top: 40vh;
}

#landing-header h1 {
	color: #fff;
	font-size: 4em;
	text-shadow: 2px 2px 10px black;
}

.slideshow {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 0;
	list-style: none;
	margin: 0;
	padding: 0;
}

.slideshow li {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	opacity: 0;
	z-index: 0;
	animation: imgAnim 30s linear infinite; 
}

.slideshow li:nth-child(1) { 
  background-image: url('../assets/leo.jpg');
}
.slideshow li:nth-child(2) { 
  background-image: url('../assets/django.jpg');
  animation-delay: 6s; 
}
.slideshow li:nth-child(3) { 
  background-image: url('../assets/joker.jpg');
  animation-delay: 12s; 
}
.slideshow li:nth-child(4) { 
  background-image: url('../assets/rogueOne.jpg');
  animation-delay: 18s; 
}
.slideshow li:nth-child(5) { 
  background-image: url('../assets/francis.jpg');
  animation-delay: 24s; 
}

@keyframes imgAnim { 
  0% { 
    opacity: 0; 
    animation-timing-function: ease-in;
  }
  10% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
  20% {
    opacity: 1
  }
  30% {
    opacity: 0
  }
}

.no-cssanimations .slideshow li {
    opacity: 1;
}

	
</style>