<template>
  <div>
    <div class="db-tabbar">
      
      <router-link 
        tag="div"
        v-for="route in routes"
        :key = "route.title"
        :to="route.path"
        class="db-tabbar-item" 
      >
        <i :class="`icon iconfont icon-${route.name}-normal`" ></i>
        <p>{{route.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes'; 
export default {
  name:'Tabbar',
  data() {
    return {
      routes: routes.filter(route => route.isTabbar === true)
    }
  }
};
</script>

<style lang="scss" scoped>
.db-tabbar{
  border-top:1px solid #eee;
  height:90px;
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  & >div {
    flex:1;
    height: 90px;
    display: flex;
    flex-direction: column;
    color: #666;
    cursor: pointer;
    align-items: center;
    .iconfont{
      height: 46px !important; 
      margin-top:14px;
      width: 46px !important;
      font-size: 28px;
    }
    p{
      height: 24px;
      color: #666;
      font-size: 12px;
      line-height: 24px;
      margin: 0 auto;
    }
  }
  .router-link-exact-active{
    color:red;
  }
  .router-link-active{
    color:red;
  }
}
</style>
