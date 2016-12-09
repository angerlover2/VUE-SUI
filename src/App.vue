<template>
  <div id="app">
   	<headtop></headtop>
    
    <foot></foot>
 		<div class="content">
 			
  			<router-view transition="fade" transition-mode="out-in"></router-view> 
  	
 		</div>

  	
    <nav class="bar bar-tab" id="foot">
			 <router-link to="/" class="tab-item external" active-class="active" exact>
			    <span class="icon icon-home"></span>
			    <span class="tab-label">首页</span>
			  </router-link>
		  <router-link to="/slider" class="tab-item external" active-class="active">
		    <span class="icon icon-me"></span>
		    <span class="tab-label">阅读</span>
		    <span class="badge">2</span>
		  </router-link>
		  <router-link to="/form" class="tab-item external"active-class="active">
		  	<span class="icon icon-star"></span>
		    <span class="tab-label">文案</span>
		  </router-link>
		  <router-link to="/tab" class="tab-item external"active-class="active">
		  	<span class="icon icon-cart"></span>
		    <span class="tab-label">美图</span>
		  </router-link>
		  <router-link to="/setting" class="tab-item external"active-class="active">
		  	<span class="icon icon-settings"></span>
		    <span class="tab-label">设置</span>
		  </router-link>
	</nav>
	<popup></popup>
	<panel></panel>   
  </div>
  
</template>

<script>

import Vue from 'vue'
import VueRouter from 'vue-router'
import Conten from './components/Content'
import headtop from './components/Head'
import Foot from './components/Foot'
import Popup from './components/Popup'
import Forms from './components/Form'
import Panel from './components/Panel'
export default {
name: 'app',
components: {
    Conten,headtop,Foot,Popup,Forms,Panel
}

}




</script>

<style>
@import 'assets/css/sm.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.content{
	padding-bottom: 3.5rem;
}

</style>
