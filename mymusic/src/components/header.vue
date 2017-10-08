<template>
    <div class='header'>
        <div class='list'>
            <div class='menu'>&#xe60a;</div>
            <router-link to='/'><div class='mine'>我的</div></router-link>
            <router-link to='/upload'><div class='music'>添加</div></router-link>
            <div class='finding'>删除</div>
            <div class='extend'>&#xe68a;</div> 
        </div>
        <div style ='clear:both'></div>
        <div class='search'>
            <input type='text' placeholder="搜索" class='inp'>
        </div>
    </div>
</template>

<script>
export default {
  name: 'nav',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

