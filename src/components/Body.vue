<template>
  <div class="Body">
  <p class="name" @click="toggleName"> Nam Tr{{vietname}}n </p>
  <p class="tag"> Programmer, Hardware tinkerer, Maker and Consumer of food.</p>
  <div class="icons">
    <a class="icon" href="/blog" target="_blank" title="Blog"> <span class="fas fa-rss"></span> </a>
    <a class="icon" href="https://www.linkedin.com/in/nhtranngoc" target="_blank" title="LinkedIn"> <span class="fab fa-linkedin"></span> </a>
    <a class="icon" href="https://github.com/nhtranngoc/" target="_blank" title="GitHub"> <span class="fab fa-github-alt"></span> </a>
  </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
export default {
  name: 'Body',
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
}

.name {
  font-size: 8vw;
  margin: 0;
  padding: 0;
}

.icons {
  margin-top: 0.2rem;
  font-size: 0;
}

.icon {
  display: inline-block;
  border: 0.04rem solid;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  margin-right: 0.5rem;
  font-size: 1rem !important;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color:rgb(127,127,127);
}
</style>
