<template>
	<div class="cartcontrol">
		<div class="cart-decrease" @click="decreaseCart" v-show="food.count">-</div>
		<div class="car-count" v-show="food.count">{{food.count}}</div>
		<div class="cart-add" @click="addCart()">+</div>
	</div>
</template>
<script>
import Vue from 'vue';
export default {
	props: {
		food: {
			type: Object
		}
	},
	methods: {
		addCart (event) {
			if (!this.food.count) {
				Vue.set(this.food, 'count', 1);
			} else {
				this.food.count += 1;
			}
		},
		decreaseCart (event) {
			if (!this.food.count) {
				this.food.count = 0;
			} else {
				this.food.count -= 1;
			}
		}
	}
};
</script>
<style>
.cartcontrol{ font-size: 0; position: absolute; bottom: 0.3rem; right: 0.1rem; }
.cartcontrol .cart-decrease{display: inline-block; padding: 0.1rem; border: 2px solid #f00; border-radius: 100%; width: 0.2rem; height: 0.2rem; color: #f00; font-size: 0.4rem; text-align: center; line-height: 0.2rem;}
.cartcontrol .car-count{display: inline-block; font-size: 0.26rem;color: rgb(147,153,159); width: 0.25rem; padding: 0 0.2rem; line-height: 0.48rem;}
.cartcontrol .cart-add{display: inline-block; padding: 6px; border: 2px solid #f00; border-radius: 100%; width: 0.2rem; height: 0.2rem; color: #f00; font-size: 0.4rem; line-height: 0.2rem;}
</style>
