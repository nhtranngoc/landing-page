<template>
    <div class="nav">
        <ul>
        <li class="nav-section"><a class="nav-link" href="/about" title="About me">About</a></li> |
        <li class="nav-section"><a class="nav-link" href="/hireme" title="About me">Hire Me</a></li> |
        <li class="nav-section"><a class="nav-link" href="/projects" title="About me">Projects</a></li> |
        <li class="nav-section"><a class="nav-link" href="/about" title="About me">Animation?</a></li>
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