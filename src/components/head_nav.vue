<template>
    <div class="h_content">
        
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class headNav extends Vue{
    private msg: String = 'true';
    private mounted() :void {
        console.log(this.msg);
    }
}
</script>
<style lang="less">
    
</style>