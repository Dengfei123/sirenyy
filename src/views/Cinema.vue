<template>
    <div>
        <div class="head">
            <div class="fanhui">
                <router-link to="" style="color:#fff;">&lt;</router-link>
            </div>
            <div class="yyname">
                <span>太平洋影城</span>
            </div>
            <div class="right_img">
                <router-link to=""><img src="../assets/sousuo.png"></router-link>
                <router-link to=""><img src="../assets/sousuo.png"></router-link>
            </div>
        </div>
        <div class="zhuti">
            <div>
                <router-link to="">
                    <div>
                        <h5>太平洋影城(深圳同泰时代广场店)</h5>
                        <p>宝安区福永街道同泰时代广场4层</p>
                    </div>
                    <span>&gt;</span>
                </router-link>
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h4>观影套餐</h4>
                        <p>小吃、周边13.75元起</p>
                    </div>
                    <img src="" alt="">
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .head{
        width:100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        top:0;
        left:0;
        background-color: #f63939;
        
    }
    .fanhui{
        width: 20%;
        text-align: left;
        margin-left: 10px;
        font-size:25px; 
    }
    .yyname{
        width:60%;
        color:#fff;
        font-size:22px
    }
    .right_img{
        width:20%;
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        align-items: center;
    }
    .right_img img{
        width: 25px;
    }
    .zhuti{
        margin-top:40px; 
    }
</style>