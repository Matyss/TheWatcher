<template>
	<div class='jumbotron'>
		<div class="container">
			<img class='logo img-responsive' src="../../assets/logo.png" alt='the_watcher_telescope_logo'>
			<h1 class='display-3'>Welcome to TheWatcher</h1>
			<h2>Manage your wishlist and never miss another great movie.</h2>
			<router-link to='/new' tag='span' ><a class='btn btn-info'>Add Movie</a></router-link>
		</div>
	</div>
</template>

<style scoped>

@media(max-width: 992px) {
	.logo {
		max-width: 25%;
	}
}

@media(max-width: 768px) {
	h1 {
		font-size: 2.5em;
	}
	h2 {
		font-size: 1.5em;
	}
}

@media(max-width: 576px) {
	h1 {
		font-size: 1.8em;
	}
	h2 {
		font-size: 1.2em;
	}
}
	
.jumbotron {
	background-color: #f5f5f6;
	font-family: 'Lato', sans-serif;
	margin-bottom: 80px;
}

h1 {
	font-weight: 400;
}

h2 {
	font-weight: 300;
}

.logo{
	float: right;
}

.btn {
	color: #fff;
	background-color: #03a9f4;
	border: none;
	border-radius: 0px;
	padding: 10px 20px;
	margin-top: 20px;
	font-weight: 300;
}

.btn-info:hover {
	background-color: #0092Ca;
}
</style>