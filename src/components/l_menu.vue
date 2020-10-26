<template>
    <div class="content-col">
        <div class="navBar-header">
            <div class="profile-block">
                <a id="avator" href="/" target="_blank">
                    <img :src="require('@/assets/images/avator.jpg')">
                </a>
                <h2 id="name">{{auhtor}}</h2>
            </div> 
        </div>
        <div class="menuList">
            <ul class="nav">
                <li class="menu-item"></li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
declare function require(img:String) :String;
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class l_menu extends Vue{
    private auhtor:String = 'furo yang';
}
</script>
<style lang="less" scoped>
    .content-col{
        width: 300px;
        height: 100%;
        background-color: beige;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
    }
    .profile-block{
        padding: 20px 15px 10px;
        text-align: center;
    }
    #name{
        font-size: 18px;
        margin-top: 10px;
    }
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-size: 100% 100%;
    }
</style>