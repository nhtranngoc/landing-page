<template>
    <div id="container">
        <router-link to="/" id="home"><span class="fas fa-home"></span></router-link>
        <!-- <div class="divider">|</div><router-link :to="'/' + this.nav[0].link" id="heading">{{this.nav[0].heading}} </router-link> -->
        <div v-for="item in nav" :key="item.link">
            <div class="divider">></div>
            <router-link :to="'/' + item.link" id="heading">{{item.heading}} </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nav: {
            type: Array,
            required: true
        },
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arsenal&display=swap");

* {
    display: inline-block;
    font-family: 'Arsenal';
    text-decoration: none;
    color: #f1faee;
    margin-right: 0.2em;
}

#container {
    color: #f1faee;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 1em;
    margin-top: 0.3em;
}

#home {
    height: 100%;
    font-size: 1.5em;
}

#home:hover, a:hover {
    color: #457b9d !important;
}

#heading , .divider {

    font-size: 2.5em;
}
</style>