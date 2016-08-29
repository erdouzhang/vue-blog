<style scoped>
  .page{
    width: 100%;
    height: 100%;
  }
  .middle{
    width:980px;
    margin: 0 auto;
  }
</style>
<template>
<div class="page">
  <comp-header></comp-header>
  <div class="middle">
      <comp-menu></comp-menu>
      <router-view></router-view>
  </div>
  <comp-footer></comp-footer>
</div>
</template>

<script>
import CompHeader from './header.vue'
import CompMenu from './menu.vue'
import CompContent from './content.vue'
import CompFooter from './footer.vue'

export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    CompHeader,
    CompMenu,
    CompContent,
    CompFooter
  }
}

</script>
