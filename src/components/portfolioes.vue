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
    width: 143px;
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
            <comp-nav v-bind:pnavs="items"></comp-nav>
            <img class="diviseImg" src="/images/star_divider.png"/>
            <div>
                <comp-item v-for="item in blogItems" transition="expand" v-bind:item="item" v-if="flag=='all' || item.cate.type == flag" v-bind:path="path"></comp-item>
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
                        icon: "icon-laptop",
                        text:"PC端",
                        flag: "pc"
                    },{
                        icon: "icon-mobile-phone",
                        text:"移动端",
                        flag: "mobile"
                }],
                flag: "all",
                path: "/portfolio/"
            }
        },
        wilddog: {
              blogItems: new Wilddog('https://myblog.wilddogio.com/portfolio')
          },
        components: {
          CompNav,
          CompItem
        },
        events: {
            'child-flag': function (flag) {
              this.flag = flag;
            }
        }
  }
</script>
