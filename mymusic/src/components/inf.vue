<template>
  <div class="inf">
	<div class='info'>
    <div class="timer">
		<img src="../img/icons/dengji.png" alt="">
		<span>0分钟</span>
	</div>
	<div class="avatar">
		<img src="../img/icons/11.jpg" alt="">
	</div>
	<div class="vip">
		<img src="../img/icons/vvip.png" alt="">
		<span>开通</span>
	</div>
	</div>
	<p class="username">一&nbsp;&nbsp;&nbsp;{{username}}&nbsp;&nbsp;&nbsp;一</p>
  </div>
  
</template>

<script>
export default {
  name: 'inf',
  data:()=>({username:'DeadWa1ker'})
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->