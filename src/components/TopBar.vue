<template>
    <div id="container">
        <router-link to="/" id="home"><span class="fas fa-home"></span></router-link>
        <div id="heading">| {{heading}} </div>
    </div>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arsenal&display=swap");

* {
    display: inline-block;
    font-family: 'Arsenal';
}

#container {
    color: #f1faee;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 1em;
    margin-top: 0.3em;
}

#home {
    color: #f1faee;
    height: 100%;
    font-size: 1.5em;
    margin-right: 0.4em;
}

#home:hover {
    color: #457b9d;
}

#heading {
    font-size: 2.5em;
}
</style>