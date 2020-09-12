<template>
    <div>
        <TopBar :nav="nav"/>
        <v-container>
            <v-row>
                <v-col>
                    <p>This website stems primarily from a need for a job by yours truly. But I also realized that I have never had a centralized portfolio for all of my projects. So there it is, the lengthy history of how this site came to be.</p>

                    <h1>Weird circles</h1>
                    <p>The little flying circles on the home page are a part of something called "boids". "Boids" is pronounced exactly how you would pronounce "birds", if you are a cranky New Yorker. Boid is an algorithm for simulating flock behavior, and it is absolutely fascinating to watch. I'll let my friend Destin and Ben Eater explain it better than I do.</p>
                    <iframe id="video" src="https://www.youtube.com/embed/4LWmRuB-uNU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Needless to say, the first time I was able to get the boids working, I stared at it for no less than an hour.</p>

                    <h1> Easter Egg </h1>
                    <p>I had people asking me if the weird marks on top of the "a" in "Tran" is a bug. Unfortunately, it isn't. Much as how Germanic languages have the ever elusive umlauts (the ä, ö, and ü), Vietnamese language has its own quirks.</p> 
                    <p>In an attempt to make my name accessible to Western audience, I anglicized my name by taking out the accent marks. But I am a greedy person, so I like to leave a mark (no pun intended) of my heritage on my website, so a compromise was made.</p>
                    <p>In short, no, that was not a bug. If you truly feel the need to know my name in all of its accented glory, it is "Trần Ngọc Hoàng Nam", loosely translated to Naked Jade Emperor of 'Nam. My parents have quite a way with words, I know.</p>

                    <h1> Design choices </h1>
                    <p>I am nowhere close to be a professional web designer, or any kind of amateur designer, for that matter. But I like simple things. And the goal of this design is to be excruciatingly simplistic, with only a 6-color palette, and 2 main font families. The buttons are designed to be flat, and the text layout is inspired from Github-styled Markdown.</p>
                    <p>Another reason for the minimalistic choice is I tend to overcomplicate my projects. With no time to spare - as any day lost is another unemployed day, I want to finish this as quickly as possible. Is it a perfect page? No. Is the code pretty? Far from it. But it serves its purposes, and for that I am content.</p>

                </v-col>
            </v-row>
        </v-container>
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
    components: {
        TopBar
    },
    data() {
        return {
            nav: [
                {link: 'site', heading: 'About This Site'}
            ]
        }
    }
}
</script>

<style scoped>
#video {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 450px;

}
</style>