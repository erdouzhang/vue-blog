<style scoped>
.menu {
  width: 244px;
  overflow: hidden;
  float: left;
  position: fixed;
  z-index: 99;
  top: 120px;
  background: white;
}
nav{
  margin-top: 60px;
  margin-left: 40px;
}
nav li a{
  font-size: 18px;
  line-height: 40px;
  color: #707070;
}
</style>

<template>
  <div class="container menu">
    <nav>
      <li><a v-link="{ path: '/home' }">Home</a></li>
      <li><a v-link="{ path: '/blog' }">Blog</a></li>
      <li><a v-link="{ path: '/gallery' }">Gallery</a></li>
      <li><a v-link="{ path: '/portfolio' }">Portfolio</a></li>
      <li><a v-link="{ path: '/about' }">About me</a></li>
    </nav>
  </div>
</template>
