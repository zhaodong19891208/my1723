<template>
 <div class="top">
           <div id="top_one">
                   <div id="top_two">
                   	   <a class="a-search-input "></a>
                   	   <input type="text" id="txt1" placeholder="请输入物品关键字"/><span></span>
                   </div>     	
           </div>
           
           
           
           <div id="top_main">
           	       <div id="top_main_left">
		           	       	<ul id="top_list">
		           	       		<li @click="toponeClick()" ref="child">眼镜架</li>
		           	       		<li @click="toptwoClick()" ref="two">配套镜片</li>
		           	       		<li @click="topthreeClick()" ref="three">太阳镜</li>
		           	       		<li @click="topfourClick()" ref="four">防蓝光镜片</li>
		           	       	</ul>
           	       </div>

           	       <div id="top_main_right" >
           	                <div id="top_main_one" >
           	                	
					           	       	    <div id="top_main_img">
					           	       	    	   <img src="http://www.eachsee.com/data/afficheimg/1510537317708735420.jpg">
					           	       	    </div>
										           	       	
					           	       	    <ul class="top_main_list">
					           	       	    	<li><img src="http://www.eachsee.com/images/201609/thumb_img/2279_thumb_G_1474309786109.jpg"><a>纯钛</a></li>
					           	       	    	<li><img src="http://www.eachsee.com/images/201404/thumb_img/3025_thumb_G_1398106391274.jpg"><a>纯钛</a></li>
					           	       	    	<li><img src="http://www.eachsee.com/images/201611/thumb_img/4520_thumb_G_1479778196969.jpg"><a>纯钛</a></li>
					           	       	    	<li><img src="http://www.eachsee.com/images/201702/thumb_img/4576_thumb_G_1488239466300.jpg"><a>纯钛</a></li>
					           	       	    	<li><img src="http://www.eachsee.com/images/201609/thumb_img/3198_thumb_G_1474322575252.jpg"><a>纯钛</a></li>
					           	       	    	<li><img src="http://www.eachsee.com/images/201609/thumb_img/4422_thumb_G_1474305784596.jpg"><a>纯钛</a></li>
					           	       	    	<li><img src="http://www.eachsee.com/images/201609/thumb_img/4240_thumb_G_1474313663144.jpg"><a>纯钛</a></li>
					           	       	    	<li><img src="http://www.eachsee.com/images/201705/thumb_img/4741_thumb_G_1494471736286.jpg"><a>纯钛</a></li>
					           	       	    	<li><img src="http://www.eachsee.com/images/201609/thumb_img/4301_thumb_G_1474317493098.jpg"><a>纯钛</a></li>
					           	       	    	
					           	       	    </ul>
           	                	
           	                </div> 	

           	                <div id="top_main_two" v-if="show" @click="toptwoShow()">
                                         <div id="top_main_twoimg">
                                         	<img src="http://www.eachsee.com/data/afficheimg/1500728462525199526.png">
                                         </div>           	                	
           	                	<ul>
           	                		<li><img src="http://www.eachsee.com/images/201511/thumb_img/699_thumb_G_1447005033117.jpg"/><a>依视陆</a></li>
           	                		<li><img src="http://www.eachsee.com/images/201511/thumb_img/880_thumb_G_1446838849950.jpg"><a>依视路</a></li>
           	                		<li><img src="http://www.eachsee.com/images/201607/thumb_img/1184_thumb_G_1468867631731.jpg"><a>依视路</a></li>
           	                		<li><img src="http://www.eachsee.com/images/201405/thumb_img/1540_thumb_G_1400822566475.jpg"><a>依视路</a></li>
           	                		<li><img src="http://www.eachsee.com/images/201606/thumb_img/883_thumb_G_1464830752097.jpg"><a>依视路</a></li>
           	                	</ul>
           	                </div>
           	                
           	                
           	                <div id="top_main_three" v-if="show" @click="topthreeShow()">
			           	                	
			           	                	   <div id="top_main_threeimg">
			           	                	   	    <img src="http://www.eachsee.com/data/afficheimg/1500728772960117464.png">
			           	                	   </div>
           	                	          <h2>近视太阳镜</h2>
				           	                	<ul>
				           	                		<li><img src="http://www.eachsee.com/images/201707/thumb_img/4848_thumb_G_1501213233093.jpg"><a>雷朋</a></li>
				           	                		<li><img src="http://www.eachsee.com/images/201203/thumb_img/1547_thumb_G_1332285306881.jpg"><a>雷朋</a></li>
				           	                		<li><img src="http://www.eachsee.com/images/201112/thumb_img/630_thumb_G_1323241000940.jpg"><a>雷朋</a></li>
				           	                	</ul>
				           	                	
           	                		
           	                	
           	                	
           	                </div>
           	                 
           	                
           	                <div id="top_main_four" v-if="show" @click="topfourShow()">
           	                	
           	                	<div id="top_main_fourimg">
           	                		<img src="http://www.eachsee.com/data/afficheimg/1510537210650819550.jpg">
           	                	</div>
           	                	<h2>防蓝光眼镜</h2>
           	                	    	<ul>
				           	                		<li><img src="http://www.eachsee.com/images/201707/thumb_img/4848_thumb_G_1501213233093.jpg"><a>雷朋</a></li>
				           	                		<li><img src="http://www.eachsee.com/images/201203/thumb_img/1547_thumb_G_1332285306881.jpg"><a>雷朋</a></li>
				           	                		<li><img src="http://www.eachsee.com/images/201112/thumb_img/630_thumb_G_1323241000940.jpg"><a>雷朋</a></li>
				           	                	</ul>
				           	                
           	                	
           	                </div>
           	                
           	                
           	       	
           	       </div>
           	       
           </div>
           
           <div id="top_footer">
           
              <ul>
              	<li>
              		
              			<i class="icon iconfont">&#xe632;</i>
              			<span>首页</span>
              	</li>
              	<li>
              			  <i class="icon iconfont">&#xe605;</i>
              			<span>分类</span>
              		
              	</li><li>
              		
              			  <i class="icon iconfont">&#xe6e0;</i>
              			<span>试戴</span>
              		
              	</li><li>
              		
              			<i class="icon iconfont">&#xe633;</i>
              			<span>指南</span>
              		
              	</li><li>
              		
              			 <i class="icon iconfont">&#xe677;</i>
              			<span>用户</span>
              		
              	</li>
              </ul>
           </div>  
    </div>
</template>

<script type="text/javascript">
var rempx = document.documentElement.clientWidth / 6.4;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";


export default {
    name: 'top',
   
    data (){	
    	return{
    		show:false
    	}
    },
    
    methods:{
    	toponeClick(){
    		this.show = true
    		
    		this.$refs.child.style.background = "white"
    		this.$refs.two.style.background = "#F6F6F9"
    		this.$refs.three.style.background = "#F6F6F9"
    		this.$refs.four.style.background = "#F6F6F9"
    		
    	},
    	
    	toptwoClick(){
    		this.show = true
    		this.$refs.two.style.background = "white"
    		this.$refs.child.style.background = "#F6F6F9"
    		this.$refs.three.style.background = "#F6F6F9"
    		this.$refs.four.style.background = "#F6F6F9"
    		
    		
    	},

    topthreeClick(){
    		this.show = true
    		this.$refs.two.style.background = "#F6F6F9"
    		this.$refs.three.style.background = "white"
    		this.$refs.child.style.background = "#F6F6F9"
    		this.$refs.four.style.background = "#F6F6F9"
    	},

  topfourClick(){
    		this.show = true
    		this.$refs.two.style.background = "#F6F6F9"
    		this.$refs.three.style.background = "#F6F6F9"
    		this.$refs.child.style.background = "#F6F6F9"
    		this.$refs.four.style.background = "white"
    	}


//  	toponeShow(){
//  		this.show = false
//  		this.$refs.child.style.display = "block"
//  	   this.$refs.two.style.display = "none"
//  	
//  	},
//  	
//  	
//  	
//  	
//  	toptwoShow(){
//  		this.show = false
//  		this.$refs.two.style.display = "block"
//  	     this.$refs.child.style.display = "none"
//  	
//  	}
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    }
    
    
    
}

	
	
	
	
	
</script>

<style scoped>
@import : '../../assets/iconfont/iconfont.css';
ul,li{list-style: none;}
html.body{width: 100%;}
.top{
			width: 100%;
			height:100%;
			background: ;
			display: flex;
			position: absolute;
		    align-items: center;
		    overflow-y: auto;	
	      display: block;
	}


#top_one{
			display: flex;
			position: absolute;
			top: 0;
			width: 100%;
			height: 1.1rem;
			left: 0;
			right: 0;
	        background: #F6F6F9;
			align-items: center;
			justify-content: center;
			z-index: 80;
		
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
#txt1{     
	        position: absolute;
			height: 0.5rem;
			z-index: 3;
			width: 70%;
			font-size: 0.24rem;
			padding-left: 0.5rem;
			align-items: center;
			}


#top_main{
			position: absolute;
			width: 100%;
			/*height: 9rem;*/
			height: auto;
			background: white;
			top: 1.1rem;
			bottom: 1rem;
			flex: 1;
			
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
			
			border-left: 1px solid #2FB6F0;}
		

#top_main_right{
			width: 4.8rem;
			height: 9rem;
			background:#F6F6F9;
			/*background: white;*/
			right: 0.1rem;
			position: absolute;
			margin-left:1.6rem;
			display: flex;
			
			
			}
			
#top_main_one{display:;background: white;width: 4.7rem;height:9rem;}			
			
			
			
/*	/*	/*
		
		kl----------------------------------------------------------------------------------------------------
		*/
		
#top_main_img{
			justify-content: center;
			align-items: center;
			left: 0.1rem;
			width: 4.3rem;
			height: 2rem;
			top: 0.15rem;
			background:  white;
			position: absolute;
	}

#top_main_img>img{
			position: absolute;
			width: 4.3rem;
			height: 2rem;}
			
			
.top_main_list{
			position: absolute;
			width: 4.7rem;
			height:4.3rem ;
			top: 2.3rem;
			background: white;}


.top_main_list>li{
			width: 32%;
			height: 33%;
			float: left;
			border: 1px solid white;
			text-align: center;}
		

.top_main_list>li>a{
			font-size: 0.20rem;
			color: black;
			text-align: center;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			display: flex;}

.top_main_list>li>img{
				width: 100%;
				height:80%;}
			
#top_main_two{
                position: absolute;
				width:4.7rem;
				height: 6rem;
				background: white;
				right: 0.1rem;
				display:;
				}

#top_main_twoimg{
                width: 4.5rem;
				height: 2rem;
				display: flex;
				justify-content: center;
				align-items: center;
				background: white;
				left: 0.1rem;
				position: absolute;
				top: 0.1rem;}
				
#top_main_twoimg>img{
				width: 4.5rem;
				height: 2rem;}
				
				
#top_main_two>ul{
                width: 4.7rem;
				height: 3.8rem;
				bottom: 0;
				background: white;
				position: absolute;
				left: 0.1rem;
				}

#top_main_two>ul>li{
				width: 31%;
				height: 31%;
				/*border: 1px solid black;*/
				float: left;
				text-align: center;
				margin-left: 0.05rem;
				margin-top: 0.05rem;
				}
			

#top_main_two>ul>li>img{
				width: 100%;
				height: 80%;
				top: 0;}

#top_main_two>ul>li>a{
	            font-size: 0.21rem;
	            color: black;}



#top_main_three{
				position: absolute;
				width: 4.7rem;
				height: 8rem;
				background: white;
				display:none;
				}


#top_main_threeimg{
				width: 4.7rem;
				height: 2rem;
				position: absolute;
				left: 0.1rem;
				top: 0.1rem;
				
				}


#top_main_threeimg>img{
				width: 4.5rem;
				height: 2rem;}
			
			

#top_main_three>h2{
				font-size: 0.25rem;
				color: black;
				left: 0.1rem;
				position: absolute;
				top: 2.4rem;
				}

#top_main_three>ul{
					position: absolute;
					width: 4.5rem;
					height: 1.4rem;
					background: white;
					left: 0.1rem;
					top: 2.8rem;}

#top_main_three>ul>li{
					width: 32%;
					height: 100%;
					float: left;
					text-align: center;
					align-items: center;}
#top_main_three>ul>li>img{
					width: 100%;
					height: 80%;
					top: 0;}
#top_main_three>ul>li>a{
					font-size: 0.21rem;
					color: black;}
				
#top_main_four{
				width: 4.7rem;
				height: 6rem;
				background: white;
				left: 0.1rem;
				display:none;
				}
#top_main_fourimg{
				width: 4.5rem;
				height: 2rem;
				background: white;
				left: 0.1rem;
				top: 0.1rem;
				position: absolute;}

#top_main_fourimg>img{
					width: 4.5rem;
					height: 2rem;}

#top_main_four>ul{
					position: absolute;
					width: 4.5rem;
					height: 1.4rem;
					background: white;
					left: 0.1rem;
					top: 2.8rem;}
#top_main_four>ul>li{
					float: left;
					width: 32%;
					height: 100%;
					text-align: center;
					margin-left: 0.05rem;}

#top_main_four>ul>li>img{
						width: 100%;
						height: 80%;}
#top_main_four>ul>li>a{
						font-size: 0.21rem;
						color: black;}

#top_main_four>h2{
						font-size: 0.22rem;
						color: black;
						left: 0.15rem;
						position: absolute;
						top: 2.4rem;}

#top_footer
     {
			position:fixed;
			width: 100%;
			height: 1.1rem;
			background: white;
			display: flex;
			bottom: 0;
			left: 0;
			right: 0;
			z-index:90 ;
			
			}

#top_footer>ul{
			
			display: flex;
			justify-content: space-between;
			position: absolute;
			align-items: center;
			height: 1.1rem;}

#top_footer>ul>li{
			float: left;
			align-items: center;
			height: 1rem;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 1.2rem;}
	
#top_footer>ul>li>i{font-size: 0.35rem;color: black;}

#top_footer>ul>li:nth-child(2) {color: #2FB6F0;}

#top_footer>ul>li:nth-child(2) i{color: #2FB6F0;}



















</style>


