<template>
    <div>
        <TopBar :nav="nav" />
        <Card />
        <router-view></router-view>
    </div>
</template>

<script>
import Card from './Card.vue';
import TopBar from '../components/TopBar';

export default {
    components: {
        TopBar,
        Card
    },
    data() {
        return {
            nav: [
                {link: 'projects', heading: "Projects"},
                {link: 'projects/hardware', heading: "Hardware"}
            ]
        }
    }
}
</script>