<template>
  <div class="header">
    <div class="content-wrapper">
    	<div class="avatar">
    		<img :src="seller.avatar" alt="商家头像" v-on:click="ifDetail(true)">
    	</div>
    	<div class="content">
    		<div class="title">
    			<span class="brand"></span>
    			<span class="name">{{seller.name}}</span>
    		</div>
    		<div class="description">
    			{{seller.description}}/{{seller.deliveryTime}}分钟
    		</div>
    		<div v-if="seller.supports" class="supports">
    			<span class="icon" :class="classmap[seller.supports[2].type]"></span>
    			<span class="text">{{seller.supports[2].description}}</span>
    		</div>
    	</div>
    </div>   
    <div class="bulletin-wrapper">
    	<div class="bulletin">
    		<span class="bulletin-title">公告</span>
    		<span class="bulletin-text">{{seller.bulletin}}</span>
    	</div>
    </div> 
    <div class="backgroud">
    	<img :src="seller.avatar" >
    </div>
    <transition name="fade">
    <div v-show="datailShow"  class="detail">
    	<div class="dataile-wrapper clearfix">
    		<div class="detail-main">
    			<span class="name">{{seller.name}}</span>
    		</div>
    	</div>
    	<div class="detail-close" @click="ifDetail(false)">
    		<span class="close-ico">X</span>
    	</div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
	props: {
		seller: {
			type: Object
		}
	},
	data: function () {
		return {
			datailShow: false
		};
	},
	methods: {
		ifDetail: function (f) {
			this.datailShow = f;
			console.log(f);
		}
	},
	created: function () {
		this.classmap = ['description', 'discount', 'guarantee', 'special'];
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.clearfix{display: inline-block; }
.clearfix:after{ display: block; content: "."; height: 0; line-height: 0; clear: both; visibility: hidden; }
.backgroud{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; filter: blur(10px); overflow: hidden;}
.backgroud img{width: 100%; height: 100%; }
.header{ position: relative; background: rgba(0,0,0,0.5);font-family:"微软雅黑" }
.content-wrapper{padding: 0.3rem 0.4rem; font-size: 0;}
.avatar{ display: inline-block; width: 1.3rem; vertical-align: top;}
.avatar img{width: 1.3rem; height: 1.3rem; }
.header .content{display: inline-block; margin-left: 8px;color: #fff;  font-size: 0.28rem;}
.title{ }
.title .brand{ width: 0.6rem; height: 0.36rem;  display: inline-block; 
	background: url('brand@2x.png'); background-size: 0.6rem 0.36rem;}
.title .name{font-size: 0.32rem; font-weight: bold; vertical-align: top;}
.description,.supports{ line-height: 200%; }
.supports .icon{width: 0.24rem; height: 0.24rem;  display: inline-block; 
	 background-size: 0.24rem 0.24rem; vertical-align: middle;}
.supports .description{background-image: url('decrease_1@2x.png');}
.supports .discount{background-image: url('discount_1@2x.png');}
.supports .guarantee{background-image: url('guarantee_1@2x.png');}
.supports .special{background-image: url('special_1@2x.png');}
.supports .text{ font-size: 0.26rem;}
.bulletin-wrapper{background: rgba(0,0,0,0.5);font-size: 0.26rem;}
.bulletin{white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: 10px; color: #fff;}
.bulletin-title{ background: #fff; display: inline-block; border-radius: 5px; padding: 5px; color: #000; }
.bulletin-text{ color: #fff;}
.detail{ position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100; overflow: auto; background: rgba(7,17,27,0.8); }
.dataile-wrapper{min-height: 100%; width: 100%; }
.detail-main{ margin-top: 1.2rem; padding-bottom:  1.2rem;}
.detail-main .name{ color: #fff; text-align: center; line-height: 60px; display: block; width: 100%; font-size: 18px;}
.detail-close{ position: relative; width: 0.64rem; height: 0.64rem; margin: -1.2rem auto 0 auto; clear: both; font-size: 0.6rem; font-style: normal; color: #fff; }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
