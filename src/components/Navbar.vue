<template>
	<nav class="navbar navbar-toggleable-sm navbar-inverse bg-color">
		<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<router-link to='/' class="navbar-brand">TheWatcher</router-link>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="nav navbar-nav mr-auto">
				<router-link 
				tag='li' 
				to='/movies' 
				class='nav-item active' 
				data-toggle='tab'>
					<a class="nav-link">Home</a>
				</router-link>

				<router-link 
				tag='li' to='/new' 
				class='nav-item' 
				data-toggle='tab'>
					<a class="nav-link">Add Movie</a>
				</router-link>

				<router-link 
				tag='li' 
				to='/watched' 
				class='nav-item' 
				data-toggle='tab'>
					<a class="nav-link">Watched</a>
				</router-link>

			</ul>
		</div>
	</nav>
</template>

<style scoped>
	
ul {
	text-transform: uppercase;
	font-size: 0.8em;
	font-weight: 300;
}

.navbar {
	margin-bottom: 0;
}


.navbar-brand {
	font-family: 'Pacifico', cursive;
}

.navbar-nav {
	font-family: 'Lato', sans-serif
}

.bg-color {
	background-color: #1c313a;
	border-color: #718792;
}

</style>