<template>
  <div class="mall">
    <mt-header fixed title="搜索" tag="div"></mt-header>
    <!-- navbar -->
    <div class="mall-body">
      <mt-navbar v-model="selected" tag="ul" class="mall-navbar">
        <mt-tab-item id="1">推荐分类</mt-tab-item>
        <mt-tab-item id="2">卧室</mt-tab-item>
        <mt-tab-item id="3">客厅</mt-tab-item>
        <mt-tab-item id="4">餐厅</mt-tab-item>
        <mt-tab-item id="5">书房</mt-tab-item>
        <mt-tab-item id="6">儿童房</mt-tab-item>
        <mt-tab-item id="7">户外阳光</mt-tab-item>
        <mt-tab-item id="8">办公家具</mt-tab-item>
        <mt-tab-item id="9">建材精品</mt-tab-item>
        <mt-tab-item id="10">家居家饰</mt-tab-item>
      </mt-navbar>
      <div class="mall-contain">
        <div>
          <mt-cell class="page-part" title="当前选中">{{selected}}</mt-cell>
        </div>
        <!-- tabcontainer -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell v-for="n in 10" :title="'内容 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mall',
  data() {
    return {
      selected: '1'
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.mint-navbar .mint-tab-item.is-selected{
  color: red;
  border-left: 3px solid red;
  border-bottom: none;
}
.mint-tab-item-label{
  line-height: 24px;
}
.mint-tab-item{
  padding: 14px 0;
}
.mall{
  height: 100%;
  width: 100%;
  .mall-body{
    margin-top: 40px;
    display: flex;
    font-size: 13px;
    color: #666;
    .mall-navbar{
      width: 90px;
      height: 691px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a{
        height: 52px !important;
        overflow: hidden;
      }
    }
    .mall-contain{
      overflow: auto;
    }
  }
  
}
</style>
