<template>
	<div class="alert alert-success" role="alert">
		<strong><i class='fa fa-smile-o' aria-hidden='true'></i> Well done!</strong> You have successfully added
		<router-link to='/movies'><a class='alert-link'>{{ title }}</a></router-link>
	</div>
</template>

<script>
	
	export default {
		props: ['title'],
	}

</script>