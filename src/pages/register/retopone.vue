<template>

  <div id="retopone">
				    
				    <div id="releft">
				    	<ul>
				    		<li>
				    			<span>关注微信号</span><br/>
				    			<span>领取50元代金券</span>
				    		</li>
				    		<li>
				    			<button @click="toponeClick()" ref="one">立即关注</button>
				    		</li>
				    	</ul>
				    </div>
				    
				    <div id="recenter" v-if="show" @click="toponeShow()">
				    	
				    	<div id="retoponeimg">
				    		
						    	<img src="/mobile/themes/tianmao2016/statics/img/ewm.png">
						    	<a>长按二维码关注微信公众号</a>
				    	</div>
				    	
				    </div>
    
    
    
  </div>


</template>
<!--<script src="http://code.jquery.com/jquery-1.8.0.min.js"></script>-->
<script>
	
	
	export default {
  name: 'retopone',
  data () {
    return {
     
     show:false
     
    }
  },
  
  methods:{
  	
  	toponeClick(){
  		
  		this.show = true
  		this.$refs.one.style.color = "#fff"
  		this.$refs.one.style.background = "#2FB6F0"
  		
  	},
  	
  	toponeShow(){
  		
  		this.show = false
  		this.$refs.one.style.background = "#1e2427"
  		this.$refs.one.style.color = "#2FB6F0" 
        
  	}
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  }
  
  
}

	
	
</script>

<style scoped>

#retopone{
			position: fixed;
			width: 100%;
			background:black;
			top: 0;
			right: 0;
			left: 0;
			height: 0.9rem;
			z-index: 45;
			}

#releft{
			position: absolute;
			width: 100%;
			height: 0.9rem;
			display: flex;}
#releft>ul{
			position: absolute;
			width: 100%;
			height: 0.9rem;
			display: flex;
			justify-content: space-around;
			align-items: center;
			}
		
#releft>ul>li>span{
			color: white;
			font-size: 0.15rem;}		

#releft>ul>li>button{
			width: 1.4rem;
			height: 0.5rem;
			border: 1px solid dodgerblue;
			text-align: center;
			font-size: 0.22rem;
			color: dodgerblue;
			border-radius: 6%;
			background: black;
			}


#recenter{
			position: fixed;
			width: 100%;
			height: 100%;
			background: #666666;
			opacity: 0.8;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			}
		

#retoponeimg{position: absolute;
			width: 4.2rem;
			height: 4.2rem;
			background: white;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			border-radius: 6%;
			}
			
#retoponeimg>img{position: absolute;width: 3.6rem;height: 3.6rem;top: 0.2rem;}

#retoponeimg>a{bottom: 0.1rem;font-size: 0.12rem;position: absolute;}















</style>