<template>
    <div class='play'>
         <img src= '../img/icons/Jay1.jpg' class='bg'>
        <div class='header2'>
            <div class='arrow'  @click='goback()'>&#xe608;</div>
            <div class='songinf'>
                <h2>{{name[key]}}</h2>
            </div>
            <div class='more'>&#xe63a;</div>
        </div>
        <div class='singername'>一 {{author[key]}} 一</div>
        <div class='pic'>
            <img :src='photo[key]'>
        </div>
        <div class='key'>
            <div class='model'>&#xe638;</div>
            <div class='back' @click='previous()'>&#xe607;</div>
            <div class='pause' v-show='status2' @click='play'>
                <img src='../img/icons/pause.png'>
            </div>
            <div class='play' v-show='status1'  @click='pause'>
                 <img src='../img/icons/play.png'>
            </div>
            <div class='next' @click='next()'>&#xe606;</div>
            <div class='menu'>&#xe60a;</div>
        </div>
        <div class='func'>
            <div class='like'>&#xe613;</div>
            <div class='upload'>&#xe6d8;</div>
            <div class='share'>&#xe71d;</div>
            <div class='评论'>&#xe6c7;</div>
        </div>
        <audio  id='audioPlay' :src="file[key]"  controls="controls" autoplay='autoplay'></audio>

    </div> 
</template>

<script>
import eventBus from '@/common/js/bus.js'
export default {
    name:'play',
    data:()=>({
    status1:true,
    status2:false,
    music:'',
    name:[],
    author:[],
    file:[],
    photo:[],
    key:'',
}),
    created(){
        eventBus.$on('songinf', function(val) {
            this.key = val.key;
            this.music = val.song;
            for(var i =0;i<val.song.length;i++){
                this.name.push(val.song[i].name);
                this.author.push(val.song[i].author);
                this.file.push(val.song[i].file);
                this.photo.push(val.song[i].photo);
            }
    　      console.log(this.name)
        }.bind(this))
    },
    methods:{
        play(){
            var audio = document.querySelector('audio');
            audio.play();
            this.status1=!this.status1;
            this.status2=!this.status2;
        },
        pause(){
            var audio = document.querySelector('audio');
            audio.pause();
            this.status1=!this.status1;
            this.status2=!this.status2;
        },
        goback(){
        window.history.go(-1);
        },
        previous(){
            if(this.key>0){
                 this.key--;
            }
            console.log(this.key)
        },
        next(){
            if(this.key<this.music.length-1){
                this.key++;
            }
            console.log(this.key)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../common/css/public.css";
	@import "../common/css/iconfont.css";
    @import "../common/css/play.css";
</style>