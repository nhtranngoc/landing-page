<template>
    <div>
        <TopBar :nav="nav" />
        <Footer />
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';

export default {
    data() {
        return {
            nav : [
                {link: "projects", heading: "Projects"}
            ]
        }
    },
    components: {
        TopBar,
        Footer
    }
}
</script>