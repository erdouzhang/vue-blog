<style scoped>
div.item-box{
  width: 100%;
  margin-top: 60px;
  border-left: none;
  float: left;
}
div.container div.left{
  width: 120px;
  border-right: 1px solid #d8d8d8;
  padding-left: 10px;
  height: 160px;
  float: left;
}
div.container div.left p{
  width: 100px;
  font-size: 12px;
  line-height: 20px;
  margin-top: 10px;
}
div.right{
  float: left;
  width: 588px;
}
div.right div.item{
  width: 250px;
  height: 210px;
  margin-left: 40px;
  float: left;
}
div.right div.item a{
  display: block;
}
div.right div.item h5{
  font-size: 14px;
  margin-top: 10px;
}
div.right div.item p{
  font-size: 12px;
  line-height: 30px;
}
div.right div.item p a{
  float: right;
}
.red{
  color: #e095b4;
}
div.right div.item h5 a{
    color: #6c6c6c;
}
</style>
<template>
  <div class="item-box">
    <div class="left">
      <h3>{{title}}</h3>
      <p>{{desc}}</p>
    </div>
    <div class="right">
      <div class="item" v-for="item in items">
        <a v-link="{ path: path+ item['.key'] }">
          <img v-bind:src="item.thumbnail" width="250" height="150"/>
        </a>
        <h5 title="{{item.description}}"><a v-link="{ path: path+ item['.key'] }">{{item.title | ellipsis 20}}</a></h5>
        <p>
          <span><i class="icon-time"></i> {{item.date | articleDate}}</span>
          <a v-link="{ path: path+ item['.key'] }" class="red">read more <em class="icon-caret-right red"></em></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ["title","desc","items","path"]
}
</script>
