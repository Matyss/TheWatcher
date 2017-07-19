<template>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <div class="navbar-header">
	    	<router-link class='navbar-brand' to='/'>TheWatcher</router-link>
	    </div>
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	    	<ul class="nav navbar-nav">
	      		<router-link tag='li' to='/movies' activeClass='active'><a>Home Page</a></router-link>
	      		<router-link tag='li' to='/new' activeClass='active'><a>Add Movie</a></router-link>
	      		<router-link tag='li' to='/watched' activeClass='active'><a>Watched</a></router-link>
	    	</ul>
	    </div>
	  </div>
	</nav>
</template>

<style scoped>
	
	ul {
		text-transform: uppercase;
		font-size: 0.9em;
	}

</style>