<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="9">
          <div class="ma-2 d-flex justify-center">
            <v-avatar size="30vh" class="ma-3">
              <img src="../public/headshot.jpg" />
            </v-avatar>
          </div>
          <h1> About Me </h1>
          <p>NamFromNam is a collection of loose wires and duct tape masquerading as a website, built by an even looser collection of wires and coffee known as Nam Tran.</p>
          <p>In my spare time, I enjoy picking up new hobbies which include cooking, baking, brewing, programming, gardening, woodworking, and crocheting.</p>

          <h1> Contact Info </h1>
          <p> My email is highly classified, and is in no way, shape, or form <v-btn text href="mailto:nam@namfromnam.com">nam@namfromnam.com</v-btn>.</p>
          <h1> My Tech </h1>
          <p> Below is a list of technology/libraries I have used over the years: </p>
          <Poketech @click.native="explain()" />
          <div v-if="needsExplain"> 
          <p>Yes, some of these are pokemon.</p>
          <v-img src="https://i.imgur.com/r0SEEoh.jpeg"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <router-view></router-view>
  </div>
</template>

<script>
import Poketech from './components/Poketech.vue';

export default {
    data() {
        return {
            needsExplain: false,
        }
    },
    methods: {
      explain: function() {
        this.needsExplain = true;
      }
    },
    components: {
        Poketech,
    }
}
</script>

<style scoped>
.v-btn {
  text-transform:none !important;
}
</style>