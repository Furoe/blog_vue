<template>
    <div class="slimContent"></div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class slimScroll extends Vue {

}
</script>
<style lang="less" scoped>
    .slimContent{
        width: auto;
        height: 100%;
    }
</style>