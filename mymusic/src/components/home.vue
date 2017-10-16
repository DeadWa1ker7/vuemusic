<template>
  	<div class="home">
		<v-header></v-header>
		<v-inf></v-inf>
		<v-nav></v-nav>
		<v-radio></v-radio>
		<v-songlist></v-songlist>
  	</div>
</template>

<script>
import header from '@/components/header.vue'
import nav from '@/components/nav.vue'
import radio from '@/components/radio.vue'
import songlist from '@/components/songlist.vue'

import inf from '@/components/inf.vue'

export default {
  name: 'home',
  components:{
	  "v-header":header,
	 "v-nav":nav,
	 "v-radio":radio,
	 'v-songlist':songlist,
	 'v-inf':inf,
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 	@import "../common/css/public.css";
	@import "../common/css/iconfont.css";
    @import "../common/css/home.css";
</style>
