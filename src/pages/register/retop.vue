<template>
	<div id="retop">
	  <ul>
	     <li>
	         <i class="icon iconfont">&#xe60a;</i>
	     </li>
	  <li>
	  	<span style="color: dodgerblue;">商品</span>
	  </li>
	  <li>
	  	<span>详情</span>
	  </li>
	  <li>
	  	<span>评价</span>
	  </li>
	   <li>
	          <i class="icon iconfont">&#xe637;</i>
	   </li>
	  
	  
	  </ul>
	      
	</div>
	
	
	
</template>

<script>
	
	export default {
  name: 'retop',
  data () {
    return {
     
    }
  }
}
	
</script>

<style scoped>

#retop{
			width: 100%;
			height: 1.2rem;
			position: fixed;
			background: white;
			top: 1rem;
			left: 0;
			right: 0;
			z-index: 10;
		      opacity: 0.8;
			}

#retop>ul{
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: row;
			height: 1.2rem;
			}
		

#retop>ul>li>i{font-size: 0.32rem;
                color: black;}

#retop>ul>li>span{
				font-size: 0.25rem;  
				color: black;}
			
</style>