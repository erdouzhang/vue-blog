<style scoped>
div.container {
    width: 720px;
    float: left;
    margin-top: 120px;
    margin-left: 245px;
    padding-bottom: 80px;
}

div.content{
    margin-top: 50px;
    overflow: hidden;
}

nav ul{
    width: 430px;
    height: 32px;
    margin: 0 auto;
}

nav ul li{
    float: left;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    width: 143px;
    text-align: center;
    cursor: pointer;
}

nav ul li i{
    margin-right: 10px;
}

.more{
    color: #e095b4;
}
</style>
<template>
   <nav>
       <ul>
           <li v-for="item in pnavs" v-on:click="toggle(item.flag,$event)" v-bind:class="{'more'
           : $index == 0}" v-bind:style="{width: width}"><i v-bind:class="item.icon"></i>{{item.text}}</li>
       </ul>
   </nav>
</template>
<script>
  export default {
    data () {
        return { flag: "all"}
    },
    props: ["pnavs","width"],
    methods: {
        toggle: function(flag,$event){
            this.flag = flag;
            this.$dispatch('child-flag', this.flag);
            $(this.$el).find("li").removeClass("more");
            if($event.target.tagName == "LI"){
                $($event.target).addClass("more");
            }else if($event.target.tagName == "I"){
                $($event.target).parent("li").addClass("more");
            }
        }
    }
  }
</script>
