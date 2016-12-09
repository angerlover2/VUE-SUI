<template>
	<div>
		<div class="buttons-tab" id="tab">
			<a href="#tab1"class="tab-link button active">做1</a>
			<a href="#tab2"class="tab-link button">做2</a>
			<a href="#tab3"class="tab-link button">做3</a>
		</div>
		<div class="content-block content-block1">
			<div class="tabs">
				<div id="tab1" class="tab active">
					 <loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
						<div class="card facebook-card" v-for="item in mes">
							<div class="card-header no-border">
								<div class="facebook-avatar">
									<img :src="item.userHeadImg" alt=""width="34" height="34"/>
								</div>
								<div class="facebook-name">{{item.userName}}</div>
								<div class="facebook-date">{{item.startTime}}</div>
							</div>
							<div class="card-content">
								<img :src="item.headImage" alt="" width="100%"/>
							</div>
							<div class="card-footer no-border">
								<a href="#" class="link">{{item.likeCount}}赞</a>
								<a href="#" class="link">评论</a>
								<a href="#" class="link">分享</a>
							</div>
						</div>
					 </loadmore>
					
				</div>
				<div id="tab2" class="tab">
					<div class="content-block">
						2222
					</div>
				</div>
				<div id="tab3" class="tab">
					<div class="content-block">
						333
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
</template>

<script type="text/javascript">

import Vue from 'vue'
import Loadmore from 'vue-loadmore'


 //百度api  
	export default{
		data(){
			return {
				mes:[
					{
						userHeadImg:"",
						userName:"",
						startTime:"",
						headImage:"",
						likeCount:''
					}
				],
				page:3,
				success:true
			}
		},
		components:{
			Loadmore
		},
		created:function(){
			this.getList();
		},
		 ready() {
        	
      	},
      	methods:{
      		getList:function(page){
				this.$http.get("https://apis.baidu.com/qunartravel/travellist/travellist",{
					params:{
						page:this.page,
					},
					headers:{
						'apikey':'06ad8ab76e20c1fb0a04cfd9ce4f5e0c'
					}	
				}).then(function(res){
					//this.mes=this.mes.concat(res.body.data.books);  数据追加
					this.mes=res.body.data.books;
					console.log(this.mes);
				},function(err){
					console.log(err);
					this.success=false;
				})
			},
      		loadTop(id){
      			console.log(this.page);
      			//默认是第三页，下拉刷新的时候获取第一页
      			this.page=1;
      			this.getList(this.page);
      			this.$refs.loadmore.onTopLoaded(id);
      			console.log("id="+id);
      		},
      		loadMore(){
      			console.log("loadMore");
      			
      		},
      		loadBottom(id) {
      			console.log("下方在执行id="+id)
      			//this.page++;
			  	//this.getList(this.page);
			//  this.$refs.loadmore.onBottomLoaded(id);
			}

      	}
	}
	
</script>

<style type="text/css">
	.content-block1{margin: 0;}
</style>