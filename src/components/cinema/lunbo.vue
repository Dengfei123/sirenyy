<template>
    <div  class="lunbo">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><router-link to=""><img src="../../assets/1.png"></router-link></van-swipe-item>
            <van-swipe-item><router-link to=""><img src="../../assets/2.png"></router-link></van-swipe-item>
            <van-swipe-item><router-link to=""><img src="../../assets/3.png"></router-link></van-swipe-item>
            <van-swipe-item><router-link to=""><img src="../../assets/4.png"></router-link></van-swipe-item>
        </van-swipe>             
    </div>    
</template>
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