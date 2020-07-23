<template>
    <div>
        <TopBar heading="Projects" />
        <Footer />
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        TopBar,
        Footer
    }
}
</script>