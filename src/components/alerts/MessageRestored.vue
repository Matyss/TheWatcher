<template>
	<div class="message message-info" role="alert">
		<strong><i class='fa fa-info' aria-hidden='true'></i> Info</strong> Movie was successfully restored to your <router-link to='/movies'><a class='alert-link'>WISHLIST</a></router-link>.
	</div>
</template>

<style scoped>
	
	.message {
  		padding: 0.75rem 1.25rem;
  		margin-bottom: 2rem;
  		color: #fff;
  		font-family: 'Lato', sans-serif;
		font-weight: 300;
	}

	.message-info {
		background-color: #03a9f4;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

</style>