<template>
    <div class="h_content">
        <img :src="require('@/assets/images/avator.jpg')">
    </div>
</template>
<script lang="ts">
declare function require(img: String) :String;
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class headNav extends Vue{
    private msg: String = 'true';
    private mounted() :void {
        console.log(this.msg);
    }
}
</script>
<style lang="less" scoped>
    #_content{
        width: 100%;
        height: 50px;
        color: bisque;
    }
    img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
</style>