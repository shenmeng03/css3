<template>
  <div class="goods">
  	<div class="menu-wrapper">
        <ul>
        	<li v-for="item in goods" class="menu-item">
        		<span class="text">
        			{{item.name}}
        		</span>
        	</li>
        </ul>
  	</div>
  	<div class="foods-wrapper">
  	   <ul>
          <li v-for="item in goods" class="food-list">
            <h1 class="titile">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item">
                <div class="icon">
                    <img :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">{{food.price}}元</span>
                    <span class="old" v-show="food.oldPrice">{{food.oldPrice}}元</span>
                  </div>
                </div>
                <cartcontrol :food="food"></cartcontrol>
              </li>
            </ul>
          </li>
        </ul>
  	</div>
    <shopcart :selectFoods="selectFoods" :minPrice="seller.minPrice"
    :deliveryPrice="seller.deliveryPrice"></shopcart>
  </div> 
</template>

<script>
import shopcart from './../shopcart/shopcart';
import cartcontrol from './../cartcontrol/cartcontrol';
const ERR_OK = 0;
export default {
	props: {
		seller: {
			type: Object
		}
	},
  data: function () {
    return {
      goods: []
    };
  },
	created () {
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
      }
    });
  },
  components: {
    shopcart,
    cartcontrol
  },
  computed: {
    selectFoods () {
      let foods = [];
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food);
            }
        });
      });
      return foods;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.goods{ display: flex; position: absolute; top :3.96rem;bottom: 0.92rem; width: 100%; }
.menu-wrapper{flex: 0 0 1.6rem;	width: 1.6rem;	background: #f3f5f7; overflow-y: scroll;}
.foods-wrapper{
	flex: 1; 
  overflow-y: scroll;
}
.menu-item{display: table; height: 1rem; line-height: 0.26rem; }
.menu-item .text{font-size: 0.24rem; width: 1rem; vertical-align: middle; text-align: center; padding: 0 0.24rem; display: table-cell; border-bottom: 1px solid #ddd; }
.food-list .titile{ padding-left: 0.28rem; height: 0.52rem; line-height: 0.52rem; font-size: 0.24rem; color: rgb(147,153,159); background: #f3f5f7;  border-right: 1px solid #ddd;}
.food-item{ padding-bottom: 0.2rem; display: flex; position: relative;}
.food-item .icon{flex:0 0 1.2rem; margin-right: 0.2rem;} 
.food-item .icon img{width: 1.2rem;}
.food-item .content{flex: 1;}
.food-item .content .price{ font-size: 0;}
.food-item .content .name{margin: 0.05rem 0 0.16rem 0; line-height: 0.28rem; height: 0.28rem; font-size: 0.24rem; color: rgb(7,17,27);}
.food-item .content .desc,.food-item .content .extra{ margin-bottom: 8px; line-height: 0.2rem;font-size: 0.24rem; color: rgb(147,153,159); }
.food-item .content .now{font-size: 0.24rem;; color: #f00;}
.food-item .content .old{font-size: 0.22rem;; color: rgb(147,153,159); text-decoration: line-through;}
</style>
