<template>
  <div>
  		<h4>{{title}}</h4>
    	<div class="news-contnet" id="abc"></div>
    	
  </div>
</template>

<script>
import Vue from 'vue'
import List from './List'

export default {
  name: 'content',
  components:{
  	List
  },
  data () {
  	return{
  		msg: 'Welcome to Your Vue.js App',
    	id:'',
    	cont:'',
    	title:''
  	}
  },
  created:function(){
  	this.$http.jsonp("http://api.dagoogle.cn/news/single-news",{
  		params:{
  			news_id:this.$route.params.id,
  			tableNum:1
  		}
  	}).then(function(res){
  		document.getElementById('abc').innerHTML=res.body.data.content;
  		this.title=res.body.data.title;
  		//console.log(res.body.data);
  	},function(msg){
  		console.log(msg);
  	})
  }

}




//接口api文档    http://showdoc.dagoogle.cn/index.php/6



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.news-contnet{padding: 0 0.3rem;}
</style>
