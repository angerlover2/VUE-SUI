<template>
	<div>
		<div class="buttons-tab" id="tab">
			<a href="#tab1"class="tab-link button " @click="clickTab(1)">做1</a>
			<a href="#tab2"class="tab-link button active" @click="clickTab(2)">做2</a>
			<a href="#tab3"class="tab-link button"@click="clickTab(3)">做3</a>
		</div>
		<div class="content-block content-block1">
			<div class="tabs">
				<div id="tab1" class="tab ">
					 <loadmore :top-method="loadTop" ref="loadmore" @top-status-change="handleTopChange">
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
						<div slot="top" class="mint-loadmore-top">
							<span v-show="topStatus !== 'pull'" :class="{'rotate':topStatus === 'drop'}">↓</span>
							<span v-show="topStatus =='loading'">加载中</span>
						</div>
					 </loadmore>
					
				</div>
				<div id="tab2" class="tab active">
					
					<loadmore :bottom-method="loadBottom2" :bottom-all-loaded="allLoaded" ref="bottom" @bottom-status-change="handleBottomChange" >
						<div class="card facebook-card" v-for="item in mes2">
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
						<!--<div slot="bottom" class="mint-loadmore-bottom">
					      <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">123</span>
					      <span v-show="bottomStatus === 'loading'">Loading...</span>
					    </div>-->
					</loadmore>
					
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
 //参数
 /*userHeadImg:"", 用户头像
  * userName:"",   用户名
  * startTime:"",  发布时间
  * headImage:"",  图片
  * likeCount:''   点赞数
  * 
  * 
  * 
  */
	export default{
		data(){
			return {
				mes:[],              //tab1接收数据数组
				mes2:[],			 //tab2接收数据数组
				mes3:[],			 //tab3接收数据数组
				pageNum:1,           //页码变量，根据不同tab页，会将不同页码赋值给它
				page:1,              //tab1的当前页码
				page2:1, 			 //tab2的当前页码
			    page3:7,			 //tab3的当前页码
				activeTab:2,		 //当前tab所在页面索引
				topStatus: '',
				bottomStatus:'',
				bottomPullText:"上拉刷新0"
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
      		//点击切换tab，改变索引值，请求数据
      		clickTab:function(index){
      			this.activeTab=index;
      			var oldIndex=2;
				//所处tab页不为1时请求数据，因为默认为1，在created中已请求数据
      			
      			if(index!==2){
      				this.getList();
      			}
      		},
      		//请求数据函数
      		getList:function(){
      			
      			//判断当前所处tab页，传递page页码
      			if(this.activeTab==1){
					this.pageNum=parseInt(100*Math.random());//100以内随机页码
					console.log("随机获取数据！");
				}else if(this.activeTab==2){
					this.pageNum=this.page2++;
				}else{
					this.pageNum=this.page3;
				}
				
				this.$http.get("https://apis.baidu.com/qunartravel/travellist/travellist",{
					params:{
						page:this.pageNum,
					},
					headers:{
						'apikey':'06ad8ab76e20c1fb0a04cfd9ce4f5e0c'
					}	
				}).then(function(res){
					
					//判断所处tab页，结果赋值到对应mes
					if(this.activeTab==1){
						this.mes=res.body.data.books;
					}else if(this.activeTab==2){
						this.mes2=this.mes2.concat(res.body.data.books); // 数据追加				
					}else{
						this.mes3=res.body.data.books;
					}
				},function(err){
					console.log(err);
				})
			},
      		loadTop(id){
      			this.getList();
      			this.$refs.loadmore.onTopLoaded(id);
      		},
      		loadBottom2(id){
      			var _this=this;
			    setTimeout(function(){
			    	_this.getList();
			      console.log(1);
			        _this.$refs.bottom.onBottomLoaded(id);
			        if(_this.pageNum>=20){
			        	_this.allLoaded = true;// 若数据已全部获取完毕
			        }
			    },1500);
			 	
			},
			handleTopChange(status) {
	         	this.topStatus = status;
	        },
			handleBottomChange(status){
				this.bottomStatus = status;
			}
      	}
	}
	
</script>

<style type="text/css">
	.content-block1{margin: 0;}
</style>