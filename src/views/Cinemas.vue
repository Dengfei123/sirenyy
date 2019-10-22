<template>
    <div>
        <div class="header_style">
            <van-dropdown-menu class="sel_style">
                <van-dropdown-item v-model="value0" :options="option0" />
            </van-dropdown-menu>
            <span>影院</span>
            <img src="../assets/sousuo.png" class="hright">
        </div>
        <lunbo></lunbo>
        <div class="daoh">
            <div>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                    <van-dropdown-item v-model="value1" :options="option2" />
                    <van-dropdown-item v-model="value1" :options="option3" />
                    <van-dropdown-item v-model="value1" :options="option4" />
                </van-dropdown-menu>              
            </div>
            <router-link to="" class="yylist" v-for="(item,i) of list" :key="i">
                <div class="left_title">
                    <span class="title">{{item.ename}}</span>
                    <span class="subtitle">{{item.site}}</span>
                    <div class="t1">
                        <span class="sp7">惠</span>
                        <span class="sp8">退</span>
                        <span class="sp9">改签</span>
                        <span class="sp10">小吃</span>
                        <span class="sp11">折扣卡</span>
                        <span class="sp12">CGS中国巨幕厅</span>
                        <span class="sp13">杜比全景声厅</span>
                    </div>
                </div>
                <div class="right_title">
                    <p>29.8元起</p>
                    <p>1.1km</p>
                </div>
            </router-link>
        </div>
    </div>
    
</template>
<script>
//import Header from '../components/cinema/Header.vue';
import lunbo from '../components/cinema/lunbo.vue'
export default {
    data() {
    return {
        list:[],
        value0:"深圳",
        option0:[],
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
        this.getcity();
        this.getyc();    
    },
    methods:{
       getcity(){
           this.axios.get("citylist")
            .then(res=>{
                var res=res.data.data;
                var did;
                for(var i=0;i<res.length;i++){
                    var obj={};
                    obj.text=res[i].dname;
                    obj.value=res[i].dname;
                   this.option0.push(obj);
                }  
            })
       },
       getyc(){
           var dname=this.value0;
               console.log(dname)
                this.axios.get("yclist",{params:{dname:dname}})
                    .then(res=>{
                        this.list=res.data.data
                })
       }     
    },
    components:{
        lunbo
    },
    watch:{
        value0(){
            this.getyc();
        }
    }
}
</script>
<style>
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
        z-index: 2;
        border:1px solid #fff;
    }
    .sel_style{
        background-color:#f63939 !important;
        height: 40px !important;
    }
   .header_style  .van-ellipsis {
    
    color: #fff;
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
        font-size: 12px;
        color:rgb(70, 54, 54);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
.t1 span {
  font-size: 8px;
  height: 15px;
  display: inline-block;
  text-align: center;
  line-height: 16px;
  border-radius: 3px;
}
.sp7 {
  width: 15px;
  margin-left: 15px;
  background: #d56615ed;
  color: #f2f3f5bd;
}
.sp8 {
  margin-left: 5px;
  width: 15px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.sp9 {
  margin-left: 5px;
  width: 30px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.sp10 {
  margin-left: 5px;
  width: 30px;
  background: #ffffff;
  border-radius: 3px;
  color: #d56615ed;
  border: 0.5px solid #d566155c;
}
.sp11 {
  margin-left: 5px;
  width: 45px;
  background: #ffffff;
  border-radius: 3px;
  color: #d56615ed;
  border: 0.5px solid #d566155c;
}
.sp12 {
  margin-left: 5px;
  width: 95px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
.sp13 {
  margin-left: 5px;
  width: 75px;
  background: #ffffff;
  border-radius: 3px;
  color: #22e1f47a;
  border: 0.5px solid #22e1f47a;
}
</style>