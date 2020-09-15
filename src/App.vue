<template>
  <v-app>
    <SideBar 
      v-if="['Home'].indexOf(this.$route.name)"
    />
    <v-main>
      <v-container fluid>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>  
import Footer from './components/Footer';
import SideBar from './components/SideBar';

export default {
  name: 'App',

  components: {
    Footer,
    SideBar
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .35s;
}

.fade-enter-active {
  transition-delay: .35s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
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