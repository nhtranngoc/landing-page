<template>
    <div>
        <Link class="link"/>
        <div> © 2020. Built with VueJS and duct tape. </div>
    </div>
</template>

<script>
import Link from './Link';

export default {
    components: {
        Link
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arsenal&display=swap");

* {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 0.8rem;
    text-align: center;
    z-index: 2;
    font-family: 'Arsenal', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #f1faee;
}

.link {
    margin-bottom: 1.3rem;
}
</style>