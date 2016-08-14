<style scoped>
  div.container{
    width: 720px;
    float: left;
    margin-top: 120px;
    margin-left: 245px;
    padding-bottom: 80px;
  }
  hgroup{
    height: 120px;
    border-bottom: 1px solid #d8d8d8;
    overflow: hidden;
    text-align: center;
  }
  hgroup{
    margin-top: 30px;
    border-bottom: 1px solid #d8d8d8;
  }
  hgroup img{
    margin: 15px 0;
  }
</style>

<template>
  <div class="container">
    <comp-slider v-bind:sliders="sliders"></comp-slider>
    <hgroup>
      <h3>这里是我最近发布的博文</h3>
      <img v-bind:src="'./images/star_divider.png'" width="430" height="16"/>
      <h4>您可以在“Blog”部分查看他们</h4>
    </hgroup>
    <comp-item title="最近的博文" v-bind:path="'/blog/'" desc="这里可以找到我最近的博文，关于前端技术还有···" v-bind:items="blogItems"></comp-item>
    <comp-item title="最近的项目" v-bind:path="'/portfolio/'" desc="这里可以了解到我参与制作的项目。" v-bind:items="portItems"></comp-item>
  </div>
</template>

<script>
import CompSlider from './slider.vue';
import CompItem from './item.vue';

export default {
  data () {
    return { count: 0 }
  },
  components: {
    CompSlider,
    CompItem
  },
  wilddog: {
    blogItems: new Wilddog('https://myblog.wilddogio.com/blog/article').limitToLast(2),
    portItems: new Wilddog('https://myblog.wilddogio.com/portfolio').limitToLast(2),
    sliders: new Wilddog('https://myblog.wilddogio.com/slider')
  }
}
</script>
