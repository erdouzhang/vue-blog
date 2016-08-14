<style scoped>
div.container {
    width: 720px;
    float: left;
    margin-top: 120px;
    margin-left: 245px;
    padding-bottom: 80px;
}
div.list{
  margin-top: 50px;
}
</style>
<template>
    <div class="container">
      <div class="list" v-for="item in anArray | orderBy 'date' -1">
        <comp-blog-item v-bind:item="item"></comp-blog-item>
      </div>
    </div>
</template>
<script>
  import CompBlogItem from './blogItem.vue';

  export default {
     wilddog: {
         anArray: new Wilddog('https://myblog.wilddogio.com/blog/article')
     },
    components: {
      CompBlogItem
    }
  }
</script>
