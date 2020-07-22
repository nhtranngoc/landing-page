<template>
    <div class="nav">
        <ul>
        <li class="nav-section"><router-link class="nav-link" to="/about" title="About me">About</router-link></li> |
        <li class="nav-section"><router-link class="nav-link" to="/hireme" title="I'm open for hiring!">Hire Me</router-link></li> |
        <li class="nav-section"><router-link class="nav-link" to="/projects" title="My projects">Projects</router-link></li> |
        <li class="nav-section"><router-link class="nav-link" to="/about" title="What's all this?">Animation?</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    padding: 0;
}
.nav {
    position: relative;
    margin: 0;
    padding: 0;
}

.nav-section {
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;

}

.nav-link {
    padding: 0 5px;
    text-decoration: none;
    color: #f1faee;
    border-radius: 5%;
}

.nav-link:hover {
    background-color: #457b9d;
}
</style>