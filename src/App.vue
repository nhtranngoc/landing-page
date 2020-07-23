<template>
  <div>
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.paragraph {
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 20px;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 15%;
}

p, h1, a, .text{
    z-index: 2;
    color: #f1faee;
    font-size: 110%;
    line-height: 150%;
    font-family: 'Roboto', Arial;
}

h1 {
    font-size: 160%;
}
</style>