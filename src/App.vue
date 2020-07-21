<template>
  <div ref="app" id="app">
    <Body />
    <Canvas ref="canvasComponent" :width="canvasWidth" :height="canvasHeight"/>
    <Footer />
  </div>
</template>

<script>
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'
import Canvas from './components/Canvas.vue'

export default {
  name: 'App',
  data() {
    return {
      canvasWidth: 0,
      canvasHeight: 50
    }
  },
  components: {
    Body,
    Canvas,
    Footer
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize: function() {
      // A. Is this hardcoded? Yes
    // B. Do I care enough to actually implement margin checking? ...
    this.canvasWidth = window.innerWidth - 10;
    this.canvasHeight = window.innerHeight - 10;
    this.$refs.canvasComponent.startDrawing();
    }
  }
}
</script>

<style>
html {
  background-color: #1d3557;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* left: 50%;
  transform: translateX(-50%);
  position: relative; */
  
}
</style>
