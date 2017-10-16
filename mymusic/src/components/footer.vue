<template>
  <div class="footer">
	 <div class='pic'>
	 	 <img :src="photo[0]" alt="">
		   <div class='songinf'>
	 	<h1 class='songname'>{{name[0]}}</h1>
		<h2 class='singername'>{{author[0]}}</h2>
	 </div>		
	 </div>
	 <div class='pause' @click='sendone()'>
	 	<router-link to='/play'>
	 		<img src="../img/icons/pause.png" alt="">
		</router-link>
		<span>&#xe60a;</span>	
	 </div>
  </div>
</template>

<script>
import eventBus from '@/common/js/bus.js'
export default {
  name: 'footer',
	props:['getpar'],
  data:()=>({
		music:'',
		name:[],
    author:[],
    file:[],
    photo:[],
  }),
	watch:{
		getpar(value){
			this.music=value;
			for(var i =0;i<value.length;i++){
					this.name.push(value[i].name);
					this.author.push(value[i].author);
					this.file.push(value[i].file);
					this.photo.push(value[i].photo);
			}
		}
	},
	methods:{
		 sendone(){
        let music = this.music;
        eventBus.$emit('songinf', {song:music,key:0});
				console.log(music)
      },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

