<style scoped>
div.item-box{
    width: 200px;
    height: 190px;
    margin-top: 30px;
    float: left;
    margin-right: 40px;
}
div.item-box:nth-child(3):not(:first-child){
    margin-right: 0px;
}
div.item-box a h3{
    font-size: 14px;
    line-height: 32px;
    color: #6c6c6c;
    margin: 0;
}
div.item-box span.date{
    font-size: 12px;
}
div.item-box a.more{
    font-size: 12px;
    float: right;
}
div.item-box div.box{
    height: 32px;
    line-height: 32px;
}
</style>

<template>
  <div class="item-box">
    <a  v-link="{ path: path+item['.key'] }" v-on:click="getData(item)">
        <img class="thumbnail" v-bind:src="item.thumbnail">
    </a>
    <a v-link="{ path: path+item['.key'] }" v-bind:title="item.title">
        <h3>{{item.title | ellipsis 12}}</h3>
    </a>
    <div class="box">
        <span class="date">
            <i class="icon-time"></i> {{item.date |articleDate}}
        </span>
        <a v-link="{ path: '/portfolio/'+item['.key'] }" class="more">
            read more
            <i class="icon-caret-right"></i>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { }
  },
  props: ["title","desc","item","path"],
  methods: {
    getData: function(item){
        this.$dispatch('child-aid', item['.key'], item.pid);
    }
  }
}
</script>
