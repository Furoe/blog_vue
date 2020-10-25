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
@Component({
	components: {
		headNav
	}
})
export default class App extends Vue {
	//data

	private mounted() :void {
		console.log('ok');
	}
	

}
</script>
<style lang="less">
	@color: #555555;
	#test1{
		color: @color;
	}
</style>