<template>
    <v-content>
        <TopBar :nav="nav"/>
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col md="auto">
                    <v-avatar size="30vh">
                        <v-img src="../public/headshot.jpg" />
                    </v-avatar>
                </v-col>
                <v-col cols="7">
                    <p>NamFromNam is a collection of loose wires and duct tape masquerading as a website, built by an even looser collection of wires and coffee known as Nam Tran.</p>
                    <p>In my spare time, I enjoy picking up new hobbies which include cooking, baking, brewing, programming, gardening, woodworking, and crocheting.</p>

                    <h1> Contact Info </h1>
                    <p> My email is highly classified, and is in no way, shape, or form <a href="mailto:nam@namfromnam.com">nam@namfromnam.com</a></P>
                    <p> I also have a GitHub page <a href="https://github.com/nhtranngoc">@nhtranngoc</a> where I put all my silly projects.</p>
                </v-col>
            </v-row>
        </v-container>
        <router-view></router-view>
    </v-content>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
    data() {
        return {
            nav : [
                {link: 'about', heading: "About me"},
            ]
        }
    },
    components: {
        TopBar
    }
}
</script>

<style scoped>
/* #headshot {
    display: block;
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: auto;
    margin-right: auto;
    width: 12%;
    height: auto;
    border-radius: 50%;
} */

</style>