<style scoped>
div.container{
    width: 720px;
    float: left;
    margin-top: 120px;
    margin-left: 245px;
    padding-bottom: 80px;
}

div.imgBox{
    margin: 50px 0 10px 0;
    text-align: center;
    overflow: hidden;
    width: 720px;
}

</style>

<template>
    <div class="container">
        <div class="imgBox">
            <img v-bind:src="image.imgSrc" width="720"/>
        </div>
        <p>{{image.desc}}</p>
        <comp-img-nav v-bind:imgs="galleryItem.pictures" v-bind:length="galleryItem.pictures.length"><comp-img-nav>
    </div>
</template>

<script>
import CompImgNav from './imgNav.vue';

export default {
    data () {
        return {
            galleryItem: null,
            path: ""
        }
    },
    created: function(){
        var gid = this.$route.params.id;
        var ref = new Wilddog('https://myblog.wilddogio.com/gallery').child(gid);
        var self = this;
        ref.on("value",function(snap){
            self.galleryItem= snap.val();
            self.$broadcast('child-length', self.galleryItem.pictures);
            self.$set("image", self.galleryItem.pictures[0]);
        });
    },
    destroyed: function(){
        this.galleryItem = null;
        this.image = null;
    },
    components: {
        CompImgNav
    },
    events:{
        "now-image": function(item){
            this.image = item;
            console.log(this.image);
        }
    },
    route:{
        data: function(transition){
            var gid = this.$route.params.id;
            var ref = new Wilddog('https://myblog.wilddogio.com/gallery').child(gid);
            var self = this;
            ref.on("value",function(snap){
                self.galleryItem= snap.val();
                self.$broadcast('child-length', self.galleryItem.pictures);
                self.$set("image", self.galleryItem.pictures[0]);
            });
        },
        deactivate: function(transition){
            this.image = null;
            this.galleryItem = null;
            transition.next();
        }
    }
}
</script>
