<template>
	<div>
		<homeHeader user="vict"></homeHeader>
	</div>
</template>
<script>
	import homeHeader from '@components/head.vue';
	export default {
		name: 'app',
		component: {
			homeHeader
		}
	}
</script>
<style lang="less" scoped>
	@appColor: red;
	#app {
		color: @appColor;
	}
</style>