import Vue from 'vue';
import App from './App.vue';
import './assets/style/index.less';
//require('../assets/style/index.less');

new Vue({
	render: h => h(App)
}).$mount('#app');