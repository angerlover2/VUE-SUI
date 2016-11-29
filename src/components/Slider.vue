<template>
	<div>	
		<div class="swiper-container" id="slider-w">
		    <div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in imgUrls"><span>{{ index+1 }}/{{totalpage+1}}</span><img :src="item" alt="" /></div>
		    </div>
		    
		 </div>
		<hr></hr>
		
	</div>
</template>

<script type="text/javascript">
	
	
	var slide1;
	export default{
		data(){
			return{
				speed:'3000',
				intervals:'3',
				page:0,
				totalpage:2,
				imgUrls:[
					'http://img1.imgtn.bdimg.com/it/u=3849374721,3962861552&fm=206&gp=0.jpg',
					'http://img4.imgtn.bdimg.com/it/u=1110997415,3319840983&fm=206&gp=0.jpg',
					'http://img4.imgtn.bdimg.com/it/u=2509844193,1602792001&fm=21&gp=0.jpg'
				]
			}
			
		},
		beforeCreate:function(){         //在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
			  clearInterval(slide1);     //避免多次快速切换页面时定时器叠加
		},
		created:function(){
			var that=this;
			slide1=setInterval(function(){
				if(that.page===0 || that.page<that.totalpage){
					that.page++;
				}else{
					that.page=0;
				}
				$(".swiper-slide").eq(that.page).show().siblings().hide();
				console.log(that.page);
			},this.speed);
		},
		destroyed:function(){           //Vue 实例销毁后调用
		clearInterval(slide1); 			//避免多次快速切换页面时定时器叠加
		}
			
		}
	
	
</script>
<style>
	
	#slider-w .swiper-slide img{width:100%;height: auto;}
	.swiper-slide span,.swiper-slide2 span{position: absolute;right: 0;bottom: 0;background: rgba(0,0,0,.5);color: #fff;}
	/*#myslide{position: relative;}
	#myslide .swiper-slide2{position: absolute;left: 0;top: 0;width: 100%;height: auto;padding: 0;margin: 0;}*/
	
</style>