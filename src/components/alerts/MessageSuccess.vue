<template>
	<div class="message message-success" role="alert">
		<strong><i class='fa fa-check' aria-hidden='true'></i> Well done!</strong> You have successfully added
		<router-link to='/movies'><a class='alert-link'>{{ title }}</a></router-link>
	</div>
</template>

<script>

	export default {
		props: ['title'],
	}

</script>

<style scoped>
	
	.message {
  		padding: 0.75rem 1.25rem;
  		margin-bottom: 2rem;
  		color: #fff;
  		font-family: 'Lato', sans-serif;
		font-weight: 300;
	}

	.message-success {
		background-color: #009b3e;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

</style>