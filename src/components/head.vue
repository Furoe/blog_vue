<template>
	<div>
		header
		<span>color</span>
		<img :src="require('@/assets/images/avator.jpg')">
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