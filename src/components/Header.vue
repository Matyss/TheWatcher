<template>
	<div class='jumbotron'>
		<div class="container">
			<img class='logo img-responsive' src="../assets/logo.png">
			<h1>Welcome to TheWatcher</h1>
			<p>View the best hand-picked movies to watch</p>
			<router-link to='/new'><a class='btn btn-primary'>Add Movie</a></router-link>
		</div>
	</div>
</template>

<style scoped>

@media(max-width: 992px) {
	.logo {
		max-width: 25%;
	}
}
	
.jumbotron {
	background-color: #f5f5f6;
	font-family: 'Lato', sans-serif
}

.logo{
	float: right;
}

.btn-primary {
	background-color: #03a9f4;
	border: none;
	border-radius: 0px;
	padding: 10px 20px;
}

.btn-primary:hover {
	background-color: #0092Ca;
}
</style>