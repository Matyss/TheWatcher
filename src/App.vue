<template>
	<div>
		<router-view name='navbar'></router-view>
		<router-view name='header'></router-view>
		<transition name='slide' mode='out-in'>	
			<router-view></router-view>
		</transition>
		<router-view name='footer'></router-view>
	</div>
</template>

<script>

import Navbar from './components/shared/Navbar.vue';
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

export default {
	data() {
		return {
			showModal: false
		}
	},
	components: {
		appNavbar: Navbar,
		appHeader: Header,
		appFooter: Footer
	}
}

</script>


<style scoped>

.slide-enter {
	opacity: 0;
	transform: translateX(0);
}
.slide-enter-active {
	animation: slide-in 0.7s ease forwards;
	transition:  opacity 0.7s ease;
}

.slide-leave {
	opacity: 1;
	transform: translateX(0);
}

.slide-leave-active {
	transition:  opacity 0.7s cubic-bezier(1.0, 0.5, 0.8, 1.0);;
  	opacity: 0;
  	animation: slide-out 0.7s cubic-bezier(1.0, 0.5, 0.8, 1.0);;
}

@keyframes slide-in {
	0% {
		transform:  translateX(-60px);
	}
	100% {
		transform: translateX(0);
	}
}

@keyframes slide-out {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-60px);
	}
}


.flex-wrap {
	display: flex;
	flex-wrap: wrap;
}

.row {
	margin: auto;
}

</style>
