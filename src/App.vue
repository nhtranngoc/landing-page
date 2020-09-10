<template>
  <v-app>
    <v-main>
      <Footer/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.v-application {
    background-color: var(--v-background-base) !important;
}

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
    font-size: 110%;
    line-height: 150%;
    font-family: 'Roboto', Arial;
}
h1 {
    font-size: 160%;
}
</style>