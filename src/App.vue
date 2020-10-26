<template>
	<div class="contentBody">
		<!-- <headNav></headNav> -->
		<l-menu></l-menu>
		<slimScroll></slimScroll>
		<HomeContent></HomeContent>
		<div id="test1">测试</div>
	</div>
</template>
<script lang="ts">
import '@/assets/style/index.less';
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
//import headNav from './components/head_nav.vue';
import l_menu from './components/l_menu.vue';
import HomeContent from './components/homeContent.vue';
import slimScroll from './components/slimScroll.vue';
@Component({
	components: {
		l_menu,
		HomeContent,
		slimScroll
	}
})
export default class App extends Vue {
	//data
	

	private mounted() :void {
		console.log('ok');
	}
	

}
</script>
<style>
	
</style>