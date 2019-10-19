<template>
    <div>
        <titlebar lef="深圳" mid="影院" :rig="require('../assets/sousuo.png')" class="head"></titlebar>
        <lunbo></lunbo>
        <div class="daoh">
            <div @scroll="roll">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                    <van-dropdown-item v-model="value1" :options="option2" />
                    <van-dropdown-item v-model="value1" :options="option3" />
                    <van-dropdown-item v-model="value1" :options="option4" />
                </van-dropdown-menu>              
            </div>
            <router-link to="" class="yylist" v-for="(item,i) of list" :key="i">
                <div class="left_title">
                    <span class="title">{{item.cName}}</span>
                    <span class="subtitle">{{item.loca}}</span>
                    <span class="bot_title">{{item.hall}}</span>
                </div>
                <div class="right_title">
                    <p>29.8元起</p>
                </div>
            </router-link>
        </div>
    </div>
    
</template>
<script>
import Header from '../components/cinema/Header.vue';
import lunbo from '../components/cinema/lunbo.vue'
export default {
    data() {
    return {
        list:[],
      value1: 0,
      option1: [
        { text: '品牌', value: 0 },
        { text: '全部', value: 1 },
        { text: '万达影城', value: 2 },
        { text: '万达影城', value: 3 }
      ],
      option2: [
        { text: '全城', value: 0 },
        { text: '宝安区', value: 1 },
        { text: '龙华区', value: 2 },
        { text: '南山区', value: 3 }
      ],option3: [
        { text: '距离近', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
        { text: '活动商品', value: 3 }
      ],option4: [
        { text: '筛选', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
        { text: '活动商品', value: 3 }
      ]
    }},
    created(){
        var url="yclist";
        var obj={cityId:0};
        this.axios.get(url,{params:obj})
        .then(res=>{
         this.list=res.data.data;
     });
    },
    methods:{
        roll(){
            
        }
    },
    components:{
        titlebar:Header,
        lunbo
    }
}
</script>
<style scoped>
    .head{
        z-index: 1;
    }
    .daoh{
        width: 100%;
        position:absolute;
        top:140px;
    }
    .yylist{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 5px
    }
    .left_title{
        display: flex;
        flex-direction: column;
        width: 70%;
        overflow: hidden;
        align-items: flex-start;
        color:#000;
    }
    .right_title{
        color:red;
    }
    .title{
        font-size: 20px;
    }
    .subtitle{
        font-size: 16px;
        color:rgb(184, 172, 12);
    }
    .bot_title{
        font-size: 12px;
        color:blueviolet;
    }
</style>