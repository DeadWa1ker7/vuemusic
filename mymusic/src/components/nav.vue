<template>
    <div class='nav'>
        <div class='all li'>
            <span>&#xe638;</span>
            <div>全部歌曲</div>
            <p>{{allnum}}</p>
        </div>
        <div class='loadsong li'>
            <span>&#xe6d8;</span>
            <div>下载歌曲</div>
            <p>{{loadnum}}</p>
        </div>
        <div class='new li'>
            <span>&#xe62a;</span>
            <div>最近播放</div>
            <p>{{newnum}}</p>
        </div>
        <div class='like li'>
                <router-link to='/like'>
                <span>&#xe613;</span>
                <div>我喜欢</div>
                <p>{{likenum}}</p>
            </router-link>
        </div>
        <div class='loadmv li'>
        <span>&#xe618;</span>
            <div>下载MV</div>
            <p>{{mvnum}}</p>
        </div>
        <div class='brought li'>
            <span>&#xe64b;</span>
            <div>购买歌曲</div>
            <p>{{buynum}}</p>
        </div>		
  </div>
</template>

<script>
export default {
  name: 'nav',
   data:()=>({
       allnum:20,
       loadnum:10,
       newnum:13,
       likenum:9,
       mvnum:2,
       buynum:2

}),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

