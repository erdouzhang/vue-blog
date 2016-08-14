<style scoped>
.header{
  height: 120px;
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  position: fixed;
  background: white;
  z-index: 100;
}
.logo{
  float: left;
}
.logo h1{
  font-size: 30px;
  line-height: 120px;
  font-family: "微软雅黑";
  padding: 0 0 0 45px;
  color: #6c6c6c;
  display: inline-block;
}
.logo h1 span{
  color: #bababa;
}
.container div.right{
  width: 600px;
  margin: 45px 0 0 60px;
  float: left;
}
div.nav{
  float: left;
}
nav{
  float: left;
}
nav li{
   float: left;
   margin-right: 5px;
   color: #bababa;
}
nav li a{
  color: #bababa;
  font-size: 12px;
}
a.toggle-btn{
  width: 108px;
  height: 54px;
  display: block;
  float: left;
  margin-left: 280px;
  cursor: pointer;
}
/* 必需 */
.expand-transition {
  transition: all .3s ease;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>

<template>
  <div class="container header">
    <div class="logo">
      <h1>v刺猬v<span>的博客.</span></h1>
    </div>
    <div class="right">
      <div class="nav">
        <p>前端技术的总结、收集和分享</p>
        <nav>
          <li><a v-link="{ path: '/home' }">Home</a></li>
          <li v-if="path && path != 'home'">/ <a v-link="{path: '/'+path }">{{path}}</a></li>
        </nav>
      </div>
      <a class="toggle-btn" v-on:click="toggle">
        <img src="/images/Effe_03.gif" width="108" height="54" />
      </a>
    </div>
    <comp-toggle-box v-show="showBox" transition="expand"></comp-toggle-box>
  </div>
</template>

<script>
import CompToggleBox from './toggleBox.vue';

export default {
    data () {
        return {
            path: this.$route.path,
            showBox: false
        }
    },
    components: {
        CompToggleBox
    },
    events: {
        "send-path": function(path){
            this.path = path;
            console.log(path);
        }
    },
    created: function(){
        this.$watch("$route.path",function(newVal){
            this.$set("path",newVal.split("/")[1]);
        });

    },
    methods: {
        toggle: function(){
            this.showBox = !this.showBox;
            console.log(this.showBox);
        }
    }
}
</script>
