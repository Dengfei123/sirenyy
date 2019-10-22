<template>
    <div  class="lunbo">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item  v-for="(item,i) of list" :key="i">
                <router-link to="">
                    <img :src="'http://127.0.0.1:4000/'+item.img">
                </router-link>
            </van-swipe-item>
        </van-swipe>             
    </div>    
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        var url="carousel";
        this.axios.get(url)
        .then(res=>{
         this.list=res.data.data;
        });
    }
}
</script>
<style scoped>
  .lunbo{
      position: absolute;
      top:40px;
      width: 100%;
      height: 100px;
      overflow: hidden;
  }
  img{
      width: 100%;
      height: 100px;
  }
</style>