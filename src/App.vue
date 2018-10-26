<template>
  <div>
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>

</style>
