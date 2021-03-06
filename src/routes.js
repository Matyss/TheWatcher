import Navbar from './components/shared/Navbar.vue';
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

import Landing from './components/Landing.vue';
import Home from './components/Home.vue';
import New from './components/New.vue';
import Watched from './components/Watched.vue';
import Quote from './components/Quote.vue';

// Below setup is not working on AWS S3

// const New = resolve => {
// 	require.ensure(['./components/New.vue'], () => {
// 		resolve(require('./components/New.vue'));
// 	}, 'new');
// }

// const Watched = resolve => {
// 	require.ensure(['./components/Watched.vue'], () => {
// 		resolve(require('./components/Watched.vue'));
// 	}, 'watched');
// }

// const Quote = resolve => {
// 	require.ensure(['./components/Quote.vue'], () => {
// 		resolve(require('./components/Quote.vue'));
// 	}, 'quote');
// }

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
	{path: '/quote', components: {
		default: Quote,
		'navbar': Navbar,
		'header': Header,
		'footer': Footer

	}},
	{path: '*', redirect: { name: 'home' }}
]; 