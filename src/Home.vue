<template>
  <div ref="app" id="app">
    <Body />
    <Canvas ref="canvasComponent" :width="canvasWidth" :height="canvasHeight"/>
    <Link class="link"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Body from './components/Body.vue'
import Canvas from './components/Canvas.vue'
import Link from './components/Link.vue'

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
    Link
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

.link {
  margin-bottom: 1.8rem;
  position: fixed;
  bottom: 0.5em;
  left: 0;
  width: 100%;
  font-size: 0.8rem;
  text-align: center;
  font-family: 'Arsenal', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #f1faee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* left: 50%;
  transform: translateX(-50%);
  position: relative; */
  
}
</style>
