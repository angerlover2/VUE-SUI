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
		meta:{
			title:"首页"
		},
		component:Card,
		linkActiveClass:'active' 
	},{
		path:"/Tab",
		name:"Tab",
		meta:{
			title:"美图"
		},
		component:Tab
	},{
		path:"/slider",
		name:"slider",
		meta:{
			title:"阅读"
		},
		component:Slider
	},{
		path:"/form",
		name:"Form",
		meta:{
			title:"文案"
		},
		component:Form
	},{
		path:"/content/:id",
		name:"content",
		meta:{
			title:"首页"
		},
		component:Content
	},{
		path:"/setting",
		name:"setting",
		meta:{
			title:"设置"
		},
		component:Setting
	}
	
	]
	
});

// 定义站点的名字
const title = '小李学VUE';

//路由导航钩子，beforeEach，在路由进入前调用
router.beforeEach((to,from,next)=>{
 let titleStr = ''
  // 检测是不是要跳转首页，如果是，则不处理
  if (to.name !== 'List') {
    // 倒序遍历数组获取匹配到的路由节点，拼接各部分title
    for (let i = to.matched.length - 1; i >= 0; i--) {
      titleStr += `${to.matched[i].meta.title} - `
    }
  }
  // 添加站点名
  titleStr += title
  // 更新title
  document.title = titleStr
  // 继续路由导航
  next()
})





var vx=new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  
});




//
//router.start()
