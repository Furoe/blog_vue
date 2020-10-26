<template>
    <div class="content-col">
        <img :src="require('@/assets/images/avator.jpg')">
        <div class="name"></div>
        <div class="menuList"></div>
    </div>
</template>
<script lang="ts">
declare function require(img:String) :String;
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class l_menu extends Vue{

}
</script>
<style lang="less" scoped>
    .content-col{
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: beige;
    }
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-size: 100% 100%;
    }
</style>