<template>
  <div class="rating">
      <div class="rating-top">
      	<div class="rating-total">全部{{ratingTotal}}</div>
      	<div class="rating-satis">满意{{ratingSatis}}</div>
      	<div class="rating-nosatis">不满意{{ratingNosatis}}</div>
      </div>
  </div>
</template>

<script>
const ERR_OK = 0;
export default {
	props: {
		seller: {
			type: Object
		}
	},
	data: function () {
    return {
      rating: [],
      ratingTotal: Number,
      ratingSatis: Number,
      ratingNosatis: Number
    };
   },
   created () {
    this.$http.get('/api/rating').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.rating = response.rating;
        console.log(this.rating);
      }
    });
    this.ratingTotal = this.rating.length;
    this.ratingSatis = 0;
    this.ratingNosatis = this.ratingTotal - this.ratingSatis;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
