<style scoped>
div.container{
    width: 720px;
    float: left;
    margin-top: 120px;
    margin-left: 245px;
    padding-bottom: 80px;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

#wrapper {
    width: 720px;
    height: 130px;
    background: #ccc;
    overflow: hidden;
    margin: 20px 0 0 0;
}

#scroller {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    overflow: hidden;
    height: 130px;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
}

#scroller ul {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
    text-align: center;
}

#scroller li {
    display: block;
    float: left;
    height: 130px;
    width: 144px;
    text-align: center;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
}
</style>

<template>
<div id="wrapper">
    <div id="scroller">
        <ul v-bind:length="length">
            <li v-for="item in imgs" v-on:click="nowImg(item)">
                <img height="130" v-bind:src="'./images/loading.gif'" v-bind:real="item.imgSrc">
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            length: ""
        }
    },
    events: {
        'child-flag': function (flag) {
          this.$set("flag",flag);
        }
    },
    props: ['imgs'],
    created: function(){
        var myScroll;
        var gid = this.$route.params.id;

        this.$watch("data",function(newVal){
            $("#scroller").width(144*newVal.length+"px");
            $("#scroller ul").width(144*newVal.length+"px");
            loaded(this);
        });

        function loaded (obj) {
            myScroll = new IScroll('#wrapper', { probeType: 3, scrollX: true, scrollY: false, mouseWheel: true });
            var imgs = $("#scroller").find("img");
            var imagesData = obj.data;

            for(var j = 0; j < 5; j++){
                imgs[j].src = imagesData[j].imgSrc;
            }

            myScroll.on('scroll', function(){
                for (var i = 0; i < imgs.length; i++) {
                    var item = imgs[i];
                    var self = this;
                    if(Math.abs(self.x)+1000>item.offsetLeft){
                        var tempImg = new Image();
                        tempImg.src = imagesData[i].imgSrc;
                        tempImg.onload = (function(i){
                            $(imgs[i]).attr("src",imagesData[i].imgSrc);
                        })(i)
                    }
                }
            });
        }
    },
    events: {
        'child-length': function (data) {
          // 事件回调内的 `this` 自动绑定到注册它的实例上
          this.$set("data",data);
        }
    },
    methods: {
        nowImg: function(item){
            this.$dispatch('now-image', item);
        }
    },
    destroyed: function(){
        this.data = null;
    }
}
</script>
