<template>
    <div>
        <ul>
            <template
            v-for="(link, index) in links"
            class="nav-section">
                <v-tooltip bottom :key="link.href">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        text
                        v-bind="attrs"
                        v-on="on"
                        :to="link.href">
                        {{ link.text }}
                        </v-btn>
                        <v-divider 
                        inset
                        vertical
                        light
                        v-if="index < links.length - 1" />
                    </template>
                    <span>{{ link.tooltip }}</span>
                </v-tooltip>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    text: 'About',
                    tooltip: 'About me',
                    href: '/about'
                },
                {
                    text: 'Hire Me',
                    tooltip: 'I\'m open for hiring!',
                    href: '/hireme'
                },
                {
                    text: 'Projects',
                    tooltip: 'Things I build for fun',
                    href: '/projects'
                },
                {
                    text: 'What\'s this?',
                    tooltip: 'About this site',
                    href: '/site'
                },
                {
                    text: 'Resume',
                    tooltip: 'Everything packed in one neat little page',
                    href: 'https://www.dropbox.com/s/9dgllxi4trqdd29/NamTran_Resume.pdf?dl=1'
                }
            ]
        }
    }
}
</script>

<style scoped>
.nav-section {
    display: inline-block;
}
</style>