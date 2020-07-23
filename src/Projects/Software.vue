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
                {link: 'projects/software', heading: "Software"}
            ],
            projects : [
                {
                    name: 'Landing Page',
                    tech: 'VueJS, lots of hardcoded components',
                    img: 'https://raw.githubusercontent.com/nhtranngoc/landing-page/master/screenshot.PNG',
                    completed: 'In Progress',
                    link: 'https://namfromnam.com',
                    tag: 'An riddle, wrapped up in an enigma.'
                },
                {
                    name: 'Yet Another CHIP-8 Emulator',
                    tech: 'C, CMake, SDL2',
                    img: 'https://raw.githubusercontent.com/nhtranngoc/yace/master/screenshot.png',
                    completed: 'Completed',
                    link: 'https://github.com/nhtranngoc/yace',
                    tag: 'My take on the ubiquitous CHIP-8 Emulator, as an exercise in C, CMake. Plus I have always wanted to learn how an emulator works. Future roadmaps include adding sound functionality, and porting the emulator to an embedded platform (e.g. ESP32).',
                },
                {
                    name: 'Seven Hills Assistive Technology Database',
                    tech: 'NodeJS, Angular 1.0, Bootstrap, MySQL',
                    img: 'https://raw.githubusercontent.com/nhtranngoc/SevenHills/master/home.png',
                    link: 'https://github.com/nhtranngoc/sevenhills',
                    completed: 'Completed',
                    tag: 'As part of my Interactive Qualifying Project, our team was tasked to build a searchable database of assistive technologies available at Seven Hills Foundation, a nonprofit that provides support for adults and children with disabilities.'
                },
                {
                    name: 'Reversi (Othello) AI',
                    tech: 'Java',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Othello-Standard-Board.jpg',
                    completed: 'Completed',
                    link: 'https://github.com/JLLeitschuh/CS4341_Team10',
                    tag: 'Final project for Artificial Intelligence course - a genetic algorithm agent that learns how to play Othello.'
                },
                {
                    name: 'SteamHour Chrome Extension',
                    tech: 'JavaScript',
                    img: 'https://raw.githubusercontent.com/nhtranngoc/SteamHour-chrome-extension/master/icon.png',
                    completed: 'Limbo',
                    link: 'https://github.com/nhtranngoc/SteamHour-chrome-extension',
                    tag: 'A foray into the world of Chrome Extensions. I wrote this after finding myself playing too much games. The extension lives on your hot bar, and displays how many hours you spent playing games in the past two weeks. Sadly it was quickly abandoned in favor of playing more games.'
                },
                {
                    name: 'Gregify Chrome Extension',
                    tech: 'JavaScript, RegEx',
                    img: 'https://lh3.googleusercontent.com/zg_kim4BIx5AOur2A5tpNpx0LRxsk7oUhu1sbszjI6n73B0xObrMnvQTRwxTe0d1pRJtDCQuXA=w640-h400-e365',
                    completed: 'Unfortunately completed',
                    link: 'https://chrome.google.com/webstore/detail/gregify/ihjcfigbnjeiboinlfhgmicgodmpolbh?hl=en',
                    tag: 'A blight upon the world, Gregify will turn any pronouns on your browser into Greg. Inspired by a Reddit thread. As of this time, there are 14 users. God bless their souls.'

                }
            ]
        }
    }
}
</script>