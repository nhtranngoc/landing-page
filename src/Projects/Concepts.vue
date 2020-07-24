<template>
    <div>
        <TopBar :nav="nav" />
        <div class="paragraph">
        <p> I'm afraid there's not much here right now. I'll let you know if I come up with anything.</p>
        </div>
        <!-- <Card /> -->
        <router-view></router-view>
    </div>
</template>

<script>
// import Card from './Card.vue';
import TopBar from '../components/TopBar';

export default {
    components: {
        TopBar,
        // Card
    },
    data() {
        return {
            nav: [
                {link: 'projects', heading: "Projects"},
                {link: 'projects/concepts', heading: "Concepts"}
            ]
        }
    }
}
</script>