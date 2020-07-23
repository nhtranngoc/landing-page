<template>
    <div>
        <TopBar :nav="nav" />
        <div id="categories">
            <div class="category"><router-link to="/projects/software">Software</router-link></div>
            <div class="category"><router-link to="/projects/hardware">Hardware</router-link></div>
            <div class="category"><router-link to="/projects/misc">Misc</router-link></div>
            <div class="category"><router-link to="/projects/concepts">Concepts</router-link></div>
        </div>
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

<style scoped>

#categories {
    position: absolute;
    margin-left: 25%;
    top: 45%;
    transform: translateY(-50%);
    width: 50%;
}

.category {
    /* display: inline-block; */
    margin-bottom: 1.5em;
    position: relative;
    font-size: 160%;
    max-width: 20%;
    height: 100%;
}

a {
    text-decoration: none;
}

a:hover {
    color: #457b9d;
}

</style>