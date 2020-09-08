<template>
    <div>
        <ul>
            <li class="nav-section"><v-btn text to="/about" title="About me">About</v-btn></li> |
            <li class="nav-section"><v-btn text to="/hireme" title="I'm open for hiring!">Hire Me</v-btn></li> |
            <li class="nav-section"><v-btn text to="/projects" title="My projects">Projects</v-btn></li> |
            <li class="nav-section"><v-btn text to="/site" title="What's all this?">What's This?</v-btn></li> |
            <li class="nav-section"><v-btn text href="https://www.dropbox.com/s/9dgllxi4trqdd29/NamTran_Resume.pdf?dl=1" title="Download my resume">Resume</v-btn></li>
        </ul>
    </div>
</template>

<style scoped>
.nav-section {
    display: inline-block;
}
</style>