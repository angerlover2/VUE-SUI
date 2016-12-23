<template>
	
		<header class="bar bar-nav" id="head">
			<a class="icon icon-left pull-left" @click='backHistory'></a>
		  	<h1 class="title">{{tittle}}</h1>
		  	<a class="icon icon-search pull-right open-popup"></a>
		</header>
	
	
</template>

<script type="text/javascript">
	
	export default{
		name:'head',
		data(){
			return {
				//头部title
				tittle:""
			}
		},
		methods:{
			backHistory:function(){
				this.$router.go(-1);
			}
		},
		created:function(){
			console.log(this.$root.newsTitle);
		},
		watch:{         // watch $route 监测路由变化,改变头部title，刷新无效
			'$route' (to, from) {
				this.tittle=to.meta.title;
			}
		}
		
	}
	
</script>

<style type="text/css">
	
	header h1{background: ;}
	
</style>








