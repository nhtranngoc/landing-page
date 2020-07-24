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
                {link: 'projects/hardware', heading: "Hardware"}
            ],
            projects : [
                {
                    name: 'Red Legs, A Bipedal Robotic Walking Platform',
                    tech: 'STM32F4, KiCAD, C',
                    img: 'https://i.imgur.com/fzkrxIb.jpg',
                    completed: 'Completed-ish',
                    link: 'https://github.com/bmwaugh/red_legs20',
                    tag: 'Senior thesis for Electrical & Computer Engineering major. I revamped the electrical system, reverse engineered existing controllers, and designed new PCB and programmed STM32 microcontroller.'
                },
                {
                    name: 'DinoPill, automating Chrome\'s T-Rex game',
                    tech: 'STM32F1, libopencm3, USB-HID', 
                    img: 'https://lh3.googleusercontent.com/YPSZ9e1wW1z7cIyjkpQUqAdMzlgaPprj3_1n9tKesPfYR8U1nlxcsHFk8Dd-1XWa-ymskRLekQ=w640-h400-e365',
                    completed: 'In progress',
                    link: 'https://github.com/nhtranngoc/dinopill',
                    tag: 'For when you don\'t have an internet connection, just pop a DinoPill on to your screen and watch that little dinosaur jump.'
                },
                {
                    name: 'Yet Another Ray Tracer',
                    tech: 'STM32F4, libopencm3, CMake, C++, CppUTest',
                    img: 'https://miro.medium.com/max/700/1*Ry6SngkybT1y_5plu9QuSw.jpeg',
                    completed: 'Mostly finished',
                    link: 'https://itnext.io/ray-tracer-challenge-on-the-stm32f429i-discovery-board-9ca21d7bd49d',
                    tag: 'Learning how to build a ray tracer, with a twist. The twist is it\'s running on an STM32 development board. I used this project to hone my Test Driven Development skills, and my C++-fu.'
                }, 
                {
                    name: 'Yet Another Ray Caster',
                    tech: 'STM32F4, libopencm3, CMake, C++',
                    img: 'https://raw.githubusercontent.com/ssloy/tinyraycaster/master/doc/017.png',
                    completed: 'In progress',
                    link: 'https://github.com/nhtranngoc/yarc',
                    tag: 'Learning another graphics rendering technique, also on the STM32F4 board, hoping to incorporate the on-board gyro sensor'
                },
                {
                    name: 'view-board/ nopixel',
                    tech: 'JavaScript, C++, KiCAD',
                    img: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/20214321_770003523180233_7635264933780783104_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=NLZHzPQz9DEAX-GFkUI&oh=ed9c1c28bd0b435c59227a40c2f6e2f9&oe=5F44F794',
                    completed: 'On hiatus',
                    link: 'https://github.com/wpivis/view-board',
                    tag: 'An interactive data-visualization tool, inspired by Google\'s AnyPixel.js project. view-board is comprised of 49 back-lit arcade buttons, all of which can be controlled by an npm module, and communicated via a virtual Serial Port.'
                },
                {
                    name: 'Lightning Globe',
                    tech: 'Javascript, C++, SolidWorks',
                    img: 'http://www.joshuarosenstock.com/teaching/lightart-a19/wp-content/uploads/sites/11/2019/10/IMG_20191007_140205-1024x768.jpg',
                    completed: 'Completed-ish, name still WIP',
                    link: 'http://www.joshuarosenstock.com/teaching/lightart-a19/nhtranngoc/lightning-globe-documentation-nam-tran/',
                    tag: 'An art installation, the Lightning Globe brings lightning from all over the world into your room, using data collected by the World Wide Lightning Location Network. A JSON file with lightning locations is parsed, and mapped to a pixel, creating a mesmerizing light show.'
                },
                {
                    name: 'Mareep Charlieplex',
                    tech: 'AVR, KiCAD',
                    img: 'https://raw.githubusercontent.com/nhtranngoc/charlieplex/master/mareep.jpg',
                    completed: 'Waiting for PCB to arrive',
                    link: 'https://github.com/nhtranngoc/charlieplex',
                    tag: 'An attempt at a charlieplexed LED keychain, in the shape of your favorite sheep Pokemon. The backside houses an ATTiny85 microcontroller and coin cell battery.'
                },
                {
                    name: 'Sous Vide Rice Cooker',
                    tech: 'AVR, I2C, OneWire',
                    img: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/21147185_813552032159272_8348825229765640192_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=ZGTfKxt938YAX8XrFss&oh=aaa944c2a097b9e43c58098dd47a1989&oe=5F44B87B',
                    completed: 'Delicious',
                    link: 'https://github.com/nhtranngoc/sharp-sousvide',
                    tag: 'An ex-rice cooker found a new lease in life in a temp-controlled hot water bath. Makes a perfectly rare lamb shank, which can rarely ever be perfect.'
                }, 
                {
                    name: 'room-light',
                    tech: 'WS2812, ESP8266, OneWire, NodeJS',
                    img: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/19623162_1837834213200556_324424430627323904_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=bQ3-GcxGIdUAX86ZSL_&oh=b01f95dfa0e1ae07e43f58db465b1b55&oe=5F43C350',
                    completed: 'Completed',
                    link: 'https://github.com/nhtranngoc/room-light',
                    tag: 'The owner of this project nearly suffered an almost fatal heart attack upon finding out how much it costs to RGB-fy his entire apartment. Dauntless, he set out to build his own version using a strip of RGB LED and his own sweat and tears.'
                }, 
                {
                    name: 'twitch-plays-drums',
                    tech: 'NodeJS, Arduino',
                    img: 'https://blog.twitch.tv/assets/uploads/03-glitch.jpg',
                    completed: 'Completed',
                    link: 'https://github.com/nhtranngoc/twitch-plays-drums',
                    tag: 'An elegant musical instrument for a civilized age, Twitch Plays Drums scans Twitch chat for uses of common emotes and assigns them a value, which is then played on a mechanized drum set (read: drum sticks hot glued to servos and pointed at various household items. For maximum chaos, use this on a LoL stream'
                }, 
                {
                    name: 'Simultaneous Localization and Mapping on TurtleBot',
                    tech: 'Python2.7, ROS',
                    img : 'https://robots.ieee.org/robots/turtlebot/Photos/SD/turtlebot-photo1-full.jpg',
                    link: '',
                    completed: 'Completed',
                    tag: 'For RBE3002 at WPI - A SLAM algorithm for the TurtleBot, running on Robotics Operating Systems and Python.'
                },
                {
                    name: 'VGA Animation on FPGA',
                    tech: 'Verilog, Artix-7 FPGA',
                    img: 'https://cdn10.bigcommerce.com/s-7gavg/products/106/images/5388/Basys-3-0__67238.1554833305.1280.1280.png?c=2',
                    link: '',
                    completed: 'Completed',
                    tag: 'For ECE3829 at WPI. Programmed and displayed simple animations through VGA interface. Built test fixture to verify logic in Verilog.'
                },
                {
                    name: 'Guitar Hero clone on MSP430',
                    tech: 'C, MSP430',
                    img: 'https://www.ti.com/content/dam/ticom/images/products/ic/sensing-products/evm-boards/evm430-fr6047.png',
                    link: 'https://github.com/nhtranngoc/ECE2049_Lab2',
                    completed: 'Completed',
                    tag: 'For ECE2049 at WPI. Programmed a rudimentary, 16-bit clone of Guitar Hero. Surprisingly fun with Mario\'s Underwater theme playing.'
                },
                {
                    name: 'Colossal Ascent',
                    tech: 'Arduino, ESP8266',
                    img: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/586/391/datas/original.png',
                    link: 'https://devpost.com/software/colossal-ascent',
                    completed: 'Completed',
                    tag: 'A Hackathon project. Custom wireless game controller interfacing with an Unity game, which supports multiple controllers and sends data via UDP packets. We did not win, which was a huge unjust.'
                },
            ]
        }
    }
}
</script>