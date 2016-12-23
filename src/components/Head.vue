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
		props:['atittle'],
		data(){
			return {
				tittle:''
			}
		},
		methods:{
			backHistory:function(){
				this.$router.go(-1);
			}
		},
		watch:{               //watch $route监听路由变化，改变头部title
			'$route' (to, from) {
			    this.tittle =to.meta.title;
			  }
		}
		
	}
	
</script>

<style type="text/css">
	
	header h1{background: ;}
	
</style>








