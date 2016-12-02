<template>
	<div>
		<ul class="list-block">
			<li>
				<a href="/slider" class="item-content item-link">
				<div class="item-media"><span class="icon icon-star"></span></div>
				<div class="item-inner">
					<div class="item-title">型号</div>
					<div class="item-after">0</div>
				</div>
				</a>
			</li>
			<li>
				<a href="javascript:;" class="item-content  open-panel">
				<div class="item-media"><span class="icon icon-star"></span></div>
				<div class="item-inner">
					<div class="item-title">侧边栏</div>
				</div>
				</a>
			</li>
			<li>
				<div class="item-content">
					<div class="item-media"><span class="icon icon-star"></span></div>
					<div class="item-inner">
						<div class="item-title">日期</div>
						<div class="item-input"><input type="text" @click="datetimePickers"  id="datetime-picker" readonly/></div>
					</div>
				</div>
			</li>
		</ul>
		
	</div>
</template>

<script type="text/javascript">
	//import Panel from "./Panel"
	
	export default{
		created:function(){
			
		},
		watch:{
			
		},
		methods:{
			datetimePickers:function(){
				$("#datetime-picker").datetimePicker({
					value: ['1985', '12', '04', '9', '34']
				});
			}
		}
	}
	
</script>

<style type="text/css">

	.list-block{padding: 0;background: #fff;}
	
</style>