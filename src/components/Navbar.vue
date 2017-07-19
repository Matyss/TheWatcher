<template>
	<nav class="navbar navbar-default navbar-static-top">
	  <div class="container-fluid">
	    <div class="navbar-header">
		    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      	</button>
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
	font-size: 0.8em;
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

.navbar-default {
background-color: #1c313a;
border-color: #718792;
}
.navbar-default .navbar-brand {
  color: #ffffff;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #ffffff;
}
.navbar-default .navbar-text {
  color: #ffffff;
}
.navbar-default .navbar-nav > li > a {
  color: #ffffff;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #ffffff;
}
.navbar-default .navbar-nav > li > .dropdown-menu {
  background-color: #1c313a;
}
.navbar-default .navbar-nav > li > .dropdown-menu > li > a {
  color: #ffffff;
}
.navbar-default .navbar-nav > li > .dropdown-menu > li > a:hover,
.navbar-default .navbar-nav > li > .dropdown-menu > li > a:focus {
  color: #ffffff;
  background-color: #718792;
}
.navbar-default .navbar-nav > li > .dropdown-menu > li.divider {
  background-color: #718792;
}
.navbar-default .navbar-nav .open .dropdown-menu > .active > a,
.navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
.navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
  color: #ffffff;
  background-color: #718792;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #ffffff;
  background-color: #718792;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #ffffff;
  background-color: #718792;
}
.navbar-default .navbar-toggle {
  border-color: #718792;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #718792;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #ffffff;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #ffffff;
}
.navbar-default .navbar-link {
  color: #ffffff;
}
.navbar-default .navbar-link:hover {
  color: #ffffff;
}

@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #ffffff;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #ffffff;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #ffffff;
    background-color: #718792;
  }
}

</style>