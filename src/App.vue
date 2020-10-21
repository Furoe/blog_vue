<template>
	<div>
		<homeHeader user="vict"></homeHeader>
	</div>
</template>
<script>
	import homeHeader from '@/components/head.vue';
	export default {
		name: 'App',
		components: {
			homeHeader
		}
	}
</script>
<style lang="less" scoped>
	@appColor: red;
	homeHeader {
		color: @appColor;
	}
</style>