<template>
	<div>
		<div class="buttons-tab" id="tab">
			<a href="#tab1"class="tab-link button active">做1</a>
			<a href="#tab2"class="tab-link button">做2</a>
			<a href="#tab3"class="tab-link button">做3</a>
		</div>
		<div class="content-block">
			<div class="tabs">
				<div id="tab1" class="tab active">
					<div class="content-block">
						1111
					</div>
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
	var Mock=require('mockjs');
	var data=Mock.mock({
		'list|1-10':[{
			'id|1':false,
			'attr|1-2':'three',
			'time|+1':['2016-11-03','2016-11-04','2016-11-05','2016-11-06'],
			'title|1':[
				'这是测试标题1',
				'这是测试标题2',
				'是测试标题3',
				'这是测试标题4',
				'测试标题5',
			],
			'content|count':{
				id:'第三方是方式方法范德萨发放松放松，付首付，范德萨发电费是冯绍峰是，所发生的，的冯绍峰是！',
				isad:'说分手胜多负撒范德放大，是发松岛枫，事发地点时，都是',
				isd:'发佛山市房发身无分文而温柔',
				t:'付首付上分为非沙发沙发方式'
			}
		}]
	})
	//console.log(JSON.stringify(data,null,4));
	export default{
		
	}
	
</script>

<style type="text/css">
	
</style>