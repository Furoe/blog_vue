<template>
	<div>
		<homeHeader user="vict"></homeHeader>
		<div id="test1">测试</div>
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
<style type="text/css">
	#test1{
		color: #555555;
	}
</style>