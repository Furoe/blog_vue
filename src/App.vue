<template>
	<div class="contentBody">
		<headNav></headNav>
		<homeHeader user="vict"></homeHeader>
		<div id="test1">测试</div>
	</div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import headNav from './components/head_nav.vue';
import homeHeader from './components/head.vue';
@Component({
	components: {
		headNav,
		homeHeader
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
	.contentBody{
		width: 100%;
		height: 100%;
	}
	#test1{
		color: #555555;
	}
</style>