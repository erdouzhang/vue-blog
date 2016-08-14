<style scoped>
div.container {
    width: 720px;
    float: left;
    margin-top: 120px;
    margin-left: 245px;
    padding-bottom: 80px;
}
div.portfolio{
    margin-top: 50px;
}

div.content{
    margin-top: 50px;
    border-bottom: 1px solid #d6d6d6;
    overflow: hidden;
    padding-bottom: 30px;
}

div.left{
    width: 540px;
    float: left;
}

div.left p{
    width: 480px;
}

div.portfolio h3{
    margin-top: 20px;
}

div.right{
    width: 178px;
    border-left: 1px solid #d6d6d6;
    box-sizing: border-box;
    float: left;
    padding-left: 40px;
}
div.right ul li{
    font-size: 14px;
    line-height: 24px;
}

div.bottom{
    overflow: hidden;
    width: 680px;
    margin: 0 auto;
}

div.item-box a h3{
    margin: 0;
}
</style>

<template>
  <div class="container">
    <div class="portfolio">
        <comp-prot-slider v-bind:sliders="anObject.slider"></comp-prot-slider>
        <div class="content">
            <div class="left">
                 <h3>{{ anObject.title | ellipsis 30}}</h3>
                 <p v-html="anObject.description | marked"></p>
            </div>
            <div class="right">
                <h3>技术栈</h3>
                <ul>
                    <li v-for="item in anObject.tag"><i class="icon-ok"></i> {{item.title}}</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
             <comp-item v-for="item in blogItems" v-bind:item="item"></comp-item>
        </div>
    </div>
  </div>
</template>

<script>
  import CompProtSlider from './slider.vue';
  import CompItem from './portItem.vue';

export default {
    data () {
        return { anObject: null, aid: this.$route.params.id }
    },
    wilddog: {
        blogItems: new Wilddog('https://myblog.wilddogio.com/portfolio').limitToFirst(3)
    },
      components: {
        CompProtSlider,
        CompItem
      },
      created: function(){
        var self = this;
        var ref = new Wilddog('https://myblog.wilddogio.com/portfolio').child(this.aid);
        ref.on("value",function(snap){
            self.$set("anObject",snap.val());
        });
      },
      events: {
          'child-aid': function (aid,pid) {
            var self = this;
            this.$set("abc",aid);
            var ref = new Wilddog('https://myblog.wilddogio.com/portfolio').child(aid);
            ref.on("value",function(snap){
                self.$set("anObject",snap.val());
            });
          }
      }
}


</script>
