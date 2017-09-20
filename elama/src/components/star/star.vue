<template>
  <div class="star" :class="starType">
    <span v-for="itemclass in itemClasses" :class="itemclass" class="star-item"></span>    
  </div>
</template>

<script>
export default {
	prop: {
		size: {
			type: Number
		},
		score: {
			type: Number
		}
	},
	computed: {
		starType: function(){
			return 'star-'+this.size;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.star{} 
</style>
