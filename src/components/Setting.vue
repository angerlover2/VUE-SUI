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
			<li  class="mar-bot">
				<a href="javascript:;" class="item-content  open-panel">
				<div class="item-media"><span class="icon icon-star"></span></div>
				<div class="item-inner">
					<div class="item-title">侧边栏</div>
				</div>
				</a>
			</li>
			<li>
				<div class="item-content">
					<div class="item-inner">
						<div class="item-title label">日期时间</div>
						<div class="item-input"><input type="text" id="datetime-picker" data-toggle="date" readonly/></div>
					</div>
				</div>
			</li>
			<li  class="mar-bot">
				<div class="item-content">
					<div class="item-inner">
						<div class="item-title label">日历</div>
						<div class="item-input"><input type="text" id="my-input" data-toggle="date" readonly/></div>
					</div>
				</div>
			</li>
			
			<li>
				<div class="item-content">
					<div class="item-inner">
						<div class="item-title label">
							用户名：
						</div>
						<div class="item-input">
							<input type="text" />
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="item-content">
					<div class="item-inner">
						<div class="item-title label">
							密码：
						</div>
						<div class="item-input">
							<input type="password" />
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="item-content">
					<div class="item-inner">
						<div class="row">
							<div class="col-50 register">
								<router-link to="/form" class="button">注册</router-link>
							</div>
							<div class="col-50 login">
								<span class="button button-warning" @click="toast">登录</span>
							</div>
						</div>						
					</div>
				</div>
			</li>
		</ul>
		 
	</div>
</template>

<script type="text/javascript">
	//import Panel from "./Panel"
	
	export default{
		mounted:function(){
				
			$("#datetime-picker").datetimePicker({
			   value: ['2016', '12', '08', '15', '38']
			});
			$("#my-input").calendar({
			    value: ['2015-12-05']
			});
		},
		methods:{
			toast:function(){
				$.toast("您尚未注册~");
			}
		}
	}
	
</script>

<style type="text/css">
	.list-block{padding: 0;margin-top: 0;}
	.list-block li{background: #fff;}
	.list-block li .row{width: 100%;margin: 0;}
	.login,.register{text-align: center;}
	.mar-bot{margin-bottom: 30px;}
</style>