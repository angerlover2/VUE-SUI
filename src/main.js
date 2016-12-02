import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import App from './App'
import Card from './components/List'
import Tab from './components/Tab'
import Home from './components/Home'
import Slider from './components/Slider'
import Form from './components/Form'
import Content from './components/Content'
import Setting from './components/Setting'


//自定义时间过滤器
Vue.filter('datestyle',function(value){
	var oDate=new Date(value);
	var year=oDate.getFullYear();   //获取年；
	var month=oDate.getMonth();   //获取月份
	var dat=oDate.getDate(); // 获取日，
	var hours=oDate.getHours(); //获取时，
	var mins=oDate.getMinutes(); //分
	var sec=oDate.getSeconds(); //秒
	return year+"-"+month+"-"+dat+" "+hours+":"+mins+":"+sec;
});

/* eslint-disable no-new */


Vue.config.debug=true;

// Router
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);


var router = new VueRouter({
	mode:"history",
	saveScrollPosition:true,  //在启用html5 history模式的时候生效，用于后退操作的时候记住之前的滚动条位置
	routes:[{
		path:"",
		name:"List",
		title:'首页',
		component:Card,
		linkActiveClass:'active' 
	},{
		path:"/Tab",
		name:"Tab",
		component:Tab
	},{
		path:"/slider",
		name:"slider",
		component:Slider
	},{
		path:"/form",
		name:"Form",
		component:Form
	},{
		path:"/content/:id",
		name:"content",
		component:Content
	},{
		path:"/setting",
		name:"setting",
		component:Setting
	}
	
	]
});


new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  
});




//
//router.start()
