<template>
  <div>
    <v-container fluid>
      <v-row dense justify="center"
             v-for="project in projects"
             :key="project.name">
        <v-col md="auto">
          <Card :data="project"/>
        </v-col>
      </v-row>
      <v-row v-if="projects.length === 0" align="center" justify="center">
        <p> I'm afraid there's not much here right now. I'll let you know if I come up with anything.</p>
      </v-row>
    </v-container>
    <router-view></router-view>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import data from './data.json';

export default {
    components: {
        Card
    },
    computed: {
        projects: function() {
            return data[this.$route.params.category];
        },
    }
}
</script>