<template>
	<div id="headText">
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
<style lang="less" scoped>
	@textColor: red;
	#headText{
		color: @textColor;
	}
</style>