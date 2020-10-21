<template>
	<div id="textColor">
		header
		<span>color</span>
		<img :src="avator">
		{{this.message}}-{{this.user}}
	</div>
</template>
<script>
	
	export default {
		name: 'homeHeader',
		data(){
			return {
				avator: require("@/assets/images/avator.jpg"),
				message: 'hello world'
			}
		},
		props: {
			user: String
		}
	}
</script>
<style scoped lang="less">
	@import '../assets/style/index.less';
</style>