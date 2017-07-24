import Vue from 'vue';
import VueFire from '../node_modules/vuefire'
import VueRouter from '../node_modules/vue-router';
import VueResource from 'vue-resource';

import { routes } from './routes';

import App from './App.vue';

Vue.use(VueFire);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

const router = new VueRouter({
	routes,
	mode: 'hash',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
	}
});

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


