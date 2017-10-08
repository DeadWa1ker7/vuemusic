<template>
  <div class="like">
    <div class='header1'>
        <div class='back' @click='goback()'>
          	<img src='../img/icons/left.png'>
        </div>
        <div class='title'>我喜欢</div>
        <div class='more'>
           <img src='../img/icons/sandian.png'>
        </div>
    </div>
	<swiper :options="swiperOption" ref="mySwiper">
	     <!-- Optional controls -->
    	<div class="swiper-pagination"  slot="pagination" ></div>
		<!-- slides -->
		<swiper-slide>
			<ul>
          <li v-for = '(val,key) in music' @click='send(key)'>
          <router-link to='/play'>
					<div class='basedet'>
						<h3>{{val.name}}</h3>
						<h4>{{val.author}}</h4>
					</div>
          </router-link>
					<div class='details'>
						&#xe63a;
					</div>
				</li>
			</ul>
		</swiper-slide>
		<swiper-slide>专辑</swiper-slide>
		<swiper-slide>歌单</swiper-slide>
		<swiper-slide>电台</swiper-slide>
		<swiper-slide>MV</swiper-slide>
 	</swiper>
	 <v-footer :getpar='music'></v-footer>
  </div>
</template>
<script>
import footer from '@/components/footer.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import eventBus from '@/common/js/bus.js'
 require('../common/css/swiper.min.css');
export default {
  name: 'like',
  data() {
      return {
        swiperOption: {
          notNextTick: true,
          direction : 'horizontal',
          // effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          // scrollbar:'.swiper-scrollbar',
        // mousewheelControl : true,
          observeParents:true,
        },
         music:'',
      } 
    },
	components: {
    swiper,
    swiperSlide,
	 'v-footer':footer,
  },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      window.onload=function(){
      var sp= ['单曲','专辑','歌单','电台','MV']
      var bullet = document.querySelectorAll('.swiper-pagination-bullet')
      for(let i=0; i<sp.length;i++)
      {
        bullet[i].innerHTML=sp[i]
      }
      }
    window.onresize=function()
      { 
        var bullet = document.querySelectorAll('.swiper-pagination-bullet')
        var sp= ['单曲','专辑','歌单','电台','MV']
        for(let i=0; i<sp.length;i++)
        {
          bullet[i].innerHTML=sp[i]
        }
      }
    },
    methods:{
      send(key){
        let music = this.music;
        eventBus.$emit('songinf', {song:music,key:key});
      },
      getallsong(){
        this.$http.get('/api/api',{emulateJSON: true})
        .then(function(res){
           this.music = res.body;
       }),function(err){
           console.log(err);
       }
      },
      goback(){
        window.history.go(-1);
      }
    },
    created(){
    this.getallsong();
  },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../common/css/public.css";
	@import "../common/css/iconfont.css";
  @import "../common/css/like.css";
</style>
