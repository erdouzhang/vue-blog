<style scoped>
    div.container {
        width: 720px;
        float: left;
        margin-top: 120px;
        margin-left: 245px;
        padding-bottom: 80px;
    }

    div.header {
        margin-top: 50px;
    }

    p.tag span{
        font-size: 12px;
        line-height: 40px;
        color: #d6d6d6;
        margin-right: 5px;
    }

    img.img01{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    p {
        width: 720px;
        font-size: 14px;
        line-height: 20px;
        overflow: hidden;
    }

    div.header h2 small{
        font-size: 14px;
        color: #d6d6d6;
        margin-left: 20px;
    }
</style>
<template>
    <div class="container">
        <pre>{{a}}</pre>
        <div class="header">
            <h2>{{anObject.title}} <small><i class="icon-time"></i> {{anObject.date | articleDate}}</small></h2>
            <p class="tag">
                <span><i class="icon-user"></i> admin</span>
                <span v-for="t in anObject.tag"><i class="icon-tags"></i> {{t.text}} </span>
            </p>
            <img v-if="anObject.Img" class="img01" v-bind:src="anObject.Img"/>
            <div id="blogContent" v-html="anObject.content | marked"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return { anObject: null};
        },
        created: function(){
            var self = this;
            var aid = self.$route.params.id;
            var ref = new Wilddog('https://myblog.wilddogio.com/blog/article').child(aid);
            ref.on("value",function(snap){
                self.anObject = snap.val();
            })
        }
    }
</script>
