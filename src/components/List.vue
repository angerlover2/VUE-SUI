<template>
	<div id="card">
		<!--<div id="card" class="card" v-for="item in news">
			<div :style="{background:'url('+ item.text_image0 +')'}" valign="bottom" class="card-header color-white no-border">{{ item.title }}</div>
		    <div class="card-content">
		      <div class="card-content-inner">
		        <p class="color-gray">发表于<i>{{item.edit_time}}</i> </p>
		        <p>{{item.digest}}</p>
		      </div>
		    </div>
		    <div class="card-footer">
		      <a href="#" class="link">赞</a>
		      <router-link :to="{name:'content',params:{id:item.news_id}}" class="link" tag="a">更多</router-link>
		    </div>	   
		</div>-->

		<div class="card demo-card-header-pic"  v-for="item in news">
		    <div valign="bottom" class="card-header color-white no-border no-padding">
		      <img class='card-cover' :src="item.text_image0" alt="">
		    </div>
		    <div class="card-content">
		      <div class="card-content-inner">
		        <p class="color-gray">发表于 {{item.edit_time}}</p>
		        <p>{{item.digest}}</p>
		      </div>
		    </div>
		    <div class="card-footer">
		      <a href="#" class="link">赞</a>
		      <!-- <router-link :to="{ name:'content',params:{id:item.news_id}}" class="link">更多</router-link>-->
		      <router-link :to="{ path:'/content/'+item.news_id}" class="link">更多</router-link>
		    </div>
		</div>
		<div class="more" @click="more">
			点击加载更多
		</div>
	</div>
</template>

<script type="text/javascript">

	export default{
		name:'card',
		data(){
			return{
				news:[
					{
						text_image0:'',
						title:'',
						edit_time:0,
						digest:'',
						news_id:''
						
					}
				],
				pages:1
			}
		},
		mounted:function(){
		  	this.getData();
		},
		created:function(){
			
			
		},
		methods:{
			getData:function(){

				this.$http.jsonp("http://api.dagoogle.cn/news/get-news",{
					params:{
						tableNum:1,
						justList:1
					}
				}).then(function(res){
			 		this.news=res.body.data;    //将得到的数据数组直接赋值
				},function(msg){
					console.log(msg);
				})
			},
			more:function(){
				console.log(this.pages);
				this.pages++;
				var that=this;
				this.$http.jsonp("http://api.dagoogle.cn/news/get-news",{
					params:{
						page:this.pages,
						tableNum:1,
						justList:1
					}
				}).then(function(res){
					console.log(this.pages);
					this.news=(this.news).concat(res.body.data);
				},function(msg){
					
				})
			}
		}
		
	}


	
	
	
</script>
<style type="text/css">
	
</style>