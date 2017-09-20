<template>
	<div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo" @click="ifshow">
            <i class="ico-shopping_cart"></i>
          </div>
        </div>
        <div class="price">{{totalPrice}}元</div>
        <div class="desc">另需配送费{{deliveryPrice}}元</div>
        <div class="pay" v-bind:class="{'gopay':gopay}">{{payDesc}}</div>
      </div>

       <div class="shop-content" v-show="show">
       		<div class="shop-head">
       			
       		</div>
			<ul>
				<li v-for="food in selectFoods" class="shop-list">
					<p class="name">{{food.name}}</p>
					<cartcontrol :food="food"></cartcontrol>
				</li>
			</ul>
	   </div>
	</div>
	
</template>
<script>
import cartcontrol from './../cartcontrol/cartcontrol';
export default {
	props: {
		selectFoods: {
			type: Array,
			default: function () {
				return [{
					price: 0,
					count: 0
				}];
			}
		},
		deliveryPrice: {
			type: Number
		},
		minPrice: {
			type: Number
		}
	},
	data: function () {
		return {
			show: true,
			gopay: false
		};
	},
	methods: {
		ifshow () {
			if (!this.totalCount) {
				return;
			}
			this.show = !this.show;
			console.log(this.show);
		}
	},
	components: {
		cartcontrol
	},
	computed: {
		totalPrice () {
			let total = 0;
			this.selectFoods.forEach((food) => {
				total += food.price * food.count;
			});
			return total;
		},
		totalCount () {
			let count = 0;
			this.selectFoods.forEach((food) => {
				count += food.count;
				console.log(food.count);
			});
			return count;
		},
		payDesc () {
			if (this.totalPrice === 0) {
				this.gopay = false;
				return this.minPrice + '元起送';
			} else if (this.totalPrice < this.minPrice) {
				this.gopay = false;
				let diff = this.minPrice - this.totalPrice;
				return '还差' + diff + '元起送';
			} else {
				this.gopay = true;
				return '去结算';
			}
		},
		listshow () {
			if (!this.totalCount) {
				this.show = true;
				return false;
			}
			let flod = !this.show;
			console.log(this.show + 'listshow');
			return flod;
		}
	}
};
</script>
<style>
.shopcart{ position: absolute; bottom: -0.92rem; left: 0;width: 100%; height: 0.92rem; }
.ico-shopping_cart{ width: 0.8rem; height: -0.92rem; background: #f00; display: inline-block; }
.shopcart .content{  display: flex;font-size: 0.24rem;  background: rgba(0,0,0,0.2);height: -0.92rem; }
.shopcart .content .content-left{ flex:0 0 44px; font-size: 0.24rem}
.shopcart .content .price{flex:0 0 0.6rem;  font-size:0.24rem; line-height: 0.92rem;}
.shopcart .content .desc{flex:1;line-height: 0.92rem; text-indent: 1em; border-left: 1px solid rgba(255,255,255,0.2);}
.shopcart .content .pay{flex:0 0 2rem; background: rgba(255,255,255,0.4); text-align: center; font-size:0.24rem; line-height: 0.92rem;}
.shopcart .content .gopay{background: rgba(28,169,255,0.4); }
.shopcart .content .full_pay{ background: rgb(0,160,200); }
.shop-content{ position: absolute; background: #fff; bottom: 0.92rem; width: 100%;}
.shop-content .shop-list{ width: 100%; height: 1rem; position: relative;padding: 0 0.4rem; box-sizing: border-box; }
.shop-content .shop-list .name{ line-height: 1rem;font-size: 0.24rem; }
.shop-content .shop-list .cartcontrol{bottom: 0.16rem;}
</style>
