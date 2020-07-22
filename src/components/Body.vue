<template>
  <div class="Body">
  <p class="name" @mouseover="toggleName" @mouseleave="toggleName"> Nam Tr{{vietname}}n </p>
  <!-- <p class="tag"> Programmer, Hardware Tinkerer, Maker, and Consumer of Food.</p> -->
  <NavBar />
  </div>
</template>

<script>
import NavBar from './NavBar'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
export default {
  name: 'Body',
  components: {
    NavBar,
  },
  props: {
    msg: String
  },
  data: function() {
    return {
      vietname: 'a'
    }
  },
  methods: {
    toggleName() {
      this.vietname =(this.vietname === 'a') ? 'ầ' : 'a';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arsenal&display=swap");

.Body {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  font-family: 'Arsenal', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  color: #f1faee;
}

.name {
  font-size: 8vw;
  margin: 0;
  padding: 0;
}
</style>
