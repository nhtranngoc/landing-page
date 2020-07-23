<template>
    <div>
        <TopBar heading="Hire Me" />
        <Countdown />
        <div class="paragraph">
            <p>until I am forced to leave the United States. That is, unless I find a job.</p>
        </div>
        <Footer />
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Countdown from './components/Countdown.vue';
import Footer from './components/Footer';

export default {
    components: {
        TopBar,
        Countdown,
        Footer
    }
}
</script>