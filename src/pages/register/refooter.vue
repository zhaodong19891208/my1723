<template>
   <div id="refooter">
       <ul>
         <li>
         	<i class="icon iconfont">&#xe613;</i>
         	<span>用户</span>
         </li>
         <li>
         	  <i class="icon iconfont">&#xe608;</i>
         	<span>购物车</span>
         </li>
         <li>
         	<button>定制框架</button>
         </li>
         <li>
         <button style="background: deepskyblue;color: white;">定制套镜</button>
         </li>
       </ul>
   </div>
</template>

<script>
	
export default {
  name: 'refooter',
  data () {
    return {
     
    }
  }
}
	
</script>

<style scoped>
	@import : '../../assets/icon/iconfont.css';
#refooter{
						width: 100%;
						height: 1.1rem;
						background: #E9E9E9;
						position: fixed;
						bottom: 0;
						left: 0;
						right: 0;
						z-index: 12;
						
						}


#refooter>ul{
						height: 1rem;
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: space-around;
						flex-direction: row;}

#refooter>ul>li{
						flex-direction: column;
						justify-content: center;
						display: flex;
						height: 1rem;
						align-items: center;}


#refooter>ul>li>i{
						font-size: 0.40rem;
						color: black;
						height: 0.45rem;}

#refooter>ul>li>span{
						font-size: 0.25rem;
						color: black;}

#refooter>ul>li>button{
						width: 1.3rem;
						height: 0.7rem;
						border: 1px solid dodgerblue;
						background: white;
						color: dodgerblue;
						text-align: center;
						font-size: 0.25rem;
						border-radius: 6%;
						}
					
			

</style>