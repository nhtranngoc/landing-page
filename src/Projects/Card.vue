<template>
    <v-card
      class="secondary ma-3"
      max-width="60vh"
      elavation="2"
      ripple
    >
    <v-img :src="data.img" height="200px"></v-img>
    <v-card-title> {{ data.name }} </v-card-title>
    <v-card-subtitle> 
        <p ><strong>Status:</strong> {{ data.completed }} </p>
        <p> <strong>Tech:</strong> {{ data.tech }} </p>
    </v-card-subtitle>
    <v-card-text> {{ data.tag }} </v-card-text>
    <v-card-actions v-if="data.link"> <v-btn text color="red lighten-1" target="_blank" :href="data.link">Explore</v-btn></v-card-actions>
    </v-card>

</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>