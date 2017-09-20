<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="goods" class="{active: isActive}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="rating">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商户</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from './components/header/header';
const ERR_OK = 0;
export default {
  data () {
    return {
      isActive: true,
      seller: {}
    };
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
      }
    });
  },
  components: {'v-header': header}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.tab{display: flex; width: 100%; height: 0.8rem; line-height: 0.8rem;} 
.tab-item{flex: 1; text-align: center; border-bottom:1px solid rgba(7,17,27,0.1); }
.tab-item a{ font-size: 0.32rem; line-height: 0.8rem; display: block; }
.tab-item a.active{color: rgb(240,20,20);}
</style>
