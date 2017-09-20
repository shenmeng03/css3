<template>
  <div class="seller">
    <div class="seller-content">
    	<div class="overseller">
    		<h1 class="title">{{seller.name}}</h1>
    		<p class="sellCount">月销售{{seller.sellCount}}单</p>    		
    	</div>
    	<div class="seller-message">
    		<p>起送价<br><span>{{seller.minPrice}}</span>元</p>
    		<p>商家配送<br><span>{{seller.deliveryPrice}}</span>元</p>
    		<p>平均配送时间<br><span>{{seller.deliveryTime}}</span>分钟</p>
    		<div class="clearfix"></div>
    	</div>
    </div> 
    <div class="seller-content">
    	<h2 class="title">公告与活动</h2>
    	<p class="seller-bulletin">{{seller.bulletin}}</p>
    </div>   
  </div>
</template>

<script>
export default {
	props: {
		seller: {
			type: Object
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.seller{background: #f3f5f7;}
.seller-content{ background: #fff; padding: 0.36rem; margin-bottom: 0.1rem; border-bottom: 2px solid #e6e7e8;}
.overseller{ padding-bottom: 0.36rem;  border-bottom: 1px solid rgba(7,17,27,0.1); }
.title{ font-size: 0.28rem; color: rgb(7,17,27); line-height: 0.28rem; }
.sellCount{ font-size: 0.2rem; color: rgb(77,85,93); line-height: 0.36rem; }
.seller-message{ padding-top: 0.36rem;}
.seller-message p:first-child{border: none;}
.seller-message p{ float: left;border-left: 1px solid rgba(7,17,27,0.1); text-align: center; width: 33%;font-size: 0.2rem; color: rgb(77,85,93); }
.seller-message p span{ font-size: 0.48rem; font-weight: 200; }
.title-h2{line-height: 0.36rem;}
.seller-bulletin{ font-size: 0.28rem; color: #f00; line-height: 180%; }
</style>
