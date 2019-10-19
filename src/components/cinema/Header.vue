<template>
    <div class="header_style">
        <span class="hleft">{{lef}}</span>
        <span>{{mid}}</span>
        <img :src="rig" class="hright">
    </div>
</template>
<script>
export default {
    props:{
        lef:{default:""},
        mid:{default:""},
        rig:{default:""}
    }
}
</script>
<style scoped>
    .header_style{
        position: fixed;
        width: 100%;
        height: 40px;
        display: flex;
        background: #f63939;
        font-size:20px;
        color:#fff;
        justify-content: space-between;
        align-items: center;
        clear: both;
    }
    .hleft{
        margin-left: 10px;
        font-size: 16px;
    }
    .hright{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
    
</style>