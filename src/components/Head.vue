<template>
	
		<header class="bar bar-nav" id="head">
			<a class="icon icon-left pull-left"></a>
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
				tittle:this.tittle
			}
		}
		
	}
	
</script>

<style type="text/css">
	
	header h1{background: ;}
	
</style>








