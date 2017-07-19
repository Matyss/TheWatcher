import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
import Home from './components/Home.vue';
import Landing from './components/Landing.vue';


const New = resolve => {
	require.ensure(['./components/New.vue'], () => {
		resolve(require('./components/New.vue'));
	}, 'new');
}

const Watched = resolve => {
	require.ensure(['./components/Watched.vue'], () => {
		resolve(require('./components/Watched.vue'));
	}, 'watched');
}


export const routes = [
	{path: '/', components: {
		default: Landing
	}},
	{path: '/movies', name: 'home', components: {
		default: Home,
		'navbar': Navbar,
		'header': Header,
		'footer': Footer
	}},
	{path: '/new', components: {
		default: New,
		'navbar': Navbar,
		'header': Header,
		'footer': Footer
		
	}},
	{path: '/watched', components: {
		default: Watched,
		'navbar': Navbar,
		'header': Header,
		'footer': Footer

	}},
	{path: '*', redirect: { name: 'home' }}
]; 