<template>
    <div>
        <TopBar heading="Projects" />
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
    components: {
        TopBar
    }
}
</script>