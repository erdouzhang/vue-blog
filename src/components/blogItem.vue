<style scoped>
div.item{
  width: 100%;
  height: 210px;
  margin-bottom: 60px;
}
a.thumbnail{
  float: left;
}
div.desc{
  width: 400px;
  margin-left: 40px;
  float: left;
}
div.desc p.tag{
  font-size: 12px;
  color: #d6d6d6;
  line-height: 40px;
  margin-top: 0px;
}
div.desc p.tag span,div.desc p.tag span i{
  color: #d6d6d6;
}
div.desc p.tag span{
    margin-right: 20px;
}
div.desc h3{
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid #e095b4;
}

div.desc h3 a{
    color: #6c6c6c;
}

div.desc small{
  font-size: 12px;
  font-weight: normal;
  float: right;
}
div.desc p{
  font-size: 14px;
  line-height: 20px;
  margin-top: 5px;
}
div.desc p.description{
    min-height: 80px;
}
a.more{
  margin-top: 20px;
  display: inline-block;
  font-size: 12px;
}
</style>
<template>
<div class="item">
  <a v-link="{ path: '/blog/'+item['.key'] }" class="thumbnail">
    <img v-bind:src="item.thumbnail" alt="" width="280" height="180"/>
  </a>
  <div class="desc">
    <p class="tag">
      <span><i class="icon-user"></i> admin</span>
      <span v-for="t in item.tag"><i class="icon-tags"></i> {{t.text}}</span>
    </p>
    <h3><a v-link="{ path: '/blog/'+item['.key'] }">{{item.title | ellipsis 30}} <small><i class=""></i>{{item.date | articleDate}}</small></a></h3>
    <p class="description" v-bind:title="item.description">{{item.description | ellipsis 100}}</p>
    <a class="more" href="#">read more <i class="icon-caret-right"></i></a>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ["item"]
}
</script>
