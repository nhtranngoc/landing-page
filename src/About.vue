<template>
    <div>
        <TopBar heading="About me"/>
        <img id="headshot" src="../public/headshot.jpg">
        <div class="paragraph">
            <p>
                NamFromNam is a collection of loose wires and duct tape masquerading as a website, built by an even looser collection of wires and coffee known as Nam Tran.
            </p>
            <p>
                In my spare time, I enjoy picking up new hobbies which include cooking, baking, brewing, programming, gardening, woodworking, and crocheting.
            </p>

            <h1> Contact Info </h1>
            <p> My email is highly classified, and is in no way, shape, or form <a href="mailto:nam@namfromnam.com">nam@namfromnam.com</a></P>
            <p> I also have a GitHub page <a href="https://github.com/nhtranngoc">@nhtranngoc</a> where I put all my silly projects.</p>

        </div>
        <Footer />
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        TopBar,
        Footer
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.paragraph {
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 20px;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 15%;
}

p, h1, a{
    z-index: 2;
    color: #f1faee;
    font-size: 110%;
    line-height: 150%;
    font-family: 'Roboto', Arial;
}

h1 {
    font-size: 160%;
}

#headshot {
    display: block;
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: auto;
    margin-right: auto;
    width: 12%;
    height: auto;
    border-radius: 50%;
}

</style>