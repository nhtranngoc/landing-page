<template>
    <v-navigation-drawer 
    class="primary darken-2 elevation-4"
    bottom
    app
    >
        <v-list-item>
    <v-list-item-content>
        <v-list-item-title class="title">
        Nam From { Viet }Nam
        </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
        dense
        nav
      >
        <v-list-item
          v-for="page in pages"
          :key="page.title"
          :to="page.href"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(project, i) in projects"
            :key="i"
            :to="project.href"
            link
          >
            <v-list-item-icon>
              <v-icon v-text="project.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title> {{ project.title }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

      </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {
                    title: 'Home', 
                    href: '/',
                    icon: 'mdi-home-outline'
                },
                {
                    title: 'About Site', 
                    href: '/site',
                    icon: 'mdi-help-circle'
                },
                {
                    title: 'About Me',
                    href: '/about',
                    icon: 'mdi-account'
                },
                {
                    title: 'Hire Me',
                    href: '/hireme',
                    icon: 'mdi-bell'
                }
            ],
            projects: [
                {
                    title: 'Software',
                    href: '/projects/software',
                    icon: 'mdi-code-tags'
                },
                {
                    title: 'Hardware',
                    href: '/projects/hardware',
                    icon: 'mdi-wrench'

                },
                {
                    title: 'Miscellaneous',
                    href: '/projects/misc',
                    icon: 'mdi-dots-horizontal'
                },
                {
                    title: 'Concepts',
                    href: '/projects/concepts',
                    icon: 'mdi-shape'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>