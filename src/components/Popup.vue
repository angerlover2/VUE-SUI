<template>
	<div class="popup" id="popup">
		<div class="search">
			<input type="text" class="search-input" v-model="wd" @keyup="search($event)" @keyup.up.prevent="up" @keyup.down="down"><button @click="searchBtn">搜索</button>
		</div>
		<div class="list">
			<ul>
				<li v-for="(value,index)  in words"  :class="{on:index===liIndex}">{{value}}</li>
			</ul>
			<div class="no-result" v-if="!words.length">暂无数据</div>
		</div>
		<div class="close-popup">取消</div>
	</div>
</template>

<script type="text/javascript">
	
	export default{
		//name:'#popup',
		data(){
			return{
				wd:'',
				words:[],
				liIndex:-1
			}
		},
		methods:{
			search:function(e){
				if(e.keyCode==38 || e.keyCode==40) return;
				this.$http.jsonp("http://sug.so.360.cn/suggest?",{
					params:{
						word:this.wd,
						encodein:'utf-8',
						encodeout:'utf-8'
					}
				}).then(function(res){
					this.words=eval("("+res.bodyText+")").s;
					//console.log(eval("("+res.bodyText+")"));
				},function(msg){
					console.log(msg);
				})
			},
			up:function(){
				this.liIndex--;
				if(this.liIndex==-1){
					this.liIndex=this.words.length-1;
				};
				this.wd=this.words[this.liIndex];
				 
			},
			down:function(){
				this.liIndex++;
				if(this.liIndex==this.words.length){
					this.liIndex=0;
				};
				this.wd=this.words[this.liIndex];
			},
			searchBtn:function(){
				location.href="https://www.so.com/s?q="+this.wd;
			}
		}
	}
	//https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word,obdata&word=%E5%B1%8C%E5%B1%8C%E5%B1%8C
	//https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word,obdata&word=%E5%95%8A%E5%95%8A%E5%A4%A7
	//http://sug.so.360.cn/suggest?encodein=utf-8&encodeout=utf-8&count=6&word=a&callback=__jsonp__1479087146042
</script>

<style type="text/css">
	ul,li{list-style: none;}
	.search{width: 80%;margin: 3% auto;overflow: hidden;}
	.search .search-input{float: left;width: 70%;}
	.search button{width: 30%;float: left;border: none;}
	.close-popup{position: absolute;bottom: 0;width: 100%;height: 1.7rem;line-height: 1.7rem;text-align: center;background: #C0C0C0;}
	.list li{text-align: left;}
	.list li.on{background: #C1C1C1;}
	.no-result{width: 100%;text-align: center;padding: 10px 0;}
</style>