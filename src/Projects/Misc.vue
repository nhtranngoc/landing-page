<template>
    <div>
        <TopBar :nav="nav" />
        <div class="paragraph">
        <Card :data="project" v-for="project in projects" :key="project.name"/>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Card from './Card.vue';
import TopBar from '../components/TopBar';

export default {
    components: {
        TopBar,
        Card
    },
    data() {
        return {
            nav: [
                {link: 'projects', heading: "Projects"},
                {link: 'projects/hardware', heading: "Miscellaneous"}
            ],
            projects : [
                {
                    name: 'Carved Elephant',
                    tech: 'Redwood',
                    img: 'https://i.imgur.com/FtUbW1L.jpg',
                    completed: 'Treasured',
                    link: '#',
                    tag: 'Carved wooden elephant for someone who\'s favorite animal is elephant. She loves it.'
                },
                {
                    name: 'Modern Coffee Table',
                    tech: 'Plywood, Pine',
                    img: 'https://i.imgur.com/c07WBTB.jpg',
                    completed: 'Completed',
                    link: '#',
                    tag: 'Who needs IKEA furniture when you can spend a whole day working on a shoddy but ultimately cool looking coffee table for your fancy frappucino?'
                },
                {
                    name: 'End Grain Cutting Board',
                    tech: 'Scrapwood',
                    img: 'https://i.imgur.com/mdN5RG0.jpg',
                    completed: 'Broken',
                    link: '#',
                    tag: 'My first attempt at a hip cutting board. It ended up being too small and broke after a couple of uses. Fun looking though'
                },
                {
                    name: 'End Grain Cutting Board, revisited',
                    tech: 'Redwood',
                    img: 'https://i.imgur.com/RGf6J2T.jpg',
                    completed: 'Warped but not broken',
                    link: '#',
                    tag: 'My second attempt fared a bit better - though a lack of sufficent sealing did not make for a happy ending.'
                }, 
                {
                    name: 'Lucky Money Envelope',
                    tech: 'Wood-carved stamp on paper',
                    img: 'https://i.imgur.com/Snr0az8.jpg',
                    completed: 'Given out',
                    link: '#',
                    tag: 'Lunar New Year Lucky Money envelope I made to give out to friends and family. An exercise in stampmaking.'
                },
                {
                    name: 'Nostos',
                    tech: 'Photography',
                    img: 'https://i.imgur.com/ve1UgAj.jpg',
                    completed: 'Sold',
                    link: '#',
                    tag: 'Picture of my childhood home, being repainted before being sold.'
                },
                {
                    name: 'Planet Express',
                    tech: 'Plywood, Laser cut',
                    img: 'https://i.imgur.com/FRxk35U.jpg',
                    completed: 'Completed',
                    link: '#',
                    tag: 'Layered laser cut plywood for one of my favorite shows. Playing around with wood materials.'
                },
                {
                    name: 'Self-portrait',
                    tech: 'Watercolor',
                    img: 'https://i.imgur.com/u1JPrwm.jpg',
                    completed: 'Completed',
                    link: '#',
                    tag: 'Crude drawing of my crude God given face.'
                },
                {
                    name: 'Hufflepuff',
                    tech: 'Plywood, Laser cut, acrylic paint',
                    img: 'https://i.imgur.com/2JryDjF.jpg',
                    completed: 'Treasured',
                    link: '#',
                    tag: 'Someone\'s favorite house being Hufflepuff. She loves it.'
                }
            ]
        }
    }
}
</script>