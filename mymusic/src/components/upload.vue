<template>

  <div class="upload">
  <v-header></v-header>
   <!--<form>-->
        <div class="inp_">
            <label>单曲名：</label>
            <input type="text" value="" placeholder="请输入歌曲名" v-model='users.name' class='songname'>
        </div>
        <div class="inp_">
            <label>主唱歌手：</label>
            <input type="text" value="" placeholder="请输入歌手名" v-model='users.author' class='singername'>
        </div>
        <div class="inp_">
            <label>歌曲文件：</label>
            <input type="file" name="file" id="flie" @change="onfilechange" >
        </div>

        <div class="inp_">
            <label>专辑封面：</label>
            <input type="file" name="photo" id="photo" @change="onphotochange" >
        </div>
        <input type='submit' class = 'submit' value='立即上传' @click='submit()'>
     <!--</form>-->
    </div>
</template>
<script>
import header from '@/components/header.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default {
    name: 'upload',
    components:{
         "v-header":header,
    },
     data(){
        return{
            users:{
            name:null,
            author:null,
            photo:null,
            file:null,
            }
        }
    },
     methods: {
    submit: function () {
        var formData = new FormData();
         for (var key in this.users) {   //读取data中所要上传的内容循环append到fordata中
        if (key) {
          formData.append(key, this.users[key])
        }
      }
      if(this.users.name==null||this.users.author==null){
          alert('请输入歌曲信息！')
      }else{
          this.$http.post('/api/api',formData,{emulateJSON: true},{
          header:{
              "Content-Type":"multipart/form-data"
          },
      }).then(function(){
          alert('上传成功！');
         window.location.href = 'http://127.0.0.1:8080'
      },function(res){
            console.log(res.status);
        })
      }

    },
     onphotochange: function (e) {  //获取到图片文件
        var files = e.target.files ||e.dataTransfer.files;
      if (!files.length)
        return;
      this.users.photo = files[0];
    },
    onfilechange: function (e) {  //获取到音频文件
        var files = e.target.files ||e.dataTransfer.files;
      if (!files.length)
        return;
      this.users.file = files[0];
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 @import "../common/css/public.css";
     @import "../common/css/iconfont.css";
    @import "../common/css/upload.css";
</style>
