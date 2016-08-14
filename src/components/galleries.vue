<style scoped>
div.container {
    width: 720px;
    float: left;
    margin-top: 120px;
    margin-left: 245px;
    padding-bottom: 80px;
}

nav{
    margin-top: 50px;
}

div.content nav ul{
    width: 430px;
    height: 32px;
    margin: 0 auto;
}

div.content nav ul li{
    float: left;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    width: 85px;
    text-align: center;
}

div.content nav ul li i{
    margin-right: 10px;
}

img.diviseImg{
    margin-left: 145px;
}

.expand-transition {
  transition: all .6s ease;
  overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  height: 0;
  opacity: 0;
}
</style>
<template>
    <div class="container">
        <div class="content">
            <comp-nav v-bind:pnavs="items" v-bind:width="liWidth"></comp-nav>
            <img class="diviseImg" v-bind:src="'./images/star_divider.png'"/>
            <div>
                 <comp-item v-for="item in galleryItem" transition="expand" v-bind:item="item" v-if="item.cate.type == flag || flag == 'all'" v-bind:path="path"></comp-item>
            </div>
        </div>
    </div>
</template>
<script>
import CompNav from './nav.vue';
import CompItem from './portItem.vue';

export default {
    data () {
        return {
            items: [
                {
                    icon: "icon-tasks",
                    text:"全部",
                    flag: "all"
                },{
                    icon: "icon-pencil",
                    text:"绘画",
                    flag: "pointer"
                },{
                    icon: "icon-camera-retro",
                    text:"摄影",
                    flag: "photo"
                },{
                    icon: "icon-globe",
                    text:"旅行",
                    flag: "travel"
                },{
                    icon: "icon-picture",
                    text:"其他",
                    flag: "other"
                }
            ],
            flag: "all",
            liWidth: "86px",
            path: "/gallery/"
        }
    },
     wilddog: {
        galleryItem: new Wilddog('https://myblog.wilddogio.com/gallery')
    },
    components: {
        CompNav,
        CompItem
    },
    events: {
        'child-flag': function (flag) {
          this.$set("flag",flag);
          console.log(this.flag);
        }
    },
    created: function(){
        this.flag = "all";
    }
}
</script>
