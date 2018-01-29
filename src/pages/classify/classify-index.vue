<template>
    <div class="top">
           <div id="top_one">
           	
                   <div id="top_two">
                   
                   	   <a class="a-search-input "></a>
                   	   <i class="iconfont icon-sousuo"></i><input type="text" id="txt1" placeholder="请输入物品关键字"/><span></span>
                   </div>     	
           	
           </div>
           
           
           
           <div id="top_main">
           	       <div id="top_main_left">
		           	       	<ul id="top_list">
		           	       		<li>眼镜架</li>
		           	       		<li>配套镜片</li>
		           	       		<li>太阳镜</li>
		           	       		<li>防蓝光镜片</li>
		           	       	</ul>
           	       </div>
           	       
           	       
           	       <div id="top_main_right">
           	       	
           	       	    <table>
           	       	    	<tr>
           	       	    		<td><img src=""></td>
           	       	    	</tr>
           	       	    </table>
           	       	
           	       	    <ul>
           	       	    	<li><a></a></li>
           	       	    	<li></li>
           	       	    	<li></li>
           	       	    	<li></li>
           	       	    	<li></li>
           	       	    	<li></li>
           	       	    	<li></li>
           	       	    	<li></li>
           	       	    	<li></li>
           	       	    </ul>
           	       	
           	       	
           	       	
           	       	
           	       	
           	       	
           	       </div>
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           	       
           </div>
           
           
           
           
           
           
           
           
           
           
           <div id="top_footer"></div>  
           
    </div>
    
    
    
    
    
    
    
    
    
    
</template>

<script type="text/javascript">
	
export default {
    name: 'top',
   
    data (){	
    	return{
    		
    	}
    	
    }
}

var rempx = document.documentElement.clientWidth / 6.4;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
	
</script>

<style scoped>

ul,li{list-style: none;}

.top{
		width: 100%;
		height:100%;
		background: ;
		display: flex;
		position: absolute;
	    display: flex;
	    align-items: center;
	    
	}



#top_one{
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		height: 1.1rem;
		z-index: 10;
        background: #F6F6F9;
		align-items: center;
		justify-content: center;
		
	}

#top_two{
	
	     height:0.7rem ;
	     background: ;
	     display: flex;
	     width: 90%;
	     position: relative;
	     border-radius: 4px;
	     justify-content: center;
	     align-items: center;
	  
	     
}

.a-search-input {
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			position: absolute;
			z-index: 2;
			text-decoration: none;
		    background: white;
	}
#txt1{position: absolute;
			height: 0.5rem;
			z-index: 3;
			width: 70%;
			font-size: 0.24rem;
			padding-left: 0.5rem;
			align-items: center;
			}
	
#top_two>i{position: absolute;}




#top_main{
			position: absolute;
			width: 100%;
			height: 90%;
			background: white;
			top: 1.1rem;
			bottom: 2.4rem;
	}



#top_main_left{
			position: absolute;
			width: 1.6rem;
			height: 9rem;
			background: #F6F6F9;
			left: 0;
	
	}




#top_list{
	        position: relative;
            width:100%;
            background: ;}

#top_list>li{
			width: 100%;
			height: 0.8rem;
			text-align: center;
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background: ;
			font-size: 0.25rem;
			}



#top_list>li:nth-child(1){
			background: white;
			border-left: 1px solid #2FB6F0;}
		








#top_main_right{
			width: 4.7rem;
			height: 9rem;
			background: orchid;
			right: 0;
			position: absolute;
			margin-left:1.6rem ;
			
			}
		
		






#top_footer{
			position: fixed;
			width: 100%;
			height: 1.2rem;
			background: gray;
			bottom: 0;
			left: 0;
			right: 0;
			}































</style>


