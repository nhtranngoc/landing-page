<template>
    <div id="container">
        <div id="img"><a :href="data.link" target="__blank"><img :src="data.img" /></a></div>
        <div id="textContainer">
            <div id="name" class="text">{{data.name}}</div>
            <div id="status" class="text">Status: {{data.completed}}</div>
            <div id="tech" class="text">Tech: {{data.tech}}</div>
            <div id="tag" class="text">{{data.tag}}</div>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
#img {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2%;
}

img {
    border-radius: 2%;
    max-width: 100%;
    max-height: 100%;
}

img:hover {
    opacity: 0.8;
}

.text{
    margin-bottom: .5em;
    font-size: 100%;
}

#textContainer {
    width: 68%;
}

#container {
    display: inline-flex;
    flex-flow: row;
    margin-bottom: 1em;
    width: 100%;
    height: 20%;
}

#name {
    font-size: 150%;
    color: #e46c76;
}

</style>