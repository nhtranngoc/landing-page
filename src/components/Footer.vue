<template>
  <v-footer
    padless
    app
    inset
    class="elevation-0"
  >
    <v-row
      class="secondary"
      justify="center"
      no-gutters
    >
      <v-btn
        class="secondary ma-1"
        depressed
        fab
        :href="link.href"
        icons
        small
        target="_blank"
        v-for="link in links"
        :key="link.href"
      >
        <v-icon> {{ link.text }} </v-icon>
      </v-btn>
      <v-col
        class="secondary py-1 text-center white--text"
        cols="12"
      >
        © {{ new Date().getFullYear() }} — <strong>Built with VueJS and duct tape.</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {
                    text: 'fab fa-medium',
                    href: 'https://medium.com/@namtran_77878/'
                },
                {
                    text: 'fab fa-linkedin',
                    href: 'https://www.linkedin.com/in/nhtranngoc'
                },
                {
                    text: 'fab fa-github-alt',
                    href: 'https://github.com/nhtranngoc/'
                }
            ]
        }
    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arsenal&display=swap");

* {
    font-size: 0.8rem;
    font-family: 'Arsenal', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>